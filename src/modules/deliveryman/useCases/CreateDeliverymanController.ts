import { Request, Response } from 'express'
import { CreateDeliverymanUseCase } from './CreateDeliverymanuseCase'
class CreateDeliverymanController {
  async handle(request: Request, response: Response): Promise<Response> {
    const createDeliverymanUseCase = new CreateDeliverymanUseCase()
    const { username, password } = request.body
    await createDeliverymanUseCase.execute({ username, password })

    return response.status(204).send()
  }
}
export { CreateDeliverymanController }
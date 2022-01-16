import { Request, Response } from 'express'
import { CreateClientUseCase } from './CreateClientUseCase'
class CreateClientController {
  async handle(request: Request, response: Response): Promise<Response> {
    const createClientUseCase = new CreateClientUseCase()
    const { username, password } = request.body
    await createClientUseCase.execute({ username, password })
    return response.status(204).send()
  }
}
export { CreateClientController }
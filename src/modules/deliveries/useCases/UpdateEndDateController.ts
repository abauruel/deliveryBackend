import { Request, Response } from "express";
import { UpdateEndDateUseCase } from "./UpdateEndDateUseCase";

class UpdateEndDateController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id_deliveryman } = request
    const { id: id_delivery } = request.params

    const updateEndDateUseCase = new UpdateEndDateUseCase()
    await updateEndDateUseCase.execute({ id_delivery, id_deliveryman })
    return response.status(201).send()
  }
}

export { UpdateEndDateController }
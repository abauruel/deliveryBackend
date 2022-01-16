import { Request, Response } from "express";
import { CreateDeliveryUseCase } from "./CreateDeliveryUseCase";

class CreateDeliveryController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { itemName } = request.body
    const { id_client } = request

    const createDeliveryUseCase = new CreateDeliveryUseCase()
    const delivery = await createDeliveryUseCase.execute({ id_client, itemName })
    return response.json(delivery)
  }
}

export { CreateDeliveryController }
import { Request, Response } from "express";
import { FindAllAvailableUseCase } from "./FindAllAvailableUseCase";

class FindAllAvailableController {
  async handle(resquest: Request, response: Response): Promise<Response> {
    const findAllWithoutEndDateUseCase = new FindAllAvailableUseCase()
    const deliveries = await findAllWithoutEndDateUseCase.execute()

    return response.json(deliveries)
  }
}

export { FindAllAvailableController }
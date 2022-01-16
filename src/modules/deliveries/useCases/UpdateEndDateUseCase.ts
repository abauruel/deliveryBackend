import { prisma } from "../../../database/prismaClient"

interface IUpdateEndDate {
  id_delivery: string,
  id_deliveryman: string
}

class UpdateEndDateUseCase {
  async execute({ id_delivery, id_deliveryman }: IUpdateEndDate) {
    const result = await prisma.deliveries.updateMany({
      where: {
        id_deliveryman,
        id: id_delivery,
      },
      data: {
        end_at: new Date()
      }
    })

    return result
  }
}

export { UpdateEndDateUseCase }
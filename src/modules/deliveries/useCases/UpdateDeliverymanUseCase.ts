import { prisma } from "../../../database/prismaClient"

interface IUpdatedelivery {
  id_deliveryman: string,
  id_delivery: string
}

class UpdateDeliverymanUseCase {
  async execute({ id_delivery, id_deliveryman }: IUpdatedelivery) {
    const delivery = await prisma.deliveries.update({
      where: {
        id: id_delivery
      },
      data: {
        id_deliveryman,

      }
    })
    return delivery
  }
}

export { UpdateDeliverymanUseCase }
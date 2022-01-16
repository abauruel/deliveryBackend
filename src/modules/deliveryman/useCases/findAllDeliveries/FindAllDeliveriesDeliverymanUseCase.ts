import { prisma } from "../../../../database/prismaClient"

class FindAllDeliveriesDeliverymanUseCase {
  async execute(id_delivery_man: string) {
    const deliveries = await prisma.deliveryman.findMany({
      where: {
        id: id_delivery_man
      },
      select: {
        Deliveries: true,
        id: true,
        username: true
      }
    })
    return deliveries
  }
}

export { FindAllDeliveriesDeliverymanUseCase }
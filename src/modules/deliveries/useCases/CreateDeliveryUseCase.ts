import { prisma } from "../../../database/prismaClient"

interface iCreateDelivery {
  itemName: string,
  id_client: string
}
class CreateDeliveryUseCase {
  async execute({ itemName, id_client }: iCreateDelivery) {
    const delivery = await prisma.deliveries.create({
      data: {
        item_name: itemName,
        id_client
      }
    })
    return delivery
  }
}


export { CreateDeliveryUseCase }
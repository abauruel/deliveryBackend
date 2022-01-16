import { prisma } from "../../../../database/prismaClient"

class FindAllDeliveriesUseCase {
  async execute(id_client: string) {
    const deliveries = await prisma.clients.findMany({
      where: {
        id: id_client
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

export { FindAllDeliveriesUseCase }
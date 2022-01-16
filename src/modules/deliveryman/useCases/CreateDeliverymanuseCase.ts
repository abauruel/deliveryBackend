import { prisma } from "../../../database/prismaClient"
import { hash } from 'bcrypt'
interface ICreateClient {
  username: string,
  password: string
}
class CreateDeliverymanUseCase {

  async execute({ username, password }: ICreateClient) {
    //Validar se usuario existe
    const deliverymanExist = await prisma.deliveryman.findFirst({
      where: {
        username: {
          equals: username,
          mode: 'insensitive'
        }
      }
    })

    if (deliverymanExist) {
      throw new Error('deliveryman already exist')
    }

    //criptografar senha
    const hashPassword = await hash(password, 10)
    const deliveryman = await prisma.deliveryman.create({
      data: {
        username, password: hashPassword
      }
    })

    return deliveryman
  }
}

export { CreateDeliverymanUseCase }
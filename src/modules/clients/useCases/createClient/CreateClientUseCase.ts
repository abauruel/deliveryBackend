import { prisma } from "../../../../database/prismaClient"
import { hash } from 'bcrypt'
interface ICreateClient {
  username: string,
  password: string
}
class CreateClientUseCase {

  async execute({ username, password }: ICreateClient) {
    //Validar se usuario existe
    const clientExist = await prisma.clients.findFirst({
      where: {
        username: {
          equals: username,
          mode: 'insensitive'
        }
      }
    })

    if (clientExist) {
      throw new Error('client already exist')
    }

    //criptografar senha
    const hashPassword = await hash(password, 10)
    const client = await prisma.clients.create({
      data: {
        username, password: hashPassword
      }
    })

    return client
    // salvar o client
  }
}

export { CreateClientUseCase }
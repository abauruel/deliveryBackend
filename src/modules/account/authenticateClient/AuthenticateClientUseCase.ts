import { prisma } from "../../../database/prismaClient";
import { compare } from 'bcrypt'
import { sign } from 'jsonwebtoken'

interface IAuthenticateClient {
  username: string,
  password: string
}

class AuthenticateClientUseCase {
  async execute({ username, password }: IAuthenticateClient) {
    const client = await prisma.clients.findFirst({
      where: {
        username: {
          mode: "insensitive"
        }
      }
    })

    if (!client) {
      throw new Error("username or password invalid")
    }

    const passwordMatch = await compare(password, client.password)
    if (!passwordMatch) {
      throw new Error("username or password invalid")

    }

    //Gerar Token
    const token = sign({ username }, "93259d59051db3880ec204d8d4d861ce", {
      subject: client.id,
      expiresIn: "1d"
    })

    return token
  }
}
export { AuthenticateClientUseCase }
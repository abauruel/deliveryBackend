import { prisma } from "../../../database/prismaClient";
import { compare } from 'bcrypt'
import { sign } from 'jsonwebtoken'

interface IAuthenticateDeliveryman {
  username: string,
  password: string
}

class AuthenticateDeliverymanUseCase {
  async execute({ username, password }: IAuthenticateDeliveryman) {
    const deliveryman = await prisma.deliveryman.findFirst({
      where: {
        username: {
          mode: "insensitive"
        }
      }
    })

    if (!deliveryman) {
      throw new Error("username or password invalid")
    }

    const passwordMatch = await compare(password, deliveryman.password)
    if (!passwordMatch) {
      throw new Error("username or password invalid")

    }

    //Gerar Token
    const token = sign({ username }, "93259d59053db3880ec204d8d4d861ce", {
      subject: deliveryman.id,
      expiresIn: "1d"
    })

    return token
  }
}
export { AuthenticateDeliverymanUseCase }
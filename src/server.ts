import express, { NextFunction, Request, Response } from 'express'
import 'express-async-errors'
import { routes } from './routes'

const app = express()
app.use(express.json())
app.use(routes)
app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
  if (err instanceof Error) {
    return response.status(400).json({
      message: err.message
    })
  }

  return response.status(500).json({
    message: "Internal server error"
  })
})
const port = 4000
app.listen(port, () => console.info(`server is running on ${port} port`))
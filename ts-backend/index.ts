import express, { Express, Request, Response } from 'express'
import { addRoutes } from './src/config/routes.config'
import mongoose from 'mongoose'
import * as dotenv from 'dotenv'

dotenv.config()

const app: Express = express()
const port = process.env.PORT

app.get('/', (_req: Request, res: Response) => {
  res.send('Express + TypeScript Server testing')
})

addRoutes(app)

async function bootstrap() {
  if (!process.env.DATABASE_URL) {
    throw new Error('Cannot read env database url!')
  }
  try {
    await mongoose.connect(process.env.DATABASE_URL, {
      dbName: process.env.DATABASE_NAME,
    })
    console.log('Connnected To MongoDB')
    app.listen(port, () => {
      console.log(`[server]: Server is running at http://localhost:${port}`)
    })
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
}

bootstrap()

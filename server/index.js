import express from 'express'
import cors from 'cors'
import api from './routes.js'

const app = express()
const port = 3333

app.use(cors())
app.use(express.json())
app.use(api)

app.listen(port, () => {
  console.log('✅ UPBET TOP SCORERS ONLINE')
})
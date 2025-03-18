import { Router } from "express"
import userController from "./controllers/userController.js"
import playersController from "./controllers/playersController.js"
import gameController from "./controllers/gameController.js"

const api = Router()

api.get('/ping', (req, res) => {
  res.status(200).json({
    message: 'pong'
  })
})

api.post('/users/sign-in', userController.signIn)
api.get('/players/get-attackers', playersController.getAttackers)
api.post('/game/buy-player', gameController.buyPlayer)

export default api
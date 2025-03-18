import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const attackersDB = path.join(__dirname, '..', 'db', 'attackers.json')
const usersDB = path.join(__dirname, '..', 'db', 'users.json')

async function buyPlayer(req, res) {

  const { playerId, userId } = req.body

  let attackers = []
  let users = []

  if (fs.existsSync(usersDB) && fs.existsSync(attackersDB)) {
    attackers = JSON.parse(fs.readFileSync(attackersDB, 'utf-8'))
    users = JSON.parse(fs.readFileSync(usersDB, 'utf-8'))
  }

  let user = users.find(user => userId === user.id)
  const intentPlayerTarget = attackers.find(player => playerId === player.player.id)

  console.log(intentPlayerTarget)

  if (user.upcoins >= intentPlayerTarget.player.price) {
    user.lineUp.push(intentPlayerTarget)
    user.upcoins = user.upcoins - intentPlayerTarget.player.price
  }

  fs.writeFileSync(usersDB, JSON.stringify(users), null, 2)

  res.status(200).json({
    message: 'Jogador adicionado ao elenco',
  })

}

export default {
  buyPlayer
}
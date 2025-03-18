import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const playersDB = path.join(__dirname, '..', 'db', 'players.json')
const attackersDB = path.join(__dirname, '..', 'db', 'attackers.json')

async function getAttackers(req, res) {
  let players = []
  let attackers = []
  let attackersToPickUp = []

  if (fs.existsSync(playersDB)) {
    players = JSON.parse(fs.readFileSync(playersDB, 'utf-8'))
    attackers = JSON.parse(fs.readFileSync(attackersDB, 'utf-8'))
  }

  players.forEach((player, index) => {
    if (player.statistics[0].games.position === 'Attacker') {
      attackersToPickUp.push(player)
    }
  })

  fs.writeFileSync(attackersDB, JSON.stringify(attackersToPickUp), null, 2)

  res.status(200).json({
    message: 'success',
    data: attackersToPickUp
  })

}

export default {
  getAttackers
}
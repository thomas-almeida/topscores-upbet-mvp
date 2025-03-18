import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const dbPath = path.join(__dirname, '..', 'db', 'users.json')

async function signIn(req, res) {

  let users = []
  const { username, password } = req.body

  if (fs.existsSync(dbPath)) {
    const data = fs.readFileSync(dbPath, 'utf-8')
    users = data ? JSON.parse(data) : []
  }

  const userRegistered = users.find(user => user.username === username && user.password === password)

  if (userRegistered) {
    console.log(`user [${userRegistered.id}]${userRegistered.username} has logged`)
    return res.status(200).json({
      message: 'success',
      user: userRegistered
    })
  } else {
    return res.status(401).json({ message: 'username or password do not match' })
  }

}


export default {
  signIn
}
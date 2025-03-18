import axios from 'axios'

const getAttackers = async () => {
  const response = await axios.get('http://localhost:3333/players/get-attackers')
  return response.data
}


export default {
  getAttackers
}
import LineUp from "./components/LineUp"
import { useEffect, useState } from "react"
import service from "./service"

function App() {

  const [playersData, setPlayersData] = useState('')

  async function getPlayersData() {
    const response = await service.getAttackers()
    setPlayersData(response?.data)
  }

  useEffect(() => {
    getPlayersData()
  }, [])


  return (
    <>
      <div className="flex justify-center items-center">
        <div className="w-[90%] lg:w-[60%]">
          <div className="flex justify-center mt-6 mb-8">
            <img src="/upbet.png" className="w-[100px]" alt="" />
          </div>
          <div className="py-4 mt-4 flex justify-center items-center gap-2">
            <h3 className="font-semibold text-xl">Username</h3>
            <h3 className="font-bold border-2 text-md px-3 rounded-xl text-[#13c9b8]">3 FTS</h3>
          </div>
          <LineUp
            playersData={playersData}
          />
          <p className="text-center rounded-md text-sm bg-slate-200 py-1">O Mercado fecha ás 16h00</p>
        </div>
      </div>
    </>
  )
}

export default App

import { useEffect, useState } from "react"

export default function PickModal(
  {
    visible,
    closeModal,
    playersData
  }) {

  const [userCoins, setUserCoins] = useState('')
  const [alreadyPicked, setAlreadyPicked] = useState("")

  useEffect(() => {
    function getCoins() {
      const upcoins = localStorage.getItem('upcoins')
      setUserCoins(upcoins)
      setAlreadyPicked(playersPicked)
    }

    getCoins()

  }, [])


  function pickPlayer(playerId, price) {
    let arr = []
    console.log(arr)
    arr.push(playerId)
    localStorage.setItem('alreadyPicked', arr)
  }

  return (
    <div
      className={`${visible
        ? "fixed inset-0 z-[99999] bg-[#000000b8] flex items-end"
        : "hidden"}`}
    >
      <div className="rounded-t-md shadow-lg bg-white w-full max-h-[85vh] overflow-y-auto">
        <h2 className="text-center text-2xl py-6 font-semibold">Escalar Atacantes</h2>

        <div className="py-2 my-2">
          {
            playersData
            && playersData?.map((player) => (
              <>
                <div
                  key={player?.player?.id}
                  className="flex justify-start items-center py-4 px-1 gap-2"
                >
                  <div className="relative">
                    <img
                      src={player?.player?.photo}
                      className="w-[100px] rounded-full"
                    />
                    <div className="absolute right-0 top-14">
                      <img
                        src={player?.statistics[0]?.team?.logo}
                        className="w-[30px]"
                      />
                    </div>
                  </div>
                  <div className="w-full relative">
                    <div className="flex justify-start items-center gap-2 mb-2">
                      <h2 className="font-semibold text-xl">{player?.player?.firstname}</h2>
                      <h2 className="text-xl font-bold border px-2 rounded-full text-center absolute right-5">
                        {player?.player?.price}
                        FTS
                      </h2>
                    </div>
                    <button
                      className="w-full p-2 text-xl font-bold bg-[#13c9b8] rounded-md"
                      onClick={() => pickPlayer(
                        player?.player?.id,
                        player?.player?.price,
                        userCoins
                      )}
                    >
                      {
                        alreadyPicked.length >= 3
                          ? `Já Escalado`
                          : `Escalar`
                      }
                    </button>
                  </div>
                </div>
              </>
            ))
          }
        </div>

        <button
          onClick={closeModal}
          className="w-full p-4 bg-slate-300 text-xl font-semibold sticky bottom-0"
        >
          Cancelar
        </button>
      </div>
    </div>
  )
}
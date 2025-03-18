import { useEffect, useState } from "react";
import PickModal from "./PickModal";
import PlayerSlot from "./PlayerSlot";

export default function LineUp({
  playersData
}) {

  const [modalVisible, setModalVisible] = useState(false)
  const [squad, setSquad] = useState([])

  function closeModal() {
    modalVisible ? setModalVisible(false) : setModalVisible(true)
  }

  function openModal() {
    setModalVisible(true)
  }

  useEffect(() => {
    function updateSquad() {
      const localSquad = localStorage.getItem('mySquad')
      setSquad(localSquad)
    }

    updateSquad()
  }, [])

  return (

    <>
      <PickModal
        visible={modalVisible}
        closeModal={closeModal}
        playersData={playersData}
      />
      <div className="grid grid-cols-3 gap-1 mt-6  rounded-md border-green-400 py-12 bg-cover bg-[100%] bg-[url(https://static.vecteezy.com/system/resources/thumbnails/010/135/387/small_2x/3d-soccer-field-isolated-png.png)]">
        <PlayerSlot
          openModal={openModal}
        />
        <div className="relative top-[-15px]">
          <PlayerSlot
            openModal={openModal}
          />
        </div>
        <PlayerSlot
          openModal={openModal}
        />
      </div>
      <div className="mt-4 mb-4">
        <button
          disabled={squad.length < 3}
          className={
            `w-full p-2 rounded-md font-semibold text-lg text-slate-900 shadow-md ${squad.length < 3 ? `bg-slate-400` : `bg-green-400`}`
          }>
          Confirmar Escalação
        </button>
      </div>
    </>

  );
}
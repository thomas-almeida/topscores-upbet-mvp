export default function PlayerSlot({
  openModal
}) {
  return (
    <>
      <div 
      onClick={openModal}
      className="flex justify-center items-center flex-col">
        <img
          className="w-[100px]"
          src="https://media.api-sports.io/football/players/463978.png"
          alt=""
        />
        <p className="font-bold bg-[#13c9b8] px-4 rounded-md text-[#222]">
          +
        </p>
      </div>
    </>
  )
}
const ColorCard = ({ icon, header, subheader, color }) => {
  return (
    <div
      className={
        color === "yellow"
          ? "w-95 flex text-white justify-between bg-yellow-500 rounded-lg items-center px-6 pt-2 pb-2"
          : color === "blue"
          ? "w-95 flex text-white justify-between bg-blue-500 rounded-lg items-center px-6 pt-2 pb-2"
          : color === "red"
          ? "w-95 flex text-white justify-between bg-red-500 rounded-lg items-center px-6 pt-2 pb-2"
          : color === "indigo"
          ? "w-95 flex text-white justify-between bg-indigo-500 rounded-lg items-center px-6 pt-2 pb-2"
          : null
      }
    >
      <img
        src={`https://eschoolpublicbkt.s3.ap-south-1.amazonaws.com/${icon}`}
        alt="icon"
      />
      <div className="flex flex-col items-end text-right mx-4 my-2">
        <h2 className="text-md">{header}</h2>
        <h1 className="text-3xl">{subheader}</h1>
      </div>
    </div>
  );
};

export default ColorCard;

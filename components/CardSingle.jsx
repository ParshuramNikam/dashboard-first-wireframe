const Card = ({ icon, subheader, header }) => {
  return (
    <div className=" bg-white flex justify-between rounded-lg shadow-md  w-72 items-center px-3 py-4 m-2 mt-8">
      <div className="flex flex-col justify-center items-center space-y-2">
        <img
          src={`https://eschoolpublicbkt.s3.ap-south-1.amazonaws.com/${icon}`}
          alt="icon"
          className="h-10 w-15"
        />
        <h2 className="text-md">{subheader}</h2>
      </div>
      <div className="bg-gray-900 h-20 w-0.5" />
      <h1 className="text-2xl">{header}</h1>
    </div>
  );
};

export default Card;

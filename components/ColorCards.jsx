import ColorCard from "./ColorCard";

const ColorCards = () => {
  const Grad = "Images/Grad.png";
  const GroupWhite = "Images/Group-white.png";
  const Single = "Images/Single.png";
  const Double = "Images/Double.png";

  return (
    <div className="flex flex-wrap mx-10 gap-3 my-10">
      <ColorCard
        icon={Double}
        header="Student Progress"
        subheader="50%"
        color="yellow"
      />
      <ColorCard
        icon={Grad}
        header="Course Completed"
        subheader="60%"
        color="blue"
      />
      <ColorCard
        icon={GroupWhite}
        header="Total Students"
        subheader="34987"
        color="red"
      />
      <ColorCard
        icon={Single}
        header="New Students"
        subheader="240"
        color="indigo"
      />
    </div>
  );
};

export default ColorCards;

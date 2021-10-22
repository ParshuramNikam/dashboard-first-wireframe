import Card from "./CardSingle";

const Cards = () => {
  const CalEvent = "Images/cal-event.png";
  const Teacher = "Images/Teacher.png";
  const Document = "Images/Icon ionic-md-document.png";
  const Cash = "Images/Cash.png";
  return (
    <div className="flex items-center">
      <Card icon={CalEvent} subheader="Upcoming Exam" header="02" />
      <Card icon={Teacher} subheader="Event" header="05" />
      <Card icon={Document} subheader="Documents" header="03" />
      <Card icon={Cash} subheader="Due Fees" header="₹ 1000" />
    </div>
  );
};

export default Cards;

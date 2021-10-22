import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const CalendarViewerTemplate = () => {
  const [value, onChange] = useState(new Date());
  return (
    <div className="flex flex-wrap  items-center mt-2">
      <div className="m-3 mt-5">
        {console.log(value)}
        <Calendar
          className="rounded-lg shadow-xl"
          onChange={onChange}
          value={value}
          tileContent={({ activeStartDate, date, view }) =>
            view === "month" && date.getDay() === 1 ? (
              <span className="bg-green-600 rounded-full flex h-2 w-2 ml-3 justify-center items-center"></span>
            ) : view === "month" && date.getDay() === 2 ? (
              <span className="bg-blue-600 rounded-full flex h-2 w-2 ml-3 justify-center items-center"></span>
            ) : view === "month" && date.getDay() === 5 ? (
              <span className="bg-red-600 rounded-full flex h-2 w-2 ml-3 justify-center items-center"></span>
            ) : null
          }
        />
      </div>
      <div className="flex flex-col items-center mt-5 ml-2 border-black border-opacity-30 border-2 w-60 rounded-lg shadow-xl">
        <h1 className="flex flex-row justify-center items-center">
          <span className="bg-green-600 rounded-full flex h-2 w-2 ml-3 mr-2 justify-center items-center"></span>
          Live Sessions
        </h1>
        <h1 className="flex flex-row justify-center items-center">
          <span className="bg-blue-600 rounded-full flex h-2 w-2 ml-3 mr-2 justify-center items-center"></span>
          Quiz
        </h1>
        <h1 className="flex flex-row justify-center items-center">
          <span className="bg-red-600 rounded-full flex h-2 w-2 ml-3 mr-2 justify-center items-center"></span>
          Assignment Submissions
        </h1>
      </div>
    </div>
  );
}

export default CalendarViewerTemplate;
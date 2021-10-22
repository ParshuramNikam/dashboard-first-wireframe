function NoticeBoard() {
  return (
    <div className="bg-white shadow-lg my-4 min-w-5xl rounded-lg  pb-4 pt-2">
      <h1 className="text-center font-bold text-xl text-gray-600 text-opacity-80">
        Notice Board
      </h1>
      <div className="flex flex-row items-center justify-between pr-3 mt-5">
        <div className="flex flex-row items-center">
          <svg
            className="h-8 w-8 bg-green-500 rounded-full p-1 ml-5 mr-3"
            viewBox="0 0 20 20"
            fill="white"
          >
            <path
              fillRule="evenodd"
              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
              clipRule="evenodd"
            />
          </svg>
          <h1>Name Surname</h1>
        </div>

        <h4>1hr ago</h4>
      </div>
      <div className="flex flex-row items-center justify-between pr-3 mt-4">
        <div className="flex flex-row items-center">
          <svg
            className="h-8 w-8 bg-green-500 rounded-full p-1 ml-5 mr-3"
            viewBox="0 0 20 20"
            fill="white"
          >
            <path
              fillRule="evenodd"
              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
              clipRule="evenodd"
            />
          </svg>
          <h1>Name Surname</h1>
        </div>

        <h4>1hr ago</h4>
      </div>
      <div className="flex flex-row items-center justify-between pr-3 mt-4">
        <div className="flex flex-row items-center">
          <svg
            className="h-8 w-8 bg-green-500 rounded-full p-1 ml-5 mr-3"
            viewBox="0 0 20 20"
            fill="white"
          >
            <path
              fillRule="evenodd"
              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
              clipRule="evenodd"
            />
          </svg>
          <h1>Name Surname</h1>
        </div>

        <h4>1hr ago</h4>
      </div>
    </div>
  );
}

export default NoticeBoard;

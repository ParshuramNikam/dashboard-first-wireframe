import React from 'react'

const ContentCompletedBox = ({ completedPercentage, heading }) => {
    return (
        <>
            <div className="mt-3 mx-2 md:mx-5">
                <h1 className="font-xl">Content</h1>
                <div className="relative pt-1">
                    <div className="flex mb-2 items-center justify-between">
                        <div>
                            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200">
                                30% Completed Assingments
                            </span>
                        </div>
                    </div>
                    <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-pink-200" style={{ height: "30px", width: "250px" }} >
                        <div style={{ width: "30%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-pink-500"></div>
                    </div>
                </div>
                <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                    Assesments
                </button>
            </div>


            <aside class=" mx-2 md:mx-5 my-auto border-black mt-10 border-2 p-1 h-10 font-bold text-lg">
                Fees Due - <span class="text-lg font-bold text-sky-400 underline">Amount</span>
            </aside>

            
            <fieldset class=" mx-2 md:mx-3 flex mt-3 flex-col items-center border-black border-2 w-max p-7 py-5 pt-0">
                <div class="relative pt-1">
                <legend class="font-bold mb-3">Content Completed</legend>
                    <div class="flex mb-2 items-center justify-between">
                        <div>
                            <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200">
                                Content Watched 50%
                            </span>
                        </div>
                    </div>
                    <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200" style={{height:"30px",width:"250px"}} >
                        <div style={{width:"50%"}} class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"></div>
                    </div>
                </div>
                <p class="text-lg font-bold text-sky-400 underline cursor-pointer">View Content Completed</p>
            </fieldset>
        </>
    )
}

export default ContentCompletedBox

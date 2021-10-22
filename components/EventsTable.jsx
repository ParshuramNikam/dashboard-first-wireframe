import React from 'react'

const EventsTable = () => {
    return (
        <div className="overflow-hidden">
            <div class="px-4 sm:px-8 py-4 overflow-x-auto">
                <div class="inline-block min-w-full shadow-md rounded-lg overflow-hidden">
                    <table class="min-w-full leading-normal">
                        <tbody className=" bg-indigo-200">
                            <tr className="text-lg">
                                <td class="px-5 py-5 border-b border-gray-200 bg-white">
                                    <p class="text-gray-900 whitespace-no-wrap">Event</p>
                                </td>
                                <td class="px-5 py-5 border-b border-gray-200 bg-white">
                                    <p class="text-gray-900 whitespace-no-wrap text-blue-500">Link</p>
                                </td>
                            </tr>
                            
                            <tr className="text-lg">
                                <td class="px-5 py-5 border-b border-gray-200 bg-white">
                                    <p class="text-gray-900 whitespace-no-wrap">Event</p>
                                </td>
                                <td class="px-5 py-5 border-b border-gray-200 bg-white">
                                    <p class="text-gray-900 whitespace-no-wrap text-blue-500">Link</p>
                                </td>
                            </tr>

                            <tr className="text-lg">
                                <td class="px-5 py-5 border-b border-gray-200 bg-white">
                                    <p class="text-gray-900 whitespace-no-wrap">Event</p>
                                </td>
                                <td class="px-5 py-5 border-b border-gray-200 bg-white">
                                    <p class="text-gray-900 whitespace-no-wrap text-blue-500">Link</p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div >
    )
}

export default EventsTable

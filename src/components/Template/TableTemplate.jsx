import React from 'react';

function TableTemplate() {
    return (
        <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" className="w-[119px] h-[35px] font-size:24px leading-[35px] font-bold">
                        Visit Date
                    </th>
                    <th scope="col" className="w-[122px] h-[22px]">
                        Company
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Address
                    </th>
                </tr>
                </thead>
                <tbody>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        8/6/23
                    </th>
                    <td className="px-6 py-4">
                        CI&T
                    </td>
                    <td className="px-6 py-4">
                        1234 Street Providence San Diego CA
                    </td>
                    <td className="px-6 py-4">
                        Open Form
                    </td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        8/6/23
                    </th>
                    <td className="px-6 py-4">
                        CI&T
                    </td>
                    <td className="px-6 py-4">
                        1234 Street Providence San Diego CA
                    </td>
                    <td className="px-6 py-4">
                        Open Form
                    </td>
                </tr>
                <tr className="bg-white dark:bg-gray-800">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        8/6/23
                    </th>
                    <td className="px-6 py-4">
                        CI&T
                    </td>
                    <td className="px-6 py-4">
                        1234 Street Providence San Diego CA
                    </td>
                    <td className="px-6 py-4">
                        Open Form
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}

export default TableTemplate;

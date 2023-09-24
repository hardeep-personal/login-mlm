import React, { useState } from 'react'

const Test = () => {
    const [rows, setRows] = useState([
        { name: 'Alice', email: 'alice@example.com', editing: false },
        { name: 'Michael', email: 'michael@example.com', editing: false },
        { name: 'Emily', email: 'emily@example.com', editing: false },
        { name: 'David', email: 'david@example.com', editing: false },
        { name: 'Sarah', email: 'sarah@example.com', editing: false },
        { name: 'Daniel', email: 'daniel@example.com', editing: false },
        { name: 'Olivia', email: 'olivia@example.com', editing: false },
        { name: 'Andrew', email: 'andrew@example.com', editing: false }
    ]);

    const editRow = (row) => {
        const updatedRows = rows.map((r) => {
            if (r === row) {
                return { ...r, editing: true };
            }
            return r;
        });
        setRows(updatedRows);
    };

    const saveRow = (row) => {
        const updatedRows = rows.map((r) => {
            if (r === row) {
                return { ...r, editing: false };
            }
            return r;
        });
        setRows(updatedRows);
    };

    const deleteRow = (index) => {
        const updatedRows = [...rows];
        updatedRows.splice(index, 1);
        setRows(updatedRows);
    };

    const addRow = () => {
        const newRows = [...rows, { name: '', email: '', editing: true }];
        setRows(newRows);
    };
    return (
        <div className='container '>
            <div class="mx-auto max-w-screen-lg px-4 py-8 sm:px-8   ">
                <div class="flex items-center justify-between pb-6 ">
                    <div>
                        <h2 class="font-semibold text-gray-700">User Accounts</h2>
                        <span class="text-xs text-gray-500">View accounts of registered users</span>
                    </div>
                    <div class="flex items-center justify-between">
                        <div class="ml-10 space-x-8 lg:ml-40">
                            <button
                                onClick={() => addRow()}
                                class="flex items-center gap-2 rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white focus:outline-none focus:ring hover:bg-blue-700">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-4 w-4">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m0 0l6.75-6.75M12 19.5l-6.75-6.75" />
                                </svg>

                                Add users
                            </button>
                        </div>
                    </div>
                </div>
                <div class="overflow-y-hidden rounded-lg border ">
                    <div class="overflow-x-auto ">
                        <table class="w-full dark:bg-gray-900 ">
                            <thead>
                                <tr class="bg-blue-600 text-left text-xs font-semibold uppercase tracking-widest text-white">
                                    <th class="px-5 py-3">ID</th>
                                    <th class="px-5 py-3">Full Name</th>
                                    <th class="px-5 py-3">Email</th>
                                    <th class="px-5 py-3">Edit user</th>
                                    <th class="px-5 py-3">Delete user</th>

                                </tr>
                            </thead>
                            <tbody class="text-white font-semibold">
                                {rows.map((row, index) => (
                                    <tr key={index}>
                                        {!row.editing && <td class="border-b border-gray-200  px-5 py-5 text-sm">{index}</td>}
                                        {!row.editing && <td class="border-b border-gray-200  px-5 py-5 text-sm">{row.name}</td>}
                                        {!row.editing && <td class="border-b border-gray-200  px-5 py-5 text-sm">{row.email}</td>}
                                        {row.editing && <td class="border-b border-gray-200  px-5 py-5 text-sm">{index}</td>}

                                        {row.editing && <td class="border-b border-gray-200  px-5 py-5 text-sm"><input type="text" value={row.name} onChange={(e) => {
                                            const updatedRows = [...rows];
                                            updatedRows[index].name = e.target.value;
                                            setRows(updatedRows);
                                        }} /></td>}
                                        {row.editing && <td class="border-b border-gray-200  px-5 py-5 text-sm" ><input type="email" value={row.email} onChange={(e) => {
                                            const updatedRows = [...rows];
                                            updatedRows[index].email = e.target.value;
                                            setRows(updatedRows);
                                        }} /></td>}
                                        <td class="border-b border-gray-200  px-5 py-5 text-sm">
                                            {!row.editing && <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => editRow(row)}>Edit</button>}
                                            {row.editing && <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" onClick={() => saveRow(row)}>Save</button>}

                                        </td>
                                        <td class="border-b border-gray-200  px-5 py-5 text-sm">
                                            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 mx-2 px-4 rounded" onClick={() => deleteRow(index)}>Delete</button>
                                        </td>
                                    </tr>
                                ))}


                            </tbody>
                        </table>
                    </div>
                    <div class="flex flex-col items-center border-t  px-5 py-5 sm:flex-row sm:justify-between">
                        <span class="text-xs text-gray-600 sm:text-sm"> Showing 1 to 5 of 12 Entries </span>
                        <div class="mt-2 inline-flex sm:mt-0">
                            <button class="mr-2 h-12 w-12 rounded-full border text-sm font-semibold text-gray-600 transition duration-150 hover:bg-gray-100">Prev</button>
                            <button class="h-12 w-12 rounded-full border text-sm font-semibold text-gray-600 transition duration-150 hover:bg-gray-100">Next</button>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Test
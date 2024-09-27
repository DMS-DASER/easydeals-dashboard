import React, { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
import { FaSearch } from "react-icons/fa";
import AccessDenied from "./AccessDenied";
import 'ldrs/ring'

import { cardio } from 'ldrs'

cardio.register()

const sampledata = [
    {
        id: "001",
        name: "abc",
        category: "cat",
        brand: "sample",
        price: "1000Lkr",
        stock: "1"
    },
    {
        id: "002",
        name: "abc",
        category: "cat",
        brand: "sample",
        price: "1000Lkr",
        stock: "1"
    },
    {
        id: "003",
        name: "abc",
        category: "cat",
        brand: "sample",
        price: "1000Lkr",
        stock: "1"
    },
    {
        id: "004",
        name: "abc",
        category: "cat",
        brand: "sample",
        price: "1000Lkr",
        stock: "1"
    },
    {
        id: "005",
        name: "abc",
        category: "cat",
        brand: "sample",
        price: "1000Lkr",
        stock: "1"
    },
    {
        id: "006",
        name: "abc",
        category: "cat",
        brand: "sample",
        price: "1000Lkr",
        stock: "1"
    },
    {
        id: "007",
        name: "abc",
        category: "cat",
        brand: "sample",
        price: "1000Lkr",
        stock: "1"
    },
    {
        id: "008",
        name: "abc",
        category: "cat",
        brand: "sample",
        price: "1000Lkr",
        stock: "1"
    },
    {
        id: "009",
        name: "abc",
        category: "cat",
        brand: "sample",
        price: "1000Lkr",
        stock: "1"
    },
    {
        id: "010",
        name: "abc",
        category: "cat",
        brand: "sample",
        price: "1000Lkr",
        stock: "1"
    },
    {
        id: "011",
        name: "abc",
        category: "cat",
        brand: "sample",
        price: "1000Lkr",
        stock: "1"
    },
    {
        id: "012",
        name: "abc",
        category: "cat",
        brand: "sample",
        price: "1000Lkr",
        stock: "1"
    },
]

const REACT_APP_SUPABASE_URL = "https://mtbscjslfmhebsizwcbx.supabase.co"
const REACT_APP_SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im10YnNjanNsZm1oZWJzaXp3Y2J4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjMwMDU1MzYsImV4cCI6MjAzODU4MTUzNn0.lHhdyAUUndKRr-kta0M8qsADr28pLqJoE7pXuEPPo-g"

const supabase = createClient(REACT_APP_SUPABASE_URL, REACT_APP_SUPABASE_ANON_KEY);

const ViewOrders = () => {
    const [current, setcurrent] = useState(2);
    const [last, setLast] = useState(3);
    return (
        <>
            <div className="flex flex-col gap-4 w-full p-5 bg-slate-100">
                <div className="bg-white h-fit shadow-md rounded-lg w-full p-4 md:flex block">
                    <div className="w-full p-2 block sm:flex gap-1">
                        <input
                            type="text"
                            name="search"
                            placeholder="search"
                            className="w-full p-1 border rounded-md dark:border-gray-300 dark:bg-gray-50 text-sm dark:text-gray-800 focus:border-purple-600"
                        />
                        <select defaultValue={'search by'} className="w-full sm:w-1/4 2xl:1/5 p-1 border rounded-md dark:border-gray-300 dark:bg-gray-50 text-sm dark:text-gray-800 focus:border-purple-600">
                            <option>item code</option>
                            <option>item name</option>
                        </select>
                        <button
                            className="w-fit flex items-center justify-between gap-2 px-2 py-1 border rounded-md text-white bg-purple-600 text-sm focus:border-purple-600"
                        >
                            Search
                            <FaSearch />
                        </button>
                    </div>
                </div>
                <div className="bg-white h-fit shadow-md rounded-lg w-full p-4 md:flex flex-col block">
                    <div className="grid grid-cols-6 w-full">
                        <div className="border-r-gray-300 text-gray-700 bg-gray-200 border-2 px-2">product_id</div>
                        <div className="border-r-gray-300 text-gray-700 bg-gray-200 border-2 px-2">product_name</div>
                        <div className="border-r-gray-300 text-gray-700 bg-gray-200 border-2 px-2">category</div>
                        <div className="border-r-gray-300 text-gray-700 bg-gray-200 border-2 px-2">brand</div>
                        <div className="border-r-gray-300 text-gray-700 bg-gray-200 border-2 px-2">price</div>
                        <div className="border-r-gray-300 text-gray-700 bg-gray-200 border-2 px-2">stock</div>
                    </div>
                    {
                        sampledata.map((item, index) => {
                            return <>
                                <div className="grid grid-cols-6 w-full">
                                    <div className={`text-gray-700 ${index % 2 === 0 ? `bg-gray-100` : `bg-gray-200`} p-2`}>{item.id}</div>
                                    <div className={`text-gray-700 ${index % 2 === 0 ? `bg-gray-100` : `bg-gray-200`} p-2`}>{item.name}</div>
                                    <div className={`text-gray-700 ${index % 2 === 0 ? `bg-gray-100` : `bg-gray-200`} p-2`}>{item.category}</div>
                                    <div className={`text-gray-700 ${index % 2 === 0 ? `bg-gray-100` : `bg-gray-200`} p-2`}>{item.brand}</div>
                                    <div className={`text-gray-700 ${index % 2 === 0 ? `bg-gray-100` : `bg-gray-200`} p-2`}>{item.price}</div>
                                    <div className={`text-gray-700 ${index % 2 === 0 ? `bg-gray-100` : `bg-gray-200`} p-2`}>{item.stock}</div>
                                </div>
                            </>
                        })
                    }

                    <div className="w-full flex my-2 justify-center">
                        {(current !== last) ? <>
                            <div className={`w-8 h-8 p-2 border-gray-200 border-2 flex items-center rounded-md ${current - 2 <= 0 && 'hidden'} cursor-pointer hover:bg-purple-600 hover:text-white`}>
                                {current - 2 > 0  && current - 2}
                            </div>
                            <div className={`w-8 h-8 p-2 border-gray-200 border-2 flex items-center rounded-md ${current - 1 <= 0 && 'hidden'} cursor-pointer hover:bg-purple-600 hover:text-white`}>
                                {current - 1 > 0  && current - 1}
                            </div>
                            <div className="w-8 h-8 p-2 bg-purple-400 border-gray-200 border-2 flex items-center rounded-md cursor-pointer hover:bg-purple-600 hover:text-white">
                                {current}
                            </div>
                            <div className={`w-8 h-8 p-2 border-gray-200 border-2 flex items-center rounded-md ${current + 1 > last && 'hidden'} cursor-pointer hover:bg-purple-600 hover:text-white`}>
                                {current + 1 <= last  && current + 1}
                            </div>
                            <div className={`w-8 h-8 p-2 border-gray-200 border-2 flex items-center rounded-md ${current + 2 >= last && 'hidden'} cursor-pointer hover:bg-purple-600 hover:text-white`}>
                                {current + 2 <= last  && current + 2}
                            </div>
                        </> : <>
                            <div className={`w-8 h-8 p-2 border-gray-200 border-2 flex items-center rounded-md ${current - 1 === 0 && 'hidden'} cursor-pointer hover:bg-purple-600 hover:text-white`}>
                                {current === last ? current - 1 : current}
                            </div>
                            <div className={`w-8 h-8 p-2 border-gray-200 border-2 flex items-center rounded-md cursor-pointer hover:bg-purple-600 hover:text-white`}>
                                {current === last ? current : current + 1}
                            </div>
                        </>
                        }

                    </div>
                </div>
            </div>
        </>
    );
}

export default ViewOrders;
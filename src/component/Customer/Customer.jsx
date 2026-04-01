import React from 'react';
import { FaRegCircle } from "react-icons/fa";



const Customer = ({ customer, handleSelectedCard }) => {

    return (
        <div onClick={() => handleSelectedCard(customer)} className='shadow-md rounded-xl lg:p-4 lg:space-y-2 bg-white p-2 space-y-1'>
            <div className='flex justify-between items-center'>
                <h1 className='font-medium'>{customer.title}</h1>
                <button className={`font-medium px-4 py-1 rounded-2xl
                    ${customer.status === "Open" ? "bg-[#B9F8CF]"
                        : "bg-[#F8F3B9]"}
                    `}>
                    <div className='flex items-center gap-2'> <FaRegCircle className={`${customer.status === "Open" ? "bg-green-500 rounded-full text-green-500"
                        : "bg-yellow-400 rounded-full text-yellow-500"}`} />
                        {customer.status}</div>
                </button>

            </div>

            <p className='text-[16px]'>{customer.description}</p>

            <div className='flex'>
                <div className='flex-1 flex lg:gap-5 items-center text-[16px] gap-1'>
                    <p>#{customer.id}</p>
                    <p className={`font-medium
                         ${customer.priority == "HIGH PRIORITY" ? "text-[#F83044]"
                            : customer.priority == "MEDIUM PRIORITY" ? "text-[#FEBB0C]"
                                : "text-[#02A53B]"}`}>
                        {customer.priority}
                    </p>
                </div>
                <div className='flex lg:gap-5 items-center gap-1'>
                    <h3>{customer.customer}</h3>
                    <div className='flex'>
                        <img src="https://i.ibb.co.com/FbKQWHx4/ri-calendar-line.png" alt="" />
                        <p>{customer.createdAt}</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Customer;
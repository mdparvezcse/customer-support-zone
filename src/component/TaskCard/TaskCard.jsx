import React from 'react';

const TaskCard = ({card, handleCompleteBtn}) => {
    return (
        <div className='shadow-md rounded-xl lg:p-4 bg-white lg:mb-4 space-y-2 mb-3 mx-3 p-2'>
            <h1 className='font-medium'>{card.title}</h1>
            <button onClick={() => handleCompleteBtn(card)} className='bg-[#02A53B] lg:py-3 py-1 w-full rounded-xl text-white font-semibold'>Complete</button>
        </div>
    );
};

export default TaskCard;
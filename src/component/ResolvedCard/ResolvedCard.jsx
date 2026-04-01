import React from 'react';

const ResolvedCard = ({resolveData}) => {
    console.log(resolveData)
    return (
        <div className='shadow-md rounded-xl lg:p-4 bg-white lg:mb-4 space-y-2'>
            <h1 className='font-semibold'>{resolveData.title}</h1>
        </div>
    );
};

export default ResolvedCard;
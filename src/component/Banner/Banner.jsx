import React from 'react';
import bannerImg from '../../assets/vector1.png'

const Banner = ({progressCount, resolvedCount}) => {
    return (
        <div className='max-w-400 mx-auto lg:px-24 lg:mt-20 mt-4'>
            <div className='lg:flex lg:justify-between lg:gap-6 lg:flex-row flex flex-col gap-4'>

                <div className="relative bg-linear-to-r from-[#632EE3] to-[#9F62F2] rounded-xl lg:p-16 p-10 text-center text-white overflow-hidden flex-1 object-cover">
                    <img src={bannerImg} alt="wave" className="absolute left-0 top-0 w-80  opacity-80" />
                    <img src={bannerImg} alt="wave" className="absolute right-0 top-0 w-80 opacity-80 scale-x-[-1]" />
                    <h2 className="text-2xl mb-4">In-Progress</h2>
                    <p className="text-6xl font-bold">{progressCount}</p>
                </div>
                <div className="relative bg-linear-to-r from-[#54CF68] to-[#00827A] rounded-xl lg:p-16 p-10 text-center text-white overflow-hidden flex-1 object-cover">
                    <img src={bannerImg} alt="wave" className="absolute left-0 top-0 w-80 opacity-80" />
                    <img src={bannerImg} alt="wave" className="absolute right-0 top-0 w-80 opacity-80 scale-x-[-1]" />
                    <h2 className="text-2xl mb-4">Resolved</h2>
                    <p className="text-6xl font-bold">{resolvedCount}</p>
                </div>


            </div>
        </div>
        
    );
};

export default Banner;
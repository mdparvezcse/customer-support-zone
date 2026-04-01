import React from 'react';
import bannerImg from '../../assets/vector1.png'

const Banner = () => {
    return (
        <div className='max-w-400 mx-auto bg-gray-[#627382] lg:px-24 mt-20'>
            <div className='lg:flex lg:justify-between gap-6'>

                <div className="relative bg-linear-to-r from-[#632EE3] to-[#9F62F2] rounded-xl lg:p-16 text-center text-white overflow-hidden flex-1 object-cover">
                    <img src={bannerImg} alt="wave" className="absolute left-0 top-0 w-60 opacity-80" />
                    <img src={bannerImg} alt="wave" className="absolute right-0 top-0 w-60 opacity-80 scale-x-[-1]" />
                    <h2 className="text-2xl mb-4">In-Progress</h2>
                    <p className="text-6xl font-bold">0</p>
                </div>
                <div className="relative bg-linear-to-r from-[#54CF68] to-[#00827A] rounded-xl p-16 text-center text-white overflow-hidden flex-1 object-cover">
                    <img src={bannerImg} alt="wave" className="absolute left-0 top-0 w-60 opacity-80" />
                    <img src={bannerImg} alt="wave" className="absolute right-0 top-0 w-60 opacity-80 scale-x-[-1]" />
                    <h2 className="text-2xl mb-4">Resolved</h2>
                    <p className="text-6xl font-bold">0</p>
                </div>


            </div>
        </div>
        
    );
};

export default Banner;
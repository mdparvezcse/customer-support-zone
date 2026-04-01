import React from 'react';


const Footer = () => {
    return (
        <div className='bg-black text-white lg:px-24 text-center lg:text-start lg:mt-10'>
            <div className='lg:flex  lg:gap-10 lg:pt-20 '>
                <div className='flex-1'>
                    <h1 className='font-medium text-2xl mb-4'>CS — Ticket System</h1>
                    <p className='text-[#A1A1AA]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
                <div className='flex-1'>
                    <h1 className='font-medium text-2xl mb-4'>Company</h1>
                    <ul>
                        <li className='text-[#A1A1AA]'><a href="">About Us</a></li>
                        <li className='text-[#A1A1AA]'><a href="">Our Mission</a></li>
                        <li className='text-[#A1A1AA]'><a href="">Contact Sale</a></li>
                    </ul>
                </div>
                <div className='flex-1'>
                    <h1 className='font-medium text-2xl mb-4'>Services</h1>
                    <ul>
                        <li className='text-[#A1A1AA]'><a href="">Products & Services</a></li>
                        <li className='text-[#A1A1AA]'><a href="">Customer Stories</a></li>
                        <li className='text-[#A1A1AA]'><a href="">Download Apps</a></li>
                    </ul>
                </div>
                <div className='flex-1'>
                    <h1 className='font-medium text-2xl mb-4'>Information</h1>
                    <ul>
                        <li className='text-[#A1A1AA]'><a href="">Privacy Policy</a></li>
                        <li className='text-[#A1A1AA]'><a href="">Terms & Conditions</a></li>
                        <li className='text-[#A1A1AA]'><a href="">Join Us</a></li>
                    </ul>
                </div>
                <div className='flex-1 text-center lg:text-start'>
                    <h1 className='font-medium text-2xl mb-4'>Social Links</h1>
                    <div className='space-y-2'>
                        <div className='flex gap-2 items-center lg:items-start justify-center lg:justify-start text-[#A1A1AA]'>
                            <img src="https://i.ibb.co.com/2wpr4sB/fi-5969020.png" alt="" />
                            <a href="">@CS — Ticket System</a>
                        </div>
                        <div className='flex gap-2 items-center lg:items-start justify-center lg:justify-start text-[#A1A1AA]'>
                            <img src="https://i.ibb.co.com/dJmkXNVV/Group.png" alt="" />
                            <a href="">@CS — Ticket System </a>
                        </div>
                        <div className='flex gap-2 items-center lg:items-start justify-center lg:justify-start text-[#A1A1AA]'>
                            <img src="https://i.ibb.co.com/9mk8nRnk/fi-5968764.png" alt="" />
                            <a href="">@CS — Ticket System  </a>
                        </div>
                        <div className='flex gap-2 items-center lg:items-start justify-center lg:justify-start text-[#A1A1AA]'>
                            <img src="https://i.ibb.co.com/PvVPY4nL/fi-6244710.png" alt="" />
                            <a href="">support@cst.com</a>
                        </div>
                    </div>
                </div>

            </div>
            <hr className='lg:mt-15 mt-5 text-[#A1A1AA]' />
            <p className='text-center text-[#A1A1AA] py-4'>© 2025 CS — Ticket System. All rights reserved.</p>

        </div>
    );
};

export default Footer;
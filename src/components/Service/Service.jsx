import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const Service = ({ service }) => {
    return (
        <div className=''>
            <img src={service.logo} className='w-4/6 h-full' alt="" />
            <div className='flex flex-col space-y-4'>
                <div className='md:h-[120px]'>
                    <h3 className='text-xl font-bold mb-2'>{service.name}</h3>
                    <p className='text'>{service.description}</p>
                </div>
                <p className='text-blue-400 flex items-center'>Learn More &nbsp; <span><FaArrowRight /></span></p>
            </div>
        </div>
    );
};

export default Service;
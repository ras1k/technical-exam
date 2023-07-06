import { FaArrowRight } from 'react-icons/fa';

const Service = ({ service }) => {
    return (
        <div>
            <div className='flex h-full md:justify-start justify-center'>
                <img src={service.logo} className='w-4/6 md:w-4/6 lg:w-4/6' alt="" />
            </div>
            <div className='flex flex-col lg:text-left text-center space-y-4'>
                <div className='md:h-[100px]'>
                    <h3 className='text-xl font-bold mb-2'>{service.name}</h3>
                    <p className='text'>{service.description}</p>
                </div>
                <div className=' justify-center flex items-center md:justify-start'>
                    <p className='text-blue-400 me-2'>Learn More</p>
                    <span className='text-blue-400 '><FaArrowRight /></span>
                </div>
            </div>
        </div>
    );
};

export default Service;
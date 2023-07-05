import { useEffect, useState } from 'react'
import '../../../src/App.css';
import Service from '../Service/Service';

function Home() {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch('https://technical-exam-server.vercel.app/services')
      .then(res => res.json())
      .then(data => setServices(data))
  }, [])

  return (
    <div>
      <div className='text-center'>
        <h1 className='text-4xl font-bold md:mt-6'>Explore Our Storage Space, Co-Working Space, <br /> Co-Warehouse & Services</h1>
        <p className='text-slate-600 mt-4 md:mt-10'>Carefully crafted for a hassle-free and affordable experience</p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-4 mt-6 gap-y-24 gap-x-6'>
        {
          services.map(service => <Service
            key={service.id}
            service={service}
          ></Service>)
        }
      </div>

    </div>
  )
}

export default Home

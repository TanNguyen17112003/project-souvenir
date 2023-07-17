import React from 'react';
import { FaStar } from 'react-icons/fa';

function LatestItems({items}) {
  return (
    <div className='grid grid-cols-4 gap-[20px] place-items-center p-10'>
          {items.map((item) => (
            <div key={item.id} className='cursor-pointer hover:border-slate-400 flex flex-col justify-center items-center border-2 border-solid border-slate-300 w-[250px]'>
              <div className='p-[10px]'>
                <img src={item.url} alt="" className='h-[80%] mb-[10px]'/>
                <h3 className='font-bold uppercase mb-[20px]'>{item.name}</h3>
                <div className='flex'>
                    <FaStar className='text-yellow-300'/>
                    <FaStar className='text-yellow-300'/>
                    <FaStar className='text-yellow-300'/>
                    <FaStar className='text-yellow-300'/>
                    <FaStar className='text-yellow-300'/>
                </div>
                <p
                    className='mt-[10px]'
                >{item.price}</p>
              </div>
            </div>
          ))}
    </div>
  )
}

export default LatestItems
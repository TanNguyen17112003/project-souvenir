import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Link, Route, Routes } from 'react-router-dom';
import Product from '../pages/Product';

function LatestItems({ items }) {
  return (
    <div className='grid grid-cols-5 gap-[20px] place-items-center p-10'>
      
      {items.map((item) => (
        <Link key={item.id} to={`items/${item.id}`}>
          <div
            className='cursor-pointer hover:border-slate-400 flex flex-col justify-center items-center border-2 border-solid border-slate-300 h-[450px]'
          >
            <div className='h-[80%] px-[10px]'>
              <img src={item.url} alt='' className='h-[80%] mb-[10px] object-cover' />
              <h3 className='font-bold uppercase mb-[20px]'>{item.name}</h3>
              <div className='flex'>
                <FaStar className='text-yellow-300' />
                <FaStar className='text-yellow-300' />
                <FaStar className='text-yellow-300' />
                <FaStar className='text-yellow-300' />
                <FaStar className='text-yellow-300' />
              </div>
              <p className='mt-[10px]'>{item.price}đ</p>
            </div>
          </div>
        </Link>
      ))}
      {/* <Routes>
        {items.map((item) => (
          <Route path={`items/${item.id}`} element={<Product id={item.id} />} />
        ))}
      </Routes> */}
    </div>
  );
}

export default LatestItems;
import React, { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { useParams } from 'react-router';
import axios from 'axios';
import { FaMinus, FaPlus } from 'react-icons/fa';
function Product() {
  const params = useParams();
  const itemId = params.id;
  const [item, setItem] = useState({});
  const [count, setCount] = useState(1);
  const reduceCount = () => {
    const minusCount = count - 1;
    if (minusCount < 1) return;
    setCount(minusCount);
  }
  const increaseCount = () => {
    const plusCount = count + 1;
    setCount(plusCount);
  }
  useEffect(() => {
    const getItem = async() => {
      try {
        const res = await axios.get(`http://localhost:3400/items/${itemId}`);
        const data = res.data[0];
        setItem(data);
        console.log(item);
      }
      catch(err) {
        console.error(err);
      }
    };
    getItem();
  },[])
  console.log(item);
  return (
    <div className='flex py-[20px] px-[200px] h-[500px]'>
      <div className='w-[500px] h-full'>
        <img className='w-full h-full object-cover' 
          src={item.url}
          alt="Error picture" />
      </div>
      <div className='ml-[40px] flex flex-col'>
        <div className='flex mb-[10px]'>
            <FaStar size='1.5rem' className='text-yellow-300' />
            <FaStar size='1.5rem' className='text-yellow-300' />
            <FaStar size='1.5rem' className='text-yellow-300' />
            <FaStar size='1.5rem' className='text-yellow-300' />
            <FaStar size='1.5rem' className='text-yellow-300' />
        </div>
        <h3
          className='font-bold uppercase text-[28px] mb-[10px]'
        >{item.name}</h3>
        <span>Mã SP: {item.id}</span>
        <h3
          className='text-[red] font-bold text-[24px] mt-[20px]'
        >{item.price} đ</h3>
        <div className='flex mt-[30px] items-center'>
          <span className='p-[10px] border-[1px] border-solid border-[black] bg-zinc-300 cursor-pointer'
                onClick={reduceCount}
          ><FaMinus /></span>
          <span className='border-[1px] border-solid border-[black] py-[7px] px-[20px]'>{count}</span>
          <span className='p-[10px] border-[1px] border-solid border-[black] bg-zinc-300 cursor-pointer'
                onClick={increaseCount}
          ><FaPlus /></span>
        </div>
      </div>
    </div>
  );
}

export default Product
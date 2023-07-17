import React, { useEffect, useState } from 'react'
import banner from '../images/description/banner.jpg';
import banner2 from '../images/description/banner2.jpg';
import Slide from '../DynamicComponents/Slide';
import slides from '../data/slidesData.json';
import { FaCarSide, FaRegListAlt, FaPhoneAlt } from 'react-icons/fa';
import axios from "axios";
import LatestItems from '../DynamicComponents/LatestItems';


function Main() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const getItems = async() => {
      try {
        const res = await axios.get("http://localhost:3400/items");
        setItems(res.data);
        console.log(items);
      }
      catch(err) {
        console.error(err);
      }
    };
    getItems();
  },[])
  return (
    <div className='bg-neutral-200'>
      {/* Slide banner */}
      <div 
        className='flex w-full justify-center items-center pb-10 mx-auto h-[800px]'
      >
        <Slide data={slides.slides}/>
      </div>
      {/* Description and 2 images for ttv souvenir */}
      <div className='flex py-10 mx-auto max-w-[70%] items-center justify-around'>
        <div className="mr-[30px]">
          <p
            className='text-justify'
          >
            TTV Souvenir là cửa hàng bán đồ lưu niệm uy tín số một thành phố Hồ Chí Minh với đa
            dạng sản phẩm cho mọi loại đối tượng. Trong vài năm trở lại đây, chúng tôi đã nhận được
            vô số lời khen và đánh giá tích cực từ khán giả trong nước cũng như nước ngoài về cả chất lượng
            mặt hàng cũng như thái độ phục vụ của nhân viên.
          </p>
        </div>

        <div className="w-1/2 h-[200px] mr-[50px]">
          <img className='h-full w-full object-cover' src={banner} alt="" />
        </div>
        <div className="w-1/2 h-[200px]">
          <img className='h-full w-full object-cover' src={banner2} alt="" />
        </div>
      </div>
      {/* Standard */}
      <div className='flex text-center justify-between  py-10 px-20'>
        <div className='flex flex-col justify-center items-center w-[33.33%]'>
            <FaRegListAlt 
              size= '2rem'
              className='mb-[10px]'
            />
            <h3
              className='uppercase text-yellow-500'
            >
              cam kết chính hãngc
            </h3>
            <p
              className='text-[12px] font-bold my-[5px]'
            >
              100% Authentic
            </p>
            <p
              className='text-[12px]'
            >
              Cam kết sản phẩm chính hãng từ nhiều khu vực trên thế giới như Việt Nam, Châu Âu, Trung Quốc,... 
            </p>
        </div>
        <div className='flex flex-col justify-center items-center w-[33.33%]'>
            <FaCarSide
              size= '2rem'
              className='mb-[10px]'
            />
            <h3
              className='uppercase text-yellow-500'
            >
              giao hàng hỏa tốc
            </h3>
            <p
              className='text-[12px] font-bold my-[5px]'
            >
              Express delivery
            </p>
            <p
              className='text-[12px]'
            >TTV Souvenir nhận được nhiều phản hồi tích cực từ khách hàng cả trong nước lẫn nước ngoài</p>
        </div>
        <div className='flex flex-col justify-center items-center w-[33.33%]'>
            <FaPhoneAlt
              size= '2rem'
              className='mb-[10px]'
            />
            <h3
              className='uppercase text-yellow-500'
            >
              hỗ trợ 24/7
            </h3>
            <p
              className='text-[12px] font-bold my-[5px]'
            >
              Supporting 24/7
            </p>
            <p
              className='text-[12px]'
            >
              Gọi ngay 
            </p>
        </div>
      </div>
      <h1 className='font-bold uppercase pl-[70px] py-[20px] text-[24px]'>sản phẩm mới</h1>
      {/* List item latest */}
      <LatestItems items={items} />
    </div>
  )
}

export default Main;
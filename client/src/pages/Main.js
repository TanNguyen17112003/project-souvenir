import React from 'react'
import banner from '../images/banner.jpg';
import banner2 from '../images/banner2.jpg';
// import Slide from '../Slide';
import slider1 from '../images/slider1.jpg';

function Main() {
  return (
    <>
    <div 
      className='w-full max-w-[80%] my-0 mx-auto h-[500px]'
    >
      <img 
        src={slider1} 
        alt="" 
        className='w-full h-full object-contain'
      />
    </div>
    <div className='description flex my-10 mx-auto max-w-[70%] items-center justify-around'>
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
    </>
  )
}

export default Main;
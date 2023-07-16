import React from 'react'
import Register from '../userAuth/Register';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';
import { FaSearch } from 'react-icons/fa';
function Header() {
  return (
    <div className="bg-white flex items-center pl-[130px] mb h-[120px] shadow-md w-full">
      <div className="h-full pl-5 mr-[30px]">
        <Link 
          to="/"
        >
          <img 
            src={logo} 
            alt=""
            className="h-full object-cover"
          />
        </Link>
      </div>
      
      <div className="w-3/5 flex mr-[30px] py-0 px-2.5">
        <input 
          type="text" 
          placeholder='Tìm kiếm sản phẩm'
          className='w-[120%] mr-2.5 p-[5px] rounded-[5px] border-[1px] border-solid border-[black]'
        />
        <button
          className='border-[1px] border-solid border-[black] rounded-'
        >
          <FaSearch 
            style={{
              width: '50px'
            }}
          />
        </button>
      </div>

      <div className="header-menu">
          <Link to='/menu'>Phân loại sản phẩm</Link>
        </div>
    </div>
  )
}

export default Header
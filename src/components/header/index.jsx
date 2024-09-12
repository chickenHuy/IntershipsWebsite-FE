import React, { useState } from 'react'
import Logo from '../../assets/images/logo.png';
import { AiOutlineCaretDown } from "react-icons/ai";
import { AiOutlineCaretUp } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import DropdownMenu from '../menu/dropdownMenu';
import { IoMdLogOut } from "react-icons/io";
import { GrLanguage } from "react-icons/gr";
import { IoBusinessOutline } from "react-icons/io5";
import { RiLogoutCircleLine } from "react-icons/ri";
import MenuItem from '../menu/menuItem';

const Header = () => {

  const [showMenu, setShowMenu] = useState(false);
  const [buttonAction, setButtonAction] = useState(false);
  const [idSetTimeout, setIdSetTimeout] = useState(null);

  const [showMenuLanguage, setShowMenuLanguag] = useState(false);
  const [idSetTimeoutLanguage, setIdSetTimeoutLanguage] = useState(null);

  const handleMouseEnter = (actionButton) => {
    if (idSetTimeout) {
      clearTimeout(idSetTimeout);
    }
    setButtonAction(actionButton);
    setShowMenu(true);
  }

  const handleMouseLeave = () => {
    setIdSetTimeout(setTimeout(() => {
      setShowMenu(false);
    }, 1000));
  }

  const handleMouseEnterLanguage = () => {
    if (idSetTimeoutLanguage) {
      clearTimeout(idSetTimeoutLanguage);
    }
    setShowMenuLanguag(true);
  }

  const handleMouseLeaveLanguage = () => {
    setIdSetTimeoutLanguage(setTimeout(() => {
      setShowMenuLanguag(false);
    }, 500));
  }


  return (
    <div className={`w-full h-[70px] bg-blue-primary text-white-secondary flex flex-row justify-between items-center relative`}>
      <div className='w-fit h-full flex flex-row justify-start items-center flex-grow gap-3 text-white px-5'>
        <img className='min-w-[55px] min-h-[55px] w-[55px] h-[55px] bg-white rounded-full' src={Logo} alt="" />
        <span className='text-2xl font-bold'></span>
      </div>

      <div className='w-[400px] lg:w-fit h-fit flex lg:px-0 lg:py-0 px-2 py-5 lg:flex-row flex-col-reverse lg:bg-transparent bg-blue-primary lg:static absolute top-[75px] right-0 justify-center items-center gap-5 rounded-sm lg:rounded-none z-10'>
        <div className='h-12 lg:h-[70px] ls:w-fit w-full px-3 flex flex-row justify-start items-center text-[17px] gap-2 cursor-pointer hover:bg-blue-secondary relative' onMouseEnter={() => handleMouseEnter('statistical')} onMouseLeave={handleMouseLeave}>
          <span className='flex-grow'>Số liệu thống kê</span>
          {showMenu && buttonAction === 'statistical' ? <AiOutlineCaretUp /> : <AiOutlineCaretDown />}

          <div className={`absolute top-[140%] lg:right-1/2 lg:translate-x-1/2 right-0 lg:top-full duration-300 origin-top ${showMenu && buttonAction === 'statistical' ? 'scale-100' : 'scale-0'}`}>
            <DropdownMenu listMenuItems={[
              <MenuItem menuContext='Tổng số Sinh Viên' />,
              <MenuItem menuContext='Sinh Viên Đã Được Nhận' />,
              <MenuItem menuContext='Sinh Viên Đang Đăng Ký Thực Tập' />,
            ]}
              width='w-[350px]'
            />
          </div>
        </div>

        <div className='flex flex-row items-center mx-3 pl-7 pr-2 gap-3 shadow-md border-white-secondary border-[1px] rounded-full w-full h-[35px] text-[14px]'>
          <input className='outline-none bg-transparent flex-grow' placeholder='Search company' type="text" />
          <div className='w-fit h-fit p-[5px] rounded-full hover:bg-white-secondary hover:text-black-primary'>
            <CiSearch />
          </div>
          <div className='flex flex-row gap-3 justify-center items-center'>
            <div className='w-[1px] h-[20px] bg-white-tertiary'></div>
            <select className='bg-transparent '>
              <option value="someOption">Some option</option>
              <option value="otherOption">Other option</option>
            </select>
          </div>
        </div>

        <div className='w-full lg:h-[70px] h-12 px-4 gap-2 cursor-pointer flex flex-row justify-start items-center hover:bg-blue-secondary relative' onMouseEnter={() => handleMouseEnter('account_options')} onMouseLeave={handleMouseLeave}>
          <img src={Logo} className='w-[40px] h-[40px] bg-white-primary rounded-full' alt="" />
          <span className='flex-grow'>Account User</span>
          {showMenu && buttonAction === 'account_options' ? <AiOutlineCaretUp /> : <AiOutlineCaretDown />}

          <div className={`absolute top-full right-[103%] duration-300 origin-top lg:right-1 ${showMenu && buttonAction === 'account_options' ? 'scale-100' : 'scale-0'}`}>
            <DropdownMenu listMenuItems={[
              <MenuItem menuIcon={<IoMdLogOut />} menuContext='Login' />,
              <MenuItem menuIcon={<IoBusinessOutline />} menuContext='Company' />,
              <div className={`relative`} onMouseEnter={() => handleMouseEnterLanguage()} onMouseLeave={handleMouseLeaveLanguage}>
                <MenuItem menuIcon={<GrLanguage />} menuContext='Language' otherComponent={showMenuLanguage ? <AiOutlineCaretUp /> : <AiOutlineCaretDown />} />
                <div className={`absolute top-full duration-300 right-0 origin-top ${showMenuLanguage ? 'scale-100' : 'scale-0'}`}>
                  <DropdownMenu listMenuItems={[
                    <MenuItem menuContext='English' />,
                    <MenuItem menuContext='Vietnamese' />,
                  ]}
                    width='w-[150px]'
                  />
                </div>
              </div>,
              <MenuItem menuIcon={<RiLogoutCircleLine />} menuContext='Logout' />,
            ]}
              width='w-[300px]'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header;
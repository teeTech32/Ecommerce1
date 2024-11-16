import logo from '../../assets/logo.png'
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import Darkmode from './Darkmode';
import propType from 'prop-types'
import { FaCaretDown } from "react-icons/fa6";
import { Menu, DropdownList } from '../../data';
import {toast} from "react-toastify"

const Navbar = ({darkMode, toggleMode, handlePopup}) => {

  
  return (
    <div className="shadow-md">
      {/*upper navbar*/}
      <div className='bg-primary/40 py-2 lg:py-4 dark:bg-gray-900 dark:text-white shadow-xl  duration-200 relative z-40'>
        <div className='w-full flex-col py-5 px-10 lg:container lg:flex justify-between lg:items-center lg:flex-row'>
          <div className='mb-5' >
            <a href="/#" onClick={()=>{ toast.success("Welcome Home")}} className='font-bold lg:text-4xl sm:text-2xl flex gap-x-2 lg:hover:scale-125 hover:scale-75 ease-in-out duration-500'>
              <img src={logo}  alt="Logo" className='w-10 lg:w-14'/>
              teeWears
            </a>
          </div>
          {/*search bar and other buttons */}
          <div className='flex gap-4 md:gap-4 lg:gap-6 items-center'>
            <div className='group relative '>
              <input type="text" placeholder='search' className=' sm:w-[200px] lg:w-[300px] group-hover:w-[250px] lg:group-hover:w-[400px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 lg:px-4 lg:py-2 focus:outline-none focus:border-1 focus:border-primary dark:text-black' />
               <IoMdSearch  className='text-3xl lg:text-4xl absolute text-black bottom-4 right-2 translate-y-1/2'/>
            </div>
              <button onClick={()=>handlePopup()} className="bg-gradient-to-r from-primary to-secondary text-white rounded-full py-1 px-6  transition-all duration-200 group gap-3 flex items-center ">
                  <span className='hidden group-hover:block transition-all duration-200'>Order</span>
                  < FaCartShopping className='text-xl lg:text-3xl cursor-pointer text-white drop-shadow-sm'/>
              </button>
              <div>
                <Darkmode  
                darkMode={darkMode} 
                toggleMode={toggleMode}/>
              </div>
          </div>
        </div>
      </div>
      <div className='flex justify-center bg-white text-black dark:bg-secondary dark:text-white'>
        <ul className='flex gap-10 lg:gap-40 items-center shadow-xl px-6 '>
          {
              Menu.map((data)=>(
                <li data-aos='zoom-in'
            data-aos-offset='100'
            data-aos-delay='200'
            data-aos-duration='1000'
            data-aos-easing='ease-in-sine' key={data.id} className='px-2 hover:text-primary font-semibold lg:font-bold lg:text-2xl '>
                  <a href={data.link}>{data.name}</a>
                </li>
              )
            )
          }
          <li className='group relative cursor-pointer font-semibold lg:text-2xl'>
            <a href="/#" className='flex items-center gap-[2px] py-2 lg:py-4 lg:font-bold'>
              Trendings
              <span>
                <FaCaretDown className='transition-all duration-200 group-hover:rotate-180 text-2xl lg:text-4xl'/>
              </span> 
            </a> 
            <div className='absolute z-[9999] hidden group-hover:block w-[150px] lg:w-[240px]  bg-white text-black shadow-xl'>
              <ul>
                {DropdownList.map((data)=>(
                <li key={data.id} className='mb-2'>
                  <a href={data.link} className='hover:bg-primary/50 p-2 rounded-md leading-8 lg:leading-10'>
                    {data.name}
                  </a>
                </li>
                    )
                  )
                } 
                
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

Navbar.propTypes={
  darkMode: propType.bool,
  toggleMode: propType.bool,
  handlePopup: propType.bool
}

export default Navbar

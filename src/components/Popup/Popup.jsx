import { IoCloseOutline } from "react-icons/io5"
import propTypes from 'prop-types'
import {toast} from 'react-toastify'
const Popup = ({setOrderPopup, orderPopup}) => {
  return (
    <>
      {orderPopup && (
        <div className="popup">
          <div className="h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm">
            <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 shadow-md bg-gray-900 dark:bg-gray-400 rounded-md duration-200 w-[300px]">
              <div className="flex items-center justify-between ">
                <div>
                  <h1 className="font-bold text-2xl text-white dark:text-black ">Order Now</h1>
                </div>
                <div>
                  <IoCloseOutline className="text-3xl hover:cursor-pointer hover:text-red-500 text-white dark:text-black dark:hover:text-red-500 " onClick={()=>setOrderPopup(false)}/>
                </div>
              </div>
              <div className="mt-4">
                <input type="text" placeholder="Name" className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-white px-2 py-1 mb-4"/>
                <input type="email" placeholder="Email" className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-white px-2 py-1 mb-4"/>
                <input type="text" placeholder="Address" className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-white px-2 py-1 mb-4"/>
                <div className="flex justify-center">
                  <button onClick={()=>{
                                        toast.error('Please try again later, the website is under maintenance.')
                                        setTimeout(()=>{setOrderPopup(false)}, 5000)
                                        }} className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-md cursor-pointer font-bold">
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div> 
        )
      }
    </>
    
  )
}

Popup.propTypes ={
  setOrderPopup: propTypes.bool,
  orderPopup: propTypes.bool
}

export default Popup
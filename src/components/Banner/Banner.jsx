import BannerImg from '../../assets/women/women2.jpg'
import { GrSecure } from "react-icons/gr";
import { FaCar } from "react-icons/fa6";
import { FaCreditCard } from "react-icons/fa";
import { MdDiscount } from "react-icons/md";

const Banner = () => {
  return (
    <div className="min-h-[550px] justify-center items-center py-12 sm:p-0 flex bg-primary/20 dark:bg-gray-950 text-black dark:text-white ">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 lg:gap-0 items-center">
          <div data-aos='zoom-out'
            data-aos-offset='200'
            data-aos-delay='50'
            data-aos-duration='500'
            data-aos-easing='ease-in-out'>
            <img src={BannerImg} alt="BannerImage"  className="max-w-[400px] h-[350] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover"/>
          </div>
          <div data-aos='flip-left'
            data-aos-offset='200'
            data-aos-delay='100'
            data-aos-duration='1000'
            data-aos-easing='ease-in-out' className='flex flex-col gap-6 sm:pt-0'>
            <h1 className='text-3xl lg:text-5xl font-bold dark:text-yellow-400'>Seasonal Sales upto 50% off</h1>
            <p className='text-sm lg:text-2xl text-gray-700 tracking-wide leading-5 md:leading-10 dark:text-white'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse debitis id atque perferendis veniam neque.
            </p>
            <div className='flex flex-col gap-4'>
              <div className='flex items-center gap-4'>
                <GrSecure className='text-2xl h-10 w-10 lg:text-4xl lg:w-14 lg:h-14 shadow-2xl p-2 rounded-full bg-violet-400 dark:bg-violet-600'/>
                <p className='text-sm lg:font-bold lg:text-lg'>Quality Products</p>
              </div>
              <div className='flex items-center gap-4'>
                <FaCar className='text-2xl h-10 w-10 lg:text-4xl lg:w-14 lg:h-14 shadow-2xl p-2 rounded-full bg-orange-400 dark:bg-orange-600'/>
                <p className='text-sm lg:font-bold lg:text-lg'>Fast Delivery</p>
              </div>
              <div className='flex items-center gap-4'>
                <FaCreditCard className='text-2xl h-10 w-10 lg:text-4xl lg:w-14 lg:h-14 shadow-2xl p-2 rounded-full bg-green-400 dark:bg-green-600'/>
                <p className='text-sm lg:font-bold lg:text-lg'>Easy Payment Method</p>
              </div>
              <div className='flex items-center gap-4'>
                <MdDiscount className='text-2xl h-10 w-10 lg:text-4xl lg:w-14 lg:h-14 shadow-2xl p-2 rounded-full bg-yellow-400 dark:bg-yellow-600'/>
                <p  className='text-sm lg:font-bold lg:text-lg'>Get Offer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Banner
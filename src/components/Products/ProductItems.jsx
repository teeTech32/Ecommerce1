import PropTypes from 'prop-types'
import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { GiSelfLove } from "react-icons/gi"

const ProductItems = ({data, handlePopup}) => {
  const [isliked, setIsliked] = useState(false)

  const handleLiked = ()=>{
    setIsliked((prevState)=>!prevState)
  }

  return (
    <div data-aos='fade-up'
          data-aos-offset='200'
          data-aos-delay='50'
          data-aos-duration='1000'
          data-aos-easing='ease-in-out'  className='hover:scale-125 ease-in-out duration-300'>
      <img src={data.img} alt="Image"
      className='h-[350px] w-[300px] object-cover rounded-md relative' />
      <GiSelfLove class={`cursor-pointer text-2xl absolute bottom-24 right-2 ${isliked ? 'text-red-600':'text-black'}`} onClick={()=>handleLiked(data.id)}/>
      <div className='relative'>
        <h3 className='font-semibold'>
        {data.title}
        </h3>
        <p className='text-sm text-black dark:text-white'>{data.color}</p>
        <div className='flex items-center gap-1'>
          <FaStar className='text-yellow-400'/>
          <span>{data.rating}</span>
        </div>
        <button onClick={()=>handlePopup()} className='absolute top-7 right-5 md:right-1 lg:right-1 btn-sm mt-2 dark:bg-secondary bg-gray-900 hover:scale-105 duration-200 text-white  px-2 rounded-full cursor-pointer font-semibold'>
        Order Now
        </button>
      </div>
    </div>
  )
}

ProductItems.propTypes={
  data:PropTypes.array,
  handlePopup:PropTypes.bool
}

export default ProductItems
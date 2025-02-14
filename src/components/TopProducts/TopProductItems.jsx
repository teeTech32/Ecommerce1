import PropTypes from 'prop-types'
import { useState } from "react"
import { FaStar } from "react-icons/fa6"
import { GiSelfLove } from "react-icons/gi"


const TopProductItems = ({data, handlePopup}) => {
  const [isliked, setIsliked] = useState(false)

  const handleLiked = ()=>{
    setIsliked((prevState)=>!prevState)
  }

  return (
    <div data-aos='zoom-in'
        data-aos-offset='200'
        data-aos-delay='200'
        data-aos-duration='1000'
        data-aos-easing='ease-in-out' className="rounded-2xl bg-white dark:bg-primary hover:bg-black/80 dark:hover:bg-gray-800 hover:text-white relative shadow-xl duration-high group max-w-[300px] lg:w-[350px] mb-20">
      <div className="h-[100px] md:h-[180px]">
        <img src={data.img} alt="ShirtsImages" className="w-[140px] lg:w-[200px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 " />
      </div>
      <div className="p-4 text-center">
        <div className="w-full flex items-center justify-center gap-1">
          <FaStar className="text-yellow-500 dark:text-white "/>
          <FaStar className="text-yellow-500 dark:text-white"/>
          <FaStar className="text-yellow-500 dark:text-white"/>
          <FaStar className="text-yellow-500 dark:text-white"/>
        </div>
        <h1 className="text-xl font-bold">{data.title}</h1>
        <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2 dark:text-white">{data.description}</p>
        <button onClick={()=>handlePopup()} className='mt-2 bg-secondary dark:bg-gray-900 hover:scale-105 duration-200 text-white py-2 px-4 rounded-full cursor-pointer font-bold'>
          Order Now
        </button>
          <GiSelfLove class={`cursor-pointer text-2xl md:text-3xl  top-7 right-10 ${isliked ? 'text-red-600':'text-black dark:text-white'}`} onClick={()=>handleLiked(data.id)}/>
      </div>
    </div>
  )
}

TopProductItems.propTypes={
  data:PropTypes.array,
  handlePopup:PropTypes.bool
}  
export default TopProductItems
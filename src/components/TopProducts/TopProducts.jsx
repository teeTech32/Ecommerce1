import { FaStar } from "react-icons/fa6"
import { TopProductsList } from "../../data"
import propTypes from 'prop-types'


const TopProducts = ({handlePopup}) => {
  return (
    <div>
       <div className=" py-10 bg-primary/20 text-black dark:bg-gray-950">
          <div data-aos='zoom-out-right'
            data-aos-offset='200'
            data-aos-delay='50'
            data-aos-duration='1000'
            data-aos-easing='ease-in-out' className=" mb-20 mx-auto  md:mb-20 pb-10 px-14 lg:px-28 leading-8 lg:leading-10"> 
            <p className="font-semibold text-secondary dark:text-yellow-400 text-xl lg:font-bold lg:text-3xl">Top Rated Products For You</p>
            <h1 className="dark:text-white text-xl font-bold lg:text-2xl">Best Products</h1>
            <p className="font-semibold lg:text-xl text-black dark:text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut commodi, dolor illum temporibus iusto enim.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 lg:gap-10 place-items-center px-10">
            {
            TopProductsList.map((data)=>(
              <div data-aos='zoom-in'
            data-aos-offset='200'
            data-aos-delay='200'
            data-aos-duration='1000'
            data-aos-easing='ease-in-out' key={data.id} className="rounded-2xl bg-white dark:bg-primary hover:bg-black/80 dark:hover:bg-gray-800 hover:text-white relative shadow-xl duration-high group max-w-[300px] lg:w-[350px] mb-10">
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
                </div>
              </div>
            ))}
            
          </div>
        </div>
    </div>
  )
}
TopProducts.propTypes ={
  handlePopup: propTypes.bool
}

export default TopProducts
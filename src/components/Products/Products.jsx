import { ProductsData } from "../../data";
import { FaStar } from "react-icons/fa";
import {toast} from 'react-toastify'

const Products = () => {
 
  return (
    <div className=" py-10 bg-primary/20 text-black dark:bg-gray-950 dark:text-white leading-8">
      <div className="container">
          <div data-aos='flip-right'
              data-aos-offset='200'
              data-aos-delay='50'
              data-aos-duration='1000'
              data-aos-easing='ease-in-out' className="text-center mb-10 max-w-[600px] mx-auto">
            <p className="font-semibold text-secondary dark:text-yellow-400 text-xl lg:font-bold lg:text-3xl">Top Selling Products For You</p>
            <h1 className="text-xl font-bold lg:text-2xl">Products</h1>
            <p className="font-semibold lg:text-xl text-black dark:text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut commodi, dolor illum temporibus iusto enim.
            </p>
          </div>
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
            {
              ProductsData.map((data)=>(
                <div data-aos='fade-up'
            data-aos-offset='200'
            data-aos-delay='50'
            data-aos-duration='1000'
            data-aos-easing='ease-in-out' key={data.id} className='hover:scale-125 ease-in-out duration-300'>
                  <img src={data.img} alt="Image"
                  className='h-[220px] w-[150px] object-cover rounded-md' />
                  <div>
                    <h3 className='font-semibold'>
                    {data.title}
                    </h3>
                    <p className='text-sm text-black dark:text-white'>{data.color}</p>
                    <div className='flex items-center gap-1'>
                       <FaStar className='text-yellow-400'/>
                      <span>{data.rating}</span>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
          <div className="flex justify-center">
            <button onClick={()=>toast.error('Please try again later, other wears are yet to come.')} className="text-center text-white mt-10 cursor-pointer bg-primary py-1 px-5 rounded-md">View All</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Products
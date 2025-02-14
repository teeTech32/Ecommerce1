
import { useState } from "react";
import { ShoesData } from "../../data";
import ShoeItems from "./ShoeItems.jsx";
import PropTypes from 'prop-types'


const Shoes = ({handlePopup}) => {
  const [visibleCount, setVisibleCount] = useState(8)
 
  return (
    <div className=" py-10 bg-primary/20 text-black dark:bg-gray-950 dark:text-white leading-8">
      <div className="container">
          <div data-aos='flip-right'
              data-aos-offset='200'
              data-aos-delay='50'
              data-aos-duration='1000'
              data-aos-easing='ease-in-out' className="text-center mb-10 max-w-[600px] mx-auto">
            <p className="font-semibold text-secondary dark:text-yellow-400 text-xl lg:font-bold lg:text-3xl">Our Premium Shoes For You</p>
            <h1 className="text-xl font-bold lg:text-2xl">Sneakers</h1>
            <p className="font-semibold lg:text-xl text-black dark:text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut commodi, dolor illum temporibus iusto enim.
            </p>
          </div>
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
            {
              ShoesData.slice(0, visibleCount).map((data)=>(
                <ShoeItems key={data.id} data={data} handlePopup={handlePopup}/>
              ))
            }
          </div>
          <div className="flex justify-center">
            {visibleCount < ShoesData.length && <button onClick={() => setVisibleCount(visibleCount + 4)} className="text-center text-white mt-10 cursor-pointer bg-primary py-1 px-5 rounded-md">View More</button> }
          </div>
        </div>
      </div>
    </div>
  )
}

Shoes.propTypes={
 handlePopup:PropTypes.bool
}

export default Shoes
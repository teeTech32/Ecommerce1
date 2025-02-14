import TopProductItems from "./TopProductItems"
import { TopProductsList } from "../../data"
import PropTypes from 'prop-types'


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
              <TopProductItems key={data.id} data={data} handlePopup={handlePopup}/>
            ))}
          </div>
        </div>
    </div>
  )
}

TopProducts.propTypes={
  handlePopup:PropTypes.bool
}


export default TopProducts
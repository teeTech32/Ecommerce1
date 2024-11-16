import { ImageLists } from '../../data'
import Slider from "react-slick"
import propTypes from 'prop-types'


const Hero = ({handlePopup}) => {
  var settings = {
      dots:false,
      arrows: false,
      infinite: true,
      speed: 800,
      slidesToScrolls: 1,
      autoplay: true,
      autoplaySpeed:4000,
      cssEase: "ease-in-out",
      pauseOnHover: false,
      pauseFocus: true
  }
  return (
    <div className='relative overflow-hidden min-h-[550px] sm:min-h-[650] bg-gray-100 text-black flex  justify-center items-center dark:bg-gray-950 dark:text-white'>
      <div className='h-[700px] w-[700px] bg-primary/40 rotate-45 -top-1/2 right-0 rounded-3xl absolute -z-9'>
      </div>
      <div className='container pb-8 sm:pb-0'>
        <Slider {...settings}>
          {ImageLists.map((item) =>( 
         <div key={item.id}>
            <div className='grid grid-cols-1 sm:grid-cols-2'>
              <div  className='flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10'>
                <h1 data-aos='zoom-in-up'
            data-aos-offset='200'
            data-aos-delay='50'
            data-aos-duration='500'
            data-aos-easing='ease-in-out' className='font-bold text-xl lg:text-4xl dark:text-yellow-400'>
                   {item.title}
                </h1>
                <p data-aos='flip-right'
            data-aos-offset='200'
            data-aos-delay='100'
            data-aos-duration='1500'
            data-aos-easing='ease-in-out' className='font-semibold lg:text-2xl mb-2 lg:mb-3'>
                  {item.description}
                </p>
                <div data-aos='fade-up'
            data-aos-offset='200'
            data-aos-delay='300'
            data-aos-duration='500'>
                  <button onClick={()=>handlePopup()} className='bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full cursor-pointer font-bold'>
                    Order Now
                  </button>
                </div>
              </div>
              <div data-aos='zoom-in-down'
            data-aos-offset='200'
            data-aos-delay='200'
            data-aos-duration='1000'
            data-aos-easing='ease-in-out' className='order-2 sm:order-1'>
                <div className='relative z-10'>
                  <img src={item.img} alt="Images1" className='w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] sm:scale-125 object-contain mx-auto lg:scale-120' />
                </div>
              </div>
            </div>
          </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}
Hero.propTypes ={
  handlePopup:propTypes.bool
}

export default Hero
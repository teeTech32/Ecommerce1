import { TestimonialData } from "../../data"
import Slider from "react-slick"

const Testimonial = () => {
   var settings = {
      dots:true,
      arrows: false,
      infinite: true,
      speed: 500,
      slidesToScrolls: 1,
      autoplay: true,
      autoplaySpeed:2000,
      cssEase:'linear',
      pauseOnHover: true,
      pauseFocus: true,
      responsive:[
        {
          breakpoint: 10000,
          settings:{
            slidesToShow:3,
            slidesToScroll:1,
            infinite: true,
          },
        },
        {
          breakpoint:1024,
          settings:{
            slidesToShow:2,
            slidesToScroll:1,
            initialSlide:2,
          },
        },
        {
          breakpoint: 640,
            settings:{
            slidesToShow:1,
            slidesToScroll:1,
          }
        }
      ]
    }

  return (
    <div className="">
      <div className=" pt-20 bg-gray-200">
        <div data-aos='fade-up'
            data-aos-offset='300'
            data-aos-delay='100'
            data-aos-duration='1000'
            data-aos-easing='ease-in-sine' className="text-center mb-10 max-w-[600px] mx-auto space-y-3 ">
            <p className="font-semibold text-secondary dark:text-yellow-400 text-xl lg:font-bold lg:text-3xl">What Our Customers Are Saying</p>
            <h1 className="text-xl font-bold lg:text-2xl">Testimonials</h1>
            <p className="font-semibold lg:text-xl text-black dark:text-orange-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut commodi, dolor illum temporibus iusto enim.
            </p>
          </div>
          <div>
            <Slider {...settings}>
              {
                TestimonialData.map((data)=>(
                  <div data-aos='flip-left'
            data-aos-offset='200'
            data-aos-delay='200'
            data-aos-duration='2000'
            data-aos-easing='ease-out-cubic' key={data.id} className="my-6 lg:my-8">
                     <div  className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl bg-gray-300 dark:bg-gray-700 relative">
                    <div>
                      <img src={data.img} alt="NetError" className="rounded-full w-14 h-14 lg:w-20 lg:h-20"/>
                    </div>
                    <div className="flex flex-col items-center  pt-2 lg:pt-4">
                      <div className="space-y-1 lg:space-y-2 ">
                        <p className="text-xs lg:text-lg text-black dark:text-white">{data.text}</p>
                        <h1 className="text-lg font-bold lg:text-2xl text-orange-500">{data.name}
                        </h1>
                      </div>
                    </div>
                    <p className="dark:text-white text-9xl font-serif absolute top-0 right-0">
                    ``
                    </p>
                  </div>
                </div>
                  
                ))
              }
            </Slider>
          </div>
      </div>
    </div>
  )
}

export default Testimonial
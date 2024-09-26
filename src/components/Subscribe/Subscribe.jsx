import Banner from '../../assets/website/orange-pattern.jpg'

const BannerImage = {
  backgroundImage:`url(${Banner})`,
  backgroundPosition:'center',
  backgroundRepeat:'no-repeat',
  backgroundSize:'cover',
  height:'100%',
  width:'100%'
}

const Subscribe = () => {
  return (
    <div data-aos='fade-up'
            data-aos-offset='200'
            data-aos-delay='50'
            data-aos-duration='1000'
            data-aos-easing='ease-in-out' className='bg-gray-100 dark:bg-gray-800 text-white' style={BannerImage}>
      <div data-aos='fade-up'
            data-aos-offset='200'
            data-aos-delay='200'
            data-aos-duration='1000'
            data-aos-easing='ease-in-out' className='container backdrop-blur-sm py-10 mb-0'>
        <div className='max-w-xl mx-auto space-y-4 lg:space-y-6'>
          <h1 className='lg:text-2xl font-semibold !text-center sm:text-left '>Get Notified About New Products</h1>
          <input type="text" placeholder='Enter your email' className='w-full p-1.5 lg:p-3' />
        </div>
      </div>
    </div>
  )
}

export default Subscribe
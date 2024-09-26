import Lightpng from '../../assets/website/light-mode-button.png'
import Darkpng from '../../assets/website/dark-mode-button.png'
import PropTypes from 'prop-types'

const Darkmode = ({darkMode, toggleMode}) => {
  
  return (
    <div className='relative'>
      <button onClick={toggleMode}>
        {darkMode ? <img src={Lightpng} alt="Lightmode" className='w-14 h-8 drop-shadow-xl cursor-pointer lg:w-20 lg:h-12 transition-all duration-300'/> :  <img src={Darkpng} alt="Lightmode" className='w-14 h-8 drop-shadow-xl cursor-pointer lg:w-20 lg:h-12 transition-all duration-300 ' />}
      </button>
    </div>
  )
}

Darkmode.propTypes = {
  darkMode: PropTypes.bool,
  toggleMode: PropTypes.bool
}

export default Darkmode
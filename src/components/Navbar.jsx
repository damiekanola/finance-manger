import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faChartSimple } from '@fortawesome/free-solid-svg-icons';
const Navbar = () => {
  return (
    <nav className=' bg-white flex items-center justify-center p-2 gap-2 bottom-0 sticky'>
      <FontAwesomeIcon icon={faUser} />
      <FontAwesomeIcon icon={faChartSimple} style={{color: "#000000",}} />
      <img src='./src/assets/chart-simple.svg' />
    </nav>
  )
}

export default Navbar

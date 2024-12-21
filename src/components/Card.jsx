import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPiggyBank } from '@fortawesome/free-solid-svg-icons';
const Card = ({ title }) => {
  return (
    <div className=" bg-white rounded-xl p-3 flex-1">
        <div className=' flex items-center justify-start gap-1'>
            <div className=' bg-[#E7EEE9] rounded-full flex items-center justify-center p-1'>
            <FontAwesomeIcon icon={faPiggyBank} size='xs' style={{color: "#617c6c",}} />

            </div>
       
        <h2>{title}</h2> 
        </div>
        <h1>$5000</h1>
        
    </div>
  )
}

export default Card

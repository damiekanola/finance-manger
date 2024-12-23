import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPiggyBank } from "@fortawesome/free-solid-svg-icons";




const Card = ({ title, children, className }) => {
  return (
    <div className={`bg-white rounded-xl p-3 ${className}`}>
      <div className=" flex items-center gap-3">
        {/* <div className=" bg-[#E7EEE9] rounded-full flex items-center justify-center p-1 w-8 h-8">
          <FontAwesomeIcon
            icon={faPiggyBank}
            size="xs"
            style={{ color: "#617c6c" }}
          />
        </div> */}
        <h2 className=" text-base font-medium">{title}</h2>
      </div>
      {children}
    </div>
  );
};

export default Card;

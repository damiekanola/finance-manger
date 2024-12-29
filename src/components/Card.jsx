import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";

const Card = ({ title, children, styles }) => {
  return (
    <div className={`bg-white rounded-xl p-3 ${styles}`}>
      <div className=" flex items-center gap-3 pb-2">
        <h2 className=" text-base font-medium">{title}</h2>
      </div>
      {children}
    </div>
  );
};

Card.PropTypes = {
  title: PropTypes.string,
  styles: PropTypes.string,
};

export default Card;

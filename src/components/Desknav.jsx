import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faChartSimple,
  faWallet,
  faHouse,
  faGear,
} from "@fortawesome/free-solid-svg-icons";
const Desknav = () => {
  return (
    <nav className=" flex flex-col gap-12  w-fit h-screen">
      <img src="./src/assets/Logo.svg" className="w-full" />
      <div className=" bg-white p-4 items-center justify-around w-fit h-1/2 flex flex-col gap-5 rounded-full">
        <FontAwesomeIcon
          icon={faHouse}
          style={{ color: "#000000" }}
          size="lg"
        />
        <FontAwesomeIcon
          icon={faChartSimple}
          style={{ color: "#000000" }}
          size="lg"
        />
        <FontAwesomeIcon
          icon={faWallet}
          style={{ color: "#000000" }}
          size="lg"
        />
        <FontAwesomeIcon icon={faUser} style={{ color: "#000000" }} size="lg" />
        <FontAwesomeIcon icon={faGear} style={{ color: "#000000" }} size="lg" />
      </div>
    </nav>
  );
};

export default Desknav;

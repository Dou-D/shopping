import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { MyIconTypes } from "./types";

const MyIcon: React.FC<MyIconTypes> = ({ icon, color }) => {
  return <FontAwesomeIcon icon={icon} color={color} />;
};

export default MyIcon;

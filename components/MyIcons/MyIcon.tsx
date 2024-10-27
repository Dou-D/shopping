import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MyIconTypes } from "./types";

export const MyIcon: React.FC<MyIconTypes> = ({ icon, color }) => {
  return <FontAwesomeIcon icon={icon} color={color} />;
};

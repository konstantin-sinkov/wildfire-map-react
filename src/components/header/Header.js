import {Icon} from "@iconify/react";
import locationIcon from "@iconify/icons-mdi/fire-alert";
import './Header.css';

const Header = () => {
  return (
   <header className="header">
       <h1>
           <Icon icon={locationIcon}
                 className="header-icon"/>
           Wildfire Tracker (Powered by NASA)
       </h1>
   </header>
  );
 }

export default Header;

import  "./sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsIcon from '@mui/icons-material/Settings';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import FaceIcon from '@mui/icons-material/Face';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import InventoryIcon from '@mui/icons-material/Inventory';
import SettingsSystemDaydreamIcon from '@mui/icons-material/SettingsSystemDaydream';
 import {Link} from "react-router-dom"
 // import {Person2OutlinedIcon ,LocalShippingIcon} from "@mui/icons-material"
const Sidebar = () => {
    return (  
        <div className="sidebar">
            <div className="top">
                <Link to="/" style={{textDecoration:"none"}}>
                <span className="logo">zakidash</span>
                </Link>
                
            </div>
            <hr />
             <div className="center">
                <ul>
                    <p className="title">Main</p>
                    <li>
                        <DashboardIcon className="icon"/>
                        <span>Dashboard</span>
                    </li>
                      <p className="title">Listes</p>
                            <Link to="/users" style={{textDecoration:"none"}}>
                    <li>
                        <Person2OutlinedIcon className="icon" />
                        <span>Users</span>
                    </li>
                    </Link>
                     <Link to="/products" style={{textDecoration:"none"}}>
                    
                    <li>
                        <InventoryIcon className="icon" />
                        <span>Products</span>
                    </li>
                    </Link>
                    <li>
                        <CreditCardIcon className="icon" />
                        <span>Orders</span>

                    </li>
                     <li>
                        <LocalShippingIcon className="icon" />
                        <span>Delivery</span>
                    </li>
                      <p className="title">USEFUL</p>
                     <li>
                        <AnalyticsIcon className="icon" />
                        <span>Stats</span>
                    </li>
                     <li>
                         <NotificationsNoneIcon className="icon" />
                        <span>Notifications</span>
                    </li>
                      <p className="title">Service</p>
                     <li>
                        <SettingsSystemDaydreamIcon className="icon" />
                        <span>System Helth</span>
                    </li>
                     <li>
                        <FaceIcon className="icon" />
                        <span>Logs</span>
                    </li>
                    <li>
                        <SettingsIcon className="icon" />
            
                        <span>Settings</span>
                    </li>
                      <p className="title">User</p>
                    <li>
                        <ManageAccountsIcon  className="icon"/>
                        <span>Profiles</span>
                    </li>
                    <li>
                        <ExitToAppIcon className="icon"  />
                        <span>Logout</span>
                    </li>
                </ul>

             </div>
              <div className="bottom">
                <div className="coloroption"></div>
                 <div className="coloroption"></div>
               
                 </div>
        </div>
    )
}
export default Sidebar
import  "./navbar.scss"
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import  ListOutlinedIcon  from "@mui/icons-material/ListOutlined";

 const Navbar = () => {
    return (  
        <div className="navbar">
            <div className="wrapper">
                <div className="search">
                    <input type="text" placeholder="search ..." />
<SearchOutlinedIcon/>
                </div>
                <div className="items">
                    <div className="item">
<LanguageOutlinedIcon className="icon"/>
french
                    
                </div>
                <div className="item">
<DarkModeIcon className="icon"/>

                    
                </div>
                <div className="item">
<FullscreenExitOutlinedIcon className="icon"/>

                    
                </div>
                <div className="item">
<NotificationsNoneOutlinedIcon className="icon"/>
<div className="counter">1</div>

                    
                </div>
                <div className="item">
<ChatBubbleOutlineOutlinedIcon className="icon"/>
<div className="counter">2</div>

                    
                </div>
                <div className="item">
<ListOutlinedIcon className="icon"/>
   
                </div>
                <div className="item">
<img
src="https://www.pexels.com/fr-fr/photo/portrait-en-noir-et-blanc-d-une-jeune-femme-a-lunettes-32018126/https://images.pexels.com/fr-fr/photo/portrait-en-noir-et-blanc-d-une-jeune-femme-a-lunettes-32018126/"
 alt="" className="avatar"
/>

                    
                </div>


                </div>
            </div>

        </div>
    )
}
export default Navbar

import "./featured.scss"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
 const Featured = () => {
    return ( 
        <div className="featured" >
          <div className="top">
            <h1 className="title">Total Revenue</h1>
            <MoreVertIcon fontSize="small"/>
          </div>
          <div className="bottom">
            <div className="featuredChart">
                <CircularProgressbar value={70} text="70%" strokeWidth={5}/>

            </div>
            <p className="title">Total sales made today</p>
            <p className="amout">420 fcfa</p>
               <p className="desc">processus transaction precedente les dernieres paiement ne sont pas inclues
                
               </p>
               <div className="summary">
                <div className="item">
                    <div className="itemTitle">Last week</div>
                    <div className="itemResult positive">
                        <KeyboardArrowDownOutlinedIcon fontSize="small"/>
                        <div className="">20.000 fcfa</div>
                    </div>
                </div>
                <div className="item">
                    <div className="itemTitle">last mmonth</div>
                    <div className="itemResult">
                        <KeyboardArrowDownOutlinedIcon fontSize="small"/>
                        <div className="">20.000 fcfa</div>
                    </div>
                </div>
                <div className="item">
                    <div className="itemTitle">Target</div>
                    <div className="itemResult positive">
                        <KeyboardArrowUpOutlinedIcon fontSize="small"/>
                        <div className="">20.000 fcfa</div>
                    </div>
                </div>
               </div>
          </div>
        
        </div>
     )
}
export default Featured
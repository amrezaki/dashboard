 import "./widget.scss"
 import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
 import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
 import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
 import ShoppingCartCheckoutOutlinedIcon from '@mui/icons-material/ShoppingCartCheckoutOutlined';
 import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
 
 
 const Widget = ({ type }) => {
    let data ;
    // temporary
    const amount = 100;
     const diff = 20;

    switch (type) {
        case "user":
            data = {
                title : "USERS",
                isMoney :false,
                link : "see all users",
                icon : 
                    <PersonOutlineIcon className="icon" style={{color:"black", backgroundColor:"purple"}}/>,
                
            };
                break;
                case "order":
            data ={
                title : "Orders",
                isMoney :false,
                link : "view all orders",
                icon : 
                    <ShoppingCartCheckoutOutlinedIcon className="icon" style={{color:"black", backgroundColor:"purple"}}/>,
                
            };
                break;
                case "earning":
            data ={
                title : "EARNINGS",
                isMoney :true ,
                link : "View net earnings",
                icon : 
                    <MonetizationOnOutlinedIcon className="icon" style={{color:"black", backgroundColor:"purple"}} />,
                
            };
                break;
                case "balance":
            data ={
                title : "BALANCE",
                isMoney :true ,
                link : "see details",
                icon : 
                    <AccountBalanceWalletIcon className="icon" style={{color:"black", backgroundColor:"purple"}} />,
                
            };
                break;
                default:
                    break;
            
          
    }
    return ( 
        <div className="widget" >
        <div className="left"> 
      <span className="title"> {data.title} </span>
      <span className="counter"> {data.isMoney && "$" } {amount} </span>
      <span className="link"> {data.link} </span>
        </div>
        <span className="title"></span>
         <div className="right">
            <div className="percentage positive ">
                <KeyboardArrowUpIcon/>
              {diff} %
                </div>
                {data.icon}
        
         </div>
        </div>
     )
}
export default Widget
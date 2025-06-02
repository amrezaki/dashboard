
import "./table.scss"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

 const List = () => {
    const rows = [

        {
            id : 1143155 ,
             product : "Macbook 1"  ,
             img : "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65.jpg"    ,
             customer : "zaki diedhiou",
             date : "1 Avril" ,
             amount : 850 ,
             methode :"cash on delivery",
             Status: "approved",
            
            },
             {
            id : 1143155 ,
             product : "acer pro1"  ,
             img : "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65.jpg"    ,
             customer : "sadia diedhiou",
             date : "1 juin" ,
             amount : 10000 ,
             methode :"cash on delivery",
             Status: "pending",
            
            },
             {
            id : 63008 ,
             product : "wonder core 1"  ,
             img : "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65.jpg"    ,
             customer : "Alioune diedhiou",
             date : "4 Avril" ,
             amount : 1000,
             methode :"cash on delivery",
             Status: "pending",
            
            },
             {
            id : 1143155 ,
             product : "pistolet de massage 1"  ,
             img : "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65.jpg"    ,
             customer : "Toma diedhiou",
             date : "1 decembre" ,
             amount : 85000 ,
             methode :"payment en ligne",
             Status: "approved",
            
            },
             {
            id : 11445678 ,
             product : "Melastique de massage1"  ,
             img : "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65.jpg"    ,
             customer : "Alioune diedhiou",
             date : "1 june" ,
             amount : 850345 ,
             methode :"cash on delivery",
             Status: "pending",
            
            },
    ];
    return ( 
        <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Trackink ID</TableCell>
            <TableCell className="tableCell">Product</TableCell>
            <TableCell className="tableCell">Customer</TableCell>
            <TableCell className="tableCell">Date</TableCell>
             <TableCell className="tableCell">Amount</TableCell>
            <TableCell className="tableCell">Payment Method</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id} >
              
              <TableCell className="tableCell" >{row.id}</TableCell>
              <TableCell  className="tableCell">
<div className="cellwrapper">
  <img src={row.img} alt="" className="image" />
  {row.product}
</div>

              </TableCell>
              <TableCell className="tableCell" >{row.customer}</TableCell>
              <TableCell  className="tableCell">{row.date}</TableCell>
              <TableCell  className="tableCell">{row.amount}</TableCell>
               <TableCell  className="tableCell">{row.methode}</TableCell>
                <TableCell  className="tableCell">
                  <span className=   {`status ${row.Status}`}>{row.Status} </span>
                  </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
     )
}
export default List 




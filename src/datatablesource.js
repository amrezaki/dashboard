import { width } from "@mui/system";

export const userColumns =[  {   field: 'id', headerName: 'ID', width: 70 },
    {
field:"user", headerName:"User",width:230 ,renderCell:(params)=>{
    return(
        <div className="cellWithing">
            <img className="CellImg" src={params.row.img }alt="avatar"/>
            {params.row.username}
        </div>
    );
}
    },
    {
field : "email" ,
headerName: "Email", 
width:230 ,
    },
    {
field : "age" ,
headerName: "Age", 
width:100 ,
    }
    ,
    {
field : "statut" ,
headerName: "Statut", 
width:160,
renderCell :(params)=>{
    return(
<div className = {`cellWithStatus ${params.row.statut}`}>
{
   params.row.statut 
}
    </div>

    )
}
    }
];
    
 
// temporary data
export const userRows =
[
    {
id:1,
    username : "Snow",
    img:"https://www.pexels.com/fr-fr/photo/femme-en-lunettes-encadrees-noires-et-chemise-verte-5017691/",
    statut: "active",
    email: "isnow@gmail.com",
    age:35 ,
    },
     {
id:2,
    username : "jamie lannister",
    img:"https://www.pexels.com/fr-fr/photo/femme-en-lunettes-encadrees-noires-et-chemise-verte-5017691/",
    statut: "active",
    email: "isnow@gmail.com",
    age:42 ,
    },
     {
id:3,
    username : "zaki",
    img:"https://www.pexels.com/fr-fr/photo/femme-en-lunettes-encadrees-noires-et-chemise-verte-5017691/",
    statut: "pending",
    email: "isnow@gmail.com",
    age:31 ,
    },
    {
id:4,
    username : "zaki",
    img:"https://www.pexels.com/fr-fr/photo/femme-en-lunettes-encadrees-noires-et-chemise-verte-5017691/",
    statut: "pending",
    email: "isnow@gmail.com",
    age:31 ,
    },
    {
id:5,
    username : "zaki",
    img:"https://www.pexels.com/fr-fr/photo/femme-en-lunettes-encadrees-noires-et-chemise-verte-5017691/",
    statut: "pending",
    email: "isnow@gmail.com",
    age:31 ,
    },
    {
id:6,
    username : "zaki",
    img:"https://www.pexels.com/fr-fr/photo/femme-en-lunettes-encadrees-noires-et-chemise-verte-5017691/",
    statut: "pending",
    email: "isnow@gmail.com",
    age:31 ,
    },
    {
id:7,
    username : "zaki",
    img:"https://www.pexels.com/fr-fr/photo/femme-en-lunettes-encadrees-noires-et-chemise-verte-5017691/",
    statut: "passive",
    email: "isnow@gmail.com",
    age:31 ,
    },
    {
id:8,
    username : "zaki",
    img:"https://www.pexels.com/fr-fr/photo/femme-en-lunettes-encadrees-noires-et-chemise-verte-5017691/",
    statut: "passive",
    email: "isnow@gmail.com",
    age:31 ,
    },
    {
id:9,
    username : "zaki",
    img:"https://www.pexels.com/fr-fr/photo/femme-en-lunettes-encadrees-noires-et-chemise-verte-5017691/",
    statut: "pending",
    email: "isnow@gmail.com",
    age:31 ,
    },
    
    
]
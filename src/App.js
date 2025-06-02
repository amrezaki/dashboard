import Home from "./pages/home/Home";
import List from "./pages/list/List";
import Login from "./pages/login/Login";
import Single from "./pages/single/Single";
import New from "./pages/new/New";

 import { 
BrowserRouter ,
Routes ,
Route

  }
   from "react-router-dom";
import { productInputs, userInputs } from "./formSource";


function App() {
  return (

    <div className="App">
      <BrowserRouter>

      <Routes>
        <Route path="/" >
        <Route index element = { <Home/>}/>
        </Route>

<Route path="login" element = { <Login/>}/>

<Route path="users" >
<Route index element= {<List/>} />
<Route path=":userid" element= {<Single/>} />
<Route path="new" element= {<New inputs={userInputs} title="Add new User"/>} />
        </Route>

   <Route path="products" >
<Route index element= {<List/>} />
<Route path=":productid" element= {<Single/>} />
<Route path="new" element= {<New inputs={productInputs} title="Add new product" />} />
        </Route>     
      </Routes>
      </BrowserRouter>

    
    </div>
  );
}

export default App;

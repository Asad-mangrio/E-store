
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import DrawerAppBar from './Components/Layout/Layout';
import { Productdata } from './Components/Productdata/Productdata';
import Signin from './Components/outh/Signin/Signin';
import Signup from './Components/outh/Signup/Signup';
import Errorpage from './Components/ErrorPage/Errorpage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';



function App() {
  const router = createBrowserRouter([
    {
     path:"/",element :  < DrawerAppBar/>,errorElement:<Errorpage/>,
    },
   
    {
     path:"/Signin",element : <Signin/>,
    },
    {
     path:"/Signup",element :   < Signup/>,
    }
  ])
  return (
    <div className="App">
    
     
     <RouterProvider router={router} />
    </div>
  );
}

export default App;

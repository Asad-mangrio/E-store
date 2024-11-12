
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import DrawerAppBar from './Components/Layout/Layout';
import { Productdata } from './Components/Productdata/Productdata';



function App() {
  return (
    <div className="App">
     < DrawerAppBar/>
     <Productdata/>
    </div>
  );
}

export default App;

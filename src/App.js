import { getByDisplayValue } from "@testing-library/react";

import Home from './view/screen/home';
import Contact from './view/screen/contact';
import{BrowserRouter,Routes,Route,Link} from 'react-router-dom'
import About from "./view/screen/About";
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Boot } from "./view/screen/Boot";
function App(){ 
    return(
      <BrowserRouter>
      
       <Link className="link" to="/">Home</Link>
          <Link className="link" to="/About">About</Link>
          <Link className="link" to="/Contact">Contact</Link>
          <Link className="link" to="/Boot">Boot</Link>

      <Routes>

         
        <Route path="/" element={<Home/>} />
       <Route path="/About" element={<About/>}/>
       <Route path="/Contact" element={<Contact/>}/>
       <Route path="/Boot" element={<Boot/>}/>
      </Routes>
      

      
      </BrowserRouter>
    
    )



}
export default App;

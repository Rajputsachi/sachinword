import './App.css';
import Navbar from './component/Navbar.js';
import TextForm from './component/TextForm';
import About from './component/About.js';
import Alert from './component/Alert.js';
import React ,{useState} from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";
function App() {
  var [mode ,Setmode]=useState('light');
  var [alert ,Setalert]=useState({
    message:null,
    type:null
  });
  const settoggle=()=>{
    if(mode==='light')
    {
      Setmode('dark');
      document.body.style.backgroundColor = "grey";
      Setalert({
        message:"Dark mode is Enable",
        type:"success"
      });
      document.title="Sachin-Dark-Mode";
    }
    else
    {
      Setmode('light');
      document.body.style.backgroundColor = "white";
     Setalert({
        message:"light mode is Enable",
        type:"success"
      });
      document.title="Sachin-Light-Mode";
    }
  }
 return (
  <>

<Router>
  
  <Navbar title="Textutiles"  mode={mode} settoggle={settoggle}/>
    <Alert alert={alert}/>
    <div className="container my-3">


    <Routes>
            <Route exact path="/About" element={<About />}></Route>
            <Route
              exact
              path="/"
              element={<TextForm heading="Enter the text for anslyzine" mode={mode}/>

              }
            ></Route>
    </Routes>


    
    </div>
    </Router>
  
  
  </> 

);
}


export default App;

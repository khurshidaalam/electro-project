import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header,Footer,Location,Homepage } from "./components";
import "./App.css";



const App =() =>{
  return(
    <>
  <Header/>
  {/* <Location/> */}
  <Homepage/>
  <Footer/>
  </>
  )
  
}

export default App;
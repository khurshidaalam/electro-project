import React from "react";
import Header from "../layout/Header";
import  Footer  from "../layout/Footer";


const Layout = props =>{
  return(
    <>
  <Header />
  <div className="zindex-11">
  {props.children}
  </div>
  <Footer />
  </>
  )
  
}

export default Layout;
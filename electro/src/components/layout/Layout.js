import React from "react";



const Layout = props =>{
  return(
    <>
  <Header/>
  {props.children}
  
  <Footer/>
  </>
  )
  
}

export default App;
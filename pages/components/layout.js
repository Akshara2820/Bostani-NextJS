import React, { useEffect, useState } from "react";
import Router, { useRouter } from 'next/router'
import styled from "styled-components";

import Header from "./header";
import Profile from "./profile";
import Navbar from "./navbar";
import About from "..";

function Layout({ children }) {
const route = useRouter();
const [showprofile, setShowProfile]= useState(false)



useEffect(() =>{
  if (route.pathname === '/'){
  setShowProfile(true)
  }
  else{
    setShowProfile(false)
  }

},[route.pathname])
console.log("O",showprofile)

const value = false

  return (
    <>
      <div>
        <Header />
      </div>
      <div className="flex ml-60 mt-60">
      
        <Left className={`${!showprofile ? "profile" : ""} `}>
        
      
      <Profile/>

          
        </Left>
        <div className="">
          <Navbar />

          {children}
        </div>
      </div>
    </>
  );
}

export default Layout;

const Left = styled.div`

&.profile{
  @media only screen and (min-width:80px) and (max-width:770px){
    display:none;
    
    
  }

}

`;
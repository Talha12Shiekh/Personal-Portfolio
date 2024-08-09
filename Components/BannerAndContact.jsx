import React, { useEffect, useState } from 'react'
import Banner from '../Components/Banner';
import ContactMe from '../Components/ContactMe';
import { useLocation } from 'react-router-dom';
import { capitalizeFirstLetter } from '../Helpers';


const BannerAndContact = ({children}) => {
    const {pathname} = useLocation();

    const [currentScreen,setcurrentScreen] = useState("")
  
    useEffect(() => {
      window.scrollTo({ top: 0, behavior: "smooth" })
      let currentPath = pathname.slice(1);
      setcurrentScreen(capitalizeFirstLetter(currentPath))
    },[pathname]);
    
  return (
    <>
        <Banner heading={currentScreen} description={currentScreen} />
        {children}
        <ContactMe/>
    </>
  )
}

export default BannerAndContact
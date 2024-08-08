import React, { useEffect, useState,lazy,Suspense } from 'react'
const Banner = lazy(() => import("../Components/Banner"));
const ContactMe = lazy(() => import("../Components/ContactMe"));
import { useLocation } from 'react-router-dom';
import Loading from "../Screens/Loading";
import { capitalizeFirstLetter } from "../Helpers";


const BannerAndContact = ({children}) => {
    const {pathname} = useLocation();

    const [currentScreen,setcurrentScreen] = useState("")
  
    useEffect(() => {
      window.scrollTo({ top: 0, behavior: "smooth" })
      let currentPath = pathname.slice(1);
      setcurrentScreen(capitalizeFirstLetter(currentPath))
    },[pathname]);
    
  return (
    <Suspense fallback={<Loading/>}>
        <Banner heading={currentScreen} description={currentScreen} />
        {children}
        <ContactMe/>
    </Suspense>
  )
}

export default BannerAndContact
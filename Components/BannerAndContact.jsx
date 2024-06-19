import React, { useEffect, useState,lazy,Suspense } from 'react'
const Banner = lazy(() => import("../Components/Banner"));
const ContactMe = lazy(() => import("../Components/ContactMe"));
import { useLocation } from 'react-router-dom';
import Loading from "../Screens/Loading";


const BannerAndContact = ({children}) => {
    const {pathname} = useLocation();

    const [currentScreen,setcurrentScreen] = useState("")
  
    useEffect(() => {
      let currentPath = pathname.slice(1);

      import("../Helpers").then(({capitalizeFirstLetter}) => {
        setcurrentScreen(capitalizeFirstLetter(currentPath))
      })
    },[pathname])
    
  return (
    <Suspense fallback={<Loading/>}>
        <Banner heading={currentScreen} description={currentScreen} />
        {children}
        <ContactMe/>
    </Suspense>
  )
}

export default BannerAndContact
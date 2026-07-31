import React, { useEffect } from 'react'

import Navbar from './components/landingPage/Navbar';

const NotFound = () => {
    
    useEffect(()=>{
   
    },[])
  return (
    <>
    <Navbar/>
    <div className="row">
        <div className="col-sm-2"></div>
        <div className="col-sm-8">
        <div className='pt-5 not-found '><h1>404</h1>
        <p className='pb-5'>Not Found</p>
        </div>
        
        </div>
        <div className='col-sm-2'></div>
    </div>
   
    </>
  )
}

export default NotFound;

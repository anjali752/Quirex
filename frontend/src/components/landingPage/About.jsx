import React from 'react'
import Navbar from './Navbar'
const About = () => {
  return (
    <>
    <Navbar/>
       <div className='container mt-5'>
        <div className='row align-items-center'>
          <div className='col-md-6 mb-5'>
            <img
              src="/home3.jpg"
              alt="Real Estate"
              className="img-fluid rounded "
              style={{ maxHeight: "550px" }}
            />
          </div>
          <div className='col-md-6 pb-5'>
            <h2 className='text-center'>About Real Estate Company</h2>
            <p>At<strong> DreamHomes Realty</strong>, we provides personalized solutions to help clients find the home of their dreams.Our experienced agents are here to guide you every step of the way.<br/> With over a decade of experience, we offer unmatched insight and reliability in real estate market.<br/>With over <strong>10 year of experience</strong> in the real estate industry, our team is committed to delivering excellence,transparency,and satisfaction.</p>
          </div>
        </div>
       </div>
     
    </>
  )
}

export default About
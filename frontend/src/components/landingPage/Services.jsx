//services
import React from "react";

import Navbar from "./Navbar";
import { useLocation } from "react-router-dom";
const Services = () => {
 const location=useLocation(); 
 
  return (
    <>
    {location?.pathname!="/" &&   <Navbar/>}
    <div  className="row py-5 bg servicesh">
      <div className="text-center ">
      <div className="tagline ">Our Services </div>
      <h2 className="section-title">Our Main Focus</h2>
    </div>
      <div className="col-sm-10 card1 mx-auto">
        <div className="row py-3">
          <div data-aos="fade-right" className="col-sm-4">
            <div className="card mx-auto shadow-lg p-4 border border-0">
              <img src="/home.png" className="img-fluid w-50 mx-auto"/>
              <h3 className="text-center py-2"><b>Buy a home</b></h3>
              <p className="text-center">Looking to buy a home? Our real estate services offer you the best way to find the perfect property. With a wide range of verified listings,expert guidance,and end-to-end support,we help you every step of the way from search to final paperwork.</p>
              <p className="text-center text-success py-3"><span className=" bg-light rounded-2 p-2">Find A Home &rarr;</span></p>

            </div>
          </div>
          <div  data-aos="zoom-in" className="col-sm-4">
            <div className="card mx-auto shadow-lg p-4 border border-0">
              <img src="/22.png" className="img-fluid w-50 mx-auto"/>
              <h3 className="text-center py-2"><b>Rent a home</b></h3>
              <p className="text-center">Finding a rental home has never been easier. With a wide selection of verified properties and expert support,our real estate team helps you rent the perfect home that fits your needs and budget.we guide you through every step from property visits to lease agreements.</p>
              <p className="text-center text-success py-3"><span className=" bg-light rounded-2 p-2">Find A Home &rarr;</span></p>

            </div>
          </div>
          <div data-aos="fade-left" className="col-sm-4 ">
            <div className="card mx-auto shadow-lg p-4 border border-0">
              <img src="/23.png" className="img-fluid w-50 mx-auto"/>
              <h3 className="text-center py-2"><b>Sell a home</b></h3>
              <p className="text-center">Selling your home is a big decision-- and we are here to make it smooth,profitable and stress-free. With our real estate expertise,we help you price your property right,attract serious buyers and handle all the paperwork with ease. Trust us to sell your home quickly and at the best possible value.</p>
              <p className="text-center text-success py-3"><span className=" bg-light rounded-2 p-2">Find A Home &rarr;</span></p>

            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Services;
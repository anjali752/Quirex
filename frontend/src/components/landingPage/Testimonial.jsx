import React from 'react'

const Testimonial = () => {
  return (
   
      <>

<div className="row py-5 background ">
  <div className="text-center ">
      <div className="tagline ">Our Testimonial</div>
      <h2 className="section-title">Clients Feedback</h2>
    </div>
     <div className="col-sm-10 mx-auto ">
        <div className="row py-3">
           <div className='col-sm-4 '>
            <div className='card border border-0 shadow-lg mx-auto rounded-3 p-3 feedcard w-76 pb-3'>
              <span className='feedtop'><img src='/testimonial1.png'/></span>
              <p className='px-3 feedtext'>Buying our first home felt overwhelming,but this team made the entire process so simple and stress-free. Their guidance and patience made all the difference. Heighly recommended!</p>
              <div className='row g-0'>
                <div className='col-4'>
                  <img src='/1.jpg_1.jpeg' className='img-fluid feedimg' />
                </div>
                <div className='col-8'>
                  <span>
                    <b>Jacob William</b><br/>
                    <p className='color1'>SELLING AGENTS</p>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className='col-sm-4 '>
            <div className='card border border-0 shadow-lg mx-auto rounded-3 p-3 feedcard w-76 pb-3'>
              <span className='feedtop'><img src='/testimonial1.png'/></span>
              <p className='px-3 feedtext'>I was looking to invest in property and wasn't sure where to start. Their expert advice and market knowledge helped me find the right place at the right price.Thankyou!</p>
              <div className='row g-0'>
                <div className='col-4'>
                  <img src='/2.jpg_1.jpeg' className='img-fluid feedimg' />
                </div>
                <div className='col-8'>
                  <span>
                    <b>Kelian Anderson</b><br/>
                    <p className='color1'>SELLING AGENTS</p>
                  </span>
                </div>
              </div>
            </div>
          </div>
        <div className='col-sm-4 '>
            <div className='card border border-0 shadow-lg mx-auto rounded-3 p-3 feedcard w-76 pb-3'>
              <span className='feedtop'><img src='/testimonial1.png'/></span>
              <p className='px-3 feedtext'>Professional, responsive, and honest-from day one to closing. I couldn't have asked for a better real estate experience. Truly grateful for the support I received.</p>
              <div className='row g-0'>
                <div className='col-4'>
                  <img src='/3.jpg_2.jpeg' className='img-fluid feedimg' />
                </div>
                <div className='col-8'>
                  <span>
                    <b>Adam Joseph</b><br/>
                    <p className='color1'>SELLING AGENTS</p>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
</div>
 
  



    </>

  )
}

export default Testimonial
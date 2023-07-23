import React from 'react'
import Layout from '../../layout/layout/layout'
import Dealer from '../../../assets/d1.jpg'

function OurDealership() {
  return (
      <Layout>
          <div className='container-fluid'>
    <h2 className='text-center'  style={{color: "red"}}> OUR DEALERSHIP</h2>
<div>
    <img className='img-fluid pt-3' src={Dealer} alt="" />
</div>

<div className='container text-center pt-5'>
<h2 style={{color: "red"}}>USED CAR DEALERSHIP IN CHICAGO, IL</h2>

    <p style={{color: "white"}} >
    We proudly serve the Chicagoland area and surrounding suburbs. We offer a large selection of pre-owned vehicles at affordable prices for everyone. We are committed to providing our customers with the best service, to get you a step closer to your vehicle that satisfies your needs. Our dealership is always ready to assist you in the car buying process!
    </p>
</div>
</div>
    </Layout>
  )
}

export default OurDealership
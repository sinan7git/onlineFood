import React from 'react'
import "./Pricing.css"
import Header from './includes/Header'
import Footer from './includes/Footer'
function Pricing() {
  return (<>
  <Header/>
    <h1 style={{marginBottom:"37px",marginTop:'30px'}} class="heading"> Our <span>Plan</span> </h1>
<div class="background">
  <div class="container">
    <div class="panel pricing-table">
      <div class="pricing-plan">
        <img src="https://s22.postimg.cc/8mv5gn7w1/paper-plane.png" alt="" class="pricing-img" />
        <h2 class="pricing-header">Basic Plan</h2>
        <ul class="pricing-features">
          <li class="pricing-features-item">10 day</li>
          <li class="pricing-features-item">Food and Drinks</li>
          <li class="pricing-features-item">Safety Guide</li>
          <li class="pricing-features-item">Insurance</li>
          <li class="pricing-features-item">Luxury Hotel</li>
        </ul>
        <span class="pricing-price">$100</span>
        <a href="#/" class="pricing-button is-featured">Choose Plan</a>
      </div>
      
      <div class="pricing-plan">
        <img src="https://s28.postimg.cc/ju5bnc3x9/plane.png" alt="" class="pricing-img" />
        <h2 class="pricing-header">Medium Plan</h2>
        <ul class="pricing-features">
          <li class="pricing-features-item">20 Days</li>
          <li class="pricing-features-item">Food and Drinks</li>
          <li class="pricing-features-item">Safety Guide</li>
          <li class="pricing-features-item">Insurance</li>
          <li class="pricing-features-item">Luxury Hotel</li>
        </ul>
        <span class="pricing-price">$150</span>
        <a href="#/" class="pricing-button is-featured">Choose Plan</a>
      </div>
      
      <div class="pricing-plan">
        <img src="https://s21.postimg.cc/tpm0cge4n/space-ship.png" alt="" class="pricing-img" />
        <h2 class="pricing-header">Premium Plan</h2>
        <ul class="pricing-features">
        <li class="pricing-features-item">30 Days</li>
        <li class="pricing-features-item">Food and Drinks</li>
        <li class="pricing-features-item">Safety Guide</li>
        <li class="pricing-features-item">Insurance</li>
        <li class="pricing-features-item">Luxury Hotel</li>
        </ul>
        <span class="pricing-price">$400</span>
        <a href="#/" class="pricing-button is-featured">Choose Plan</a>
      </div>
      
    </div>
  </div>
</div>
</>
  )
}

export default Pricing
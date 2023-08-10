import React from 'react'
import "./Contact.css";
import Header from './includes/Header';
function Contact() {
  return (
    <>
    <Header/>
      <h1 style={{marginBottom:"37px"}} class="heading"> Contact <span>Us</span> </h1>
    <div class="container">
    <div class="content">
      <div class="left-side">
        <div class="address details">
          <i class="fas fa-map-marker-alt"></i>
          <div class="topic">Address</div>
          <div class="text-one">Edathanattukara, 678601</div>
          <div class="text-two">Palakkad </div>
        </div>
        <div class="phone details">
          <i class="fas fa-phone-alt"></i>
          <div class="topic">Phone</div>
          <div class="text-one">+91 0000000000</div>
          <div class="text-two">+91 0000000000</div>
        </div>
        <div class="email details">
          <i class="fas fa-envelope"></i>
          <div class="topic">Email</div>
          <div class="text-one">sinanaslam2003@gmail.com</div>
          <div class="text-two">sinanaslam7777@gmail.com</div>
        </div>
      </div>
      <div class="right-side">
        <div class="topic-text">Send us a message</div>
        <p>If you have any Complaints from me or my Staff, you can send me message from here. It's my pleasure to help you.</p>
      <form action="#">
        <div class="input-box">
          <input type="text" placeholder="Enter your name" />
        </div>
        <div class="input-box">
          <input type="text" placeholder="Enter your email" />
        </div>
        <div class="input-box message-box">
        <textarea  rows="5" cols="60" placeholder='Enter Your Message'>
            
        </textarea>
        </div>
        <div class="button">
          <input type="button" value="Send Now"  />
        </div>
      </form>
    </div>
    </div>
  </div>
  </>
  )
}

export default Contact
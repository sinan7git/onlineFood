import React from 'react'
import './Review.css'
import img1 from "./assests/jonathan.jpg";import img2 from "./assests/image-kira.jpg";import img3 from "./assests/image-jeanette.jpg";import img4 from "./assests/image-daniel.jpg";import img5 from "./assests/image-patrick.jpg";
import Header from './includes/Header';
function Review() {
  return (
    <>
    <Header/>
    <h1 style={{marginBottom:'-30px',marginTop:"27px"}} class="heading"> client's <span>review</span> </h1>
    <div class="outerdiv">
    <div class="innerdiv">
      <div class="div1 eachdiv">
        <div class="userdetails">
          <div class="imgbox">
            <img src={img4} alt="" />
          </div>
          <div class="detbox">
            <p class="name">Daniel Clifford</p>
            <p class="designation">Youtube vlogger</p>
          </div>
        </div>
        <div class="review">
          <h4>I recently had the pleasure of dining at Tasty Zone, a renowned restaurant known for its delectable cuisine and inviting ambiance. From the moment I stepped foot into the restaurant, I was greeted with warm hospitality and a cozy atmosphere that set the stage for a memorable dining experience.</h4>
        <p></p>
        </div>
      </div>
      <div class="div2 eachdiv">
        <div class="userdetails">
          <div class="imgbox">
            <img src={img1} alt="" />
          </div>
          <div class="detbox">
            <p class="name">Jonathan Walters</p>
            <p class="designation">School Teacher</p>
          </div>
        </div>
        <div class="review">
          <h4>The ambiance of Tasty Zone further added to the overall experience. The restaurant featured tasteful decor, creating a pleasant and inviting atmosphere. The soft lighting, comfortable seating, and soothing background music contributed to a relaxed and enjoyable dining environment.</h4>
        <p></p>
        </div>
      </div>
      <div class="div3 eachdiv">
        <div class="userdetails">
          <div class="imgbox">
            <img src={img2} alt="" />
          </div>
          <div class="detbox">
            <p class="name dark">Kira Whittle</p>
            <p class="designation dark">Ex Milter</p>
          </div>
        </div>
        <div class="review dark">
          <h4>Tasty Zone is an exceptional hotel that truly exceeded my expectations. From the moment I stepped into the hotel, I was greeted with warmth and hospitality. The staff went above and beyond to ensure that my stay was comfortable and memorable. Furthermore, the location of Tasty Zone was ideal, offering easy access to popular attractions and vibrant city life. Whether I wanted to explore cultural landmarks or indulge in shopping and entertainment, everything was conveniently within reach.highly recommend Tasty Zone to anyone seeking a culinary adventure that combines exceptional flavors, impeccable service, and a welcoming ambiance. Whether it's a special occasion or a casual dining experience. Tasty Zone is a place where you can indulge in a gastronomic journey that will leave you wanting more</h4>
          <p></p>
        </div>
      </div>
      <div class="div4 eachdiv">
        <div class="userdetails">
          <div class="imgbox">
            <img src={img3} alt="" />
          </div>
          <div class="detbox">
            <p class="name dark">Jeanette Harmon</p>
            <p class="designation dark">Verified Graduate</p>
          </div>
        </div>
        <div class="review dark">
          <h4>The hotel's commitment to providing unparalleled service, luxurious accommodations, and remarkable dining options truly set it apart.</h4>
        <p></p>
        </div>
      </div>
      <div class="div5 eachdiv">
        <div class="userdetails">
          <div class="imgbox">
            <img src={img5} alt="" />
          </div>
          <div class="detbox">
            <p class="name">Patrick Abrams</p>
            <p class="designation">Verified Graduate</p>
          </div>
        </div>
        <div class="review">
          <h4>The hotel's amenities were also top-notch. The fitness center was well-equipped, allowing me to maintain my workout routine during my stay. The spa services provided a much-needed relaxation and rejuvenation. The staff at the hotel spa were skilled and attentive, ensuring a truly blissful experience.The rooms at Tasty Zone were spacious and elegantly designed, offering a perfect blend of modern amenities and cozy ambiance. The attention to detail was evident in every aspect, from the comfortable beds to the well-appointed bathrooms. I particularly enjoyed the breathtaking views from my room, which added an extra touch of luxury.</h4>
        <p></p>
        </div>
      </div>
    </div>
  </div>
  </>
  )
}

export default Review
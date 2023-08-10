import React from 'react'
import './FoodList.css';
import { Link } from 'react-router-dom';
import img1 from "./assests/alfahm1.jpg";import img2 from "./assests/burger 2.jpeg";import img3 from "./assests/fry 3.jpg";import img4 from "./assests/mutton.JPG";import img5 from "./assests/noodles 1.jpeg";import img6 from "./assests/pizza 3.jpg"
function FoodList() {
  return (
    <section class="packages" id="packages">

    <h1 class="heading"> our <span>Foods</span> </h1>
    <div class="box-container">
        <div class="box" data-aos="fade-up">
            <div class="image">
                <img src={img1} alt="" />
                <h3> <i class="fas fa-utensils"></i> Alfaham </h3>
            </div>
            <div class="content">
                <div class="price"> 190.99 <span>350.99</span> </div>
                <p>Arabian barbecued chicken usually grilled over coal or in oven.</p>
               <Link to='/allfood/'> <a class="btn"> View More</a></Link>
            </div>
        </div>

        <div class="box" data-aos="fade-up">
            <div class="image">
                <img src={img2} alt="" />
                <h3> <i class="fas fa-utensils"></i> Burger </h3>
            </div>
            <div class="content">
                <div class="price"> 390.99 <span>350.99</span> </div>
                <p>a flat round mass of minced meat or vegetables, which is fried and often eaten </p>
                <Link to='/allfood/'> <a class="btn"> View More</a></Link>
            </div>
        </div>

        <div class="box" data-aos="fade-up">
            <div class="image">
                <img src={img3} alt="" /> 
                <h3> <i class="fas fa-utensils"></i> Fried </h3>
            </div>
            <div class="content">
                <div class="price"> 200.99 <span>350.99</span> </div>
                <p>seasoned flour or batter and pan-fried, deep fried, pressure fried, or air fried</p>
                <Link to='/allfood/'> <a class="btn"> View More</a></Link>
            </div>
        </div>

        <div class="box" data-aos="fade-up">
            <div class="image">
                <img src={img4} alt="" /> 
                <h3> <i class="fas fa-utensils"></i> Biryani </h3>
            </div>
            <div class="content">
                <div class="price"> 370.99 <span>350.99</span> </div>
                <p>a spiced mix of meat and rice, traditionally cooked over an open fire in a leather pot</p>
                <Link to='/allfood/'> <a class="btn"> View More</a></Link>
            </div>
        </div>

        <div class="box" data-aos="fade-up">
            <div class="image">
                <img src={img5} alt="" /> 
                <h3> <i class="fas fa-utensils"></i> Noodles </h3>
            </div>
            <div class="content">
                <div class="price"> 350.99 <span>350.99</span> </div>
                <p>a cooked egg-and-flour paste prominent in European and Asian cuisine,</p>
                <Link to='/allfood/'> <a class="btn"> View More</a></Link>
            </div>
        </div>

        <div class="box" data-aos="fade-up">
            <div class="image">
                <img src={img6} alt="" />
                <h3> <i class="fas fa-utensils"></i> Pizza </h3>
            </div>
            <div class="content">
                <div class="price"> 300.99 <span>350.99</span> </div>
                <p>disk of bread dough topped with some combination of olive oil, oregano, tomato</p>
                <Link to='/allfood/'> <a class="btn"> View More</a></Link>
            </div>
        </div>

    </div>

</section>

  )
}

export default FoodList

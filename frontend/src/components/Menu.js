import React from 'react'
import Header from './includes/Header'
import "./Menu.css";
import sideimg from "./menupic.jpg"
import FoodList from './FoodList';
import Pricing from './Pricing';
import Review from './Review';
import Contact from './Contact';
import Blog from './Blog';
import Footer from './includes/Footer';
function Menu() {
  return (
    <>
    <Header/>
    <section class="home" id="home">
    <div class="image" data-aos="fade-down">
        <img src={sideimg} alt="" />
    </div>

    <div class="content" data-aos="fade-up">
        <h3>Most Tasty Biryani For You</h3>
        <p>Fresh herbs, saffron, and basmati rice give it a sweet-floral aroma that hits the nose before you taste it. Whole garam masala, fried onions, and marinated meat provide warmth and subtle heat to the dish. Overall, it tastes like a savory, spiced rice pilaf.</p>
        <a href="#" class="btn">explore now</a>
    </div>

</section>
<FoodList/>
<Pricing />
<Review/>
<Contact/>
<Blog/>
<Footer/>
    </>
  )
}

export default Menu
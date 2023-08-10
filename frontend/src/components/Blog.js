import React from 'react'
import './Blog.css'
import img1 from './assests/mutton.JPG';import img2 from './assests/pizza 3.jpg';import img3 from './assests/burger 2.jpeg';
import Header from './includes/Header';
function Blog() {
  return (
    <>
    <Header/>
    <section class="blogs" id="blogs">

    <h1 style={{marginTop:'25px'}} class="heading"> our <span>blogs</span> </h1>

    <div class="box-container">

        <div class="box" data-aos="fade-up">
            <div class="image">
                <img src={img1} alt="" />
            </div>
            <div class="content">
                <h3>What is bombay and hyderabadi biryani?</h3>
                <a href="https://www.quora.com/What-is-the-difference-between-Bombay-Biryani-and-simple-biryani" class="btn">read more</a>
                <div class="icons">
                    <a href="#" style={{textDecoration:'none'}}> <i class="fas fa-calendar"></i> 1st jan, 2021 </a>
                </div>
            </div>
        </div>

        <div class="box" data-aos="fade-up">
            <div class="image">
                <img src={img2} alt="" />
            </div>
            <div class="content">
                <h3>How many types of burger are there?</h3>
                <a href="https://jesspryles.com/which-type-of-burger-are-you/#:~:text=There%20are%20two%20fundamental%20varieties,getting%20the%20right%20burger%20recommendation." class="btn">read more</a>
                <div class="icons">
                <a href="#" style={{textDecoration:'none'}}> <i class="fas fa-calendar"></i> 1st jan, 2021 </a>
                </div>
            </div>
        </div>

        <div class="box" data-aos="fade-up">
            <div class="image">
                <img src={img3} alt="" />
            </div>
            <div class="content">
                <h3>Did you know some facts about pizza?</h3>
                <a href="https://denirospizza.com/36-amazing-facts-you-didnt-know-about-pizza/" class="btn">read more</a>
                <div class="icons">
                <a href="#" style={{textDecoration:'none'}}> <i class="fas fa-calendar"></i> 1st jan, 2021 </a>
                </div>
            </div>
        </div>

    </div>

</section>
</>
  )
}

export default Blog
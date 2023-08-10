import React from 'react'
import "./Footer.css"
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <section class="footer">

    <div class="box-container">

        <div class="box" data-aos="fade-up">
            <h3>our branches</h3>
            <Link to="#" style={{textDecoration:"none"}}> <i class="fas fa-map-marker-alt"></i> india </Link>
            <Link to="#" style={{textDecoration:"none"}}> <i class="fas fa-map-marker-alt"></i> russia </Link>
            <Link to="#" style={{textDecoration:"none"}}> <i class="fas fa-map-marker-alt"></i> japan </Link>
            <Link to="#" style={{textDecoration:"none"}}> <i class="fas fa-map-marker-alt"></i> france </Link>
            <Link to="#" style={{textDecoration:"none"}}> <i class="fas fa-map-marker-alt"></i> canada </Link>
        </div>

        <div class="box" data-aos="fade-up">
            <h3>quick links</h3>
            <Link to="/allfood/" style={{textDecoration:"none"}}> <i class="fas fa-chevron-right"></i> home </Link>
            <Link to="/pricing/" style={{textDecoration:"none"}}> <i class="fas fa-chevron-right"></i> pricing </Link>
            <Link to="/review/" style={{textDecoration:"none"}}> <i class="fas fa-chevron-right"></i> review </Link>
            <Link to="/contact/" style={{textDecoration:"none"}}> <i class="fas fa-chevron-right"></i> contact </Link>
            <Link to="/blog/" style={{textDecoration:"none"}}> <i class="fas fa-chevron-right"></i> blogs </Link>
        </div>

        <div class="box" data-aos="fade-up">
            <h3>contact info</h3>
            <Link to="#" style={{textDecoration:"none"}}> <i class="fas fa-phone"></i> +123-456-7890 </Link>
            <Link to="#" style={{textDecoration:"none"}}> <i class="fas fa-phone"></i> +111-222-3333 </Link>
            <Link to="#" style={{textDecoration:"none"}}> <i class="fas fa-envelop"></i> sinanaslam2003@gmail.com </Link>
            <Link to="#" style={{textDecoration:"none"}}> <i class="fas fa-map-marker-alt"></i> Kerala, India - 678601 </Link>
        </div>

        <div class="box" data-aos="fade-up">
            <h3>follow us</h3>
            <Link to="#" style={{textDecoration:"none"}}> <i class="fab fa-facebook-f"></i> Facebook </Link>
            <Link to="#" style={{textDecoration:"none"}}> <i class="fab fa-twitter"></i> Twitter </Link>
            <Link to="https://instagram.com/xiinaaan?igshid=OGQ5ZDc2ODk2ZA==" style={{textDecoration:"none"}}> <i class="fab fa-instagram"></i> Instagram </Link>
            <Link to="https://www.linkedin.com/in/sinanaslam" style={{textDecoration:"none"}}> <i class="fab fa-linkedin"></i> Linkedin </Link>
            <Link to="https://github.com/sinan7git" style={{textDecoration:"none"}}> <i class="fab fa-github"></i> Github </Link>
        </div>

    </div>

    <div class="credit"> <span></span> all rights reserved </div>

</section>
  )
}

export default Footer
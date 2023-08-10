import Swiper from 'swiper';

function Script({ loginFormRef }) {
    let navbar = document.querySelector('.navbar');
  
    document.querySelector('#menu-btn').onclick = () => {
      navbar.classList.toggle('active');
      loginFormRef.current.classList.remove('active');
      searchForm.classList.remove('active');
    };
  
    let searchForm = document.querySelector('.search-form');
  
    document.querySelector('#search-btn').onclick = () => {
      searchForm.classList.toggle('active');
      navbar.classList.remove('active');
      loginFormRef.current.classList.remove('active');
    };
  
    window.onscroll = () => {
      navbar.classList.remove('active');
      loginFormRef.current.classList.remove('active');
      searchForm.classList.remove('active');
    };
  
    var swiper = new Swiper(".review-slider", {
      loop: true,
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 5500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
      },
    });
  
    return null;
  }
  
  export default Script;
  
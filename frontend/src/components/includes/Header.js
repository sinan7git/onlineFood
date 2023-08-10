import React, { useContext, useState } from 'react';
import './Header.css';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { UserContext } from '../../App';

function Header() {
  const navigate = useNavigate();
  const { updateUserData } = useContext(UserContext);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchParams] = useSearchParams();

  const handleLogout = () => {
    updateUserData({ type: 'LOGOUT' });
    navigate('/auth/');
  };

  const handleMenuButtonClick = () => {
    const navbar = document.querySelector('.navbar');
    const loginForm = document.querySelector('.login-form');
    const searchForm = document.querySelector('.search-form');

    navbar.classList.toggle('active');
    loginForm?.classList.remove('active');
    searchForm?.classList.remove('active');
  };

  const handleSearchButtonClick = () => {
    const searchForm = document.querySelector('.search-form');
    const navbar = document.querySelector('.navbar');
    const loginForm = document.querySelector('.login-form');

    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    loginForm?.classList.remove('active');
  };

  const handleWindowScroll = () => {
    const navbar = document.querySelector('.navbar');
    const loginForm = document.querySelector('.login-form');
    const searchForm = document.querySelector('.search-form');

    navbar.classList.remove('active');
    loginForm?.classList.remove('active');
    searchForm?.classList.remove('active');
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleWindowScroll);

    return () => {
      window.removeEventListener('scroll', handleWindowScroll);
    };
  }, []);

  React.useEffect(() => {
    const query = searchParams.get('q') || '';
    setSearchQuery(query);
  }, [searchParams]);

  const handleSearchFormSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim() !== '') {
      navigate(`/allfood/?q=${searchQuery}`);
    }
  };

  return (
    <header className="header">
      <Link to="/" style={{ textDecoration: 'none' }}>
        <a style={{ textDecoration: 'none' }} href="#" className="logo">
          <i className="fas fa-utensils"></i> Tasty Zone
        </a>
      </Link>

      <form onSubmit={handleSearchFormSubmit} className="search-form">
        <input
          type="search"
          name="search"
          placeholder="search here..."
          id="searchBox"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="fas fa-search" id="search-btn"></button>
        <label htmlFor="searchBox" className="fas fa-search"></label>
      </form>

      <div className="icons">
        <div className="fas fa-search" id="search-btn" onClick={handleSearchButtonClick}></div>
        <Link to="/cart/">
          <div className="fas fa-shop" id="theme-btn"></div>
        </Link>
        <Link to="/auth/">
          <div className="fas fa-user" id="login-btn"></div>
        </Link>
        <div onClick={handleLogout} className="fas fa-sign-out-alt" id="logout-btn"></div>
        <div className="fas fa-bars" id="menu-btn" onClick={handleMenuButtonClick}></div>
      </div>

      <nav className="navbar">
        <Link to="/allfood/" style={{ textDecoration: 'none' }}>
          Items
        </Link>
        <Link to="/pricing/" style={{ textDecoration: 'none' }}>
          Pricing
        </Link>
        <Link to="/review/" style={{ textDecoration: 'none' }}>
          Review
        </Link>
        <Link to="/contact/" style={{ textDecoration: 'none' }}>
          Contact
        </Link>
        <Link to="/blog/" style={{ textDecoration: 'none' }}>
          Blogs
        </Link>
      </nav>
    </header>
  );
}

export default Header;



// import React, { useContext, useState } from 'react';
// import './Header.css';
// import { Link, useNavigate } from 'react-router-dom';
// import './Script';
// import { UserContext } from '../../App';
// function Header() {
//   const navigate = useNavigate();
//   const { updateUserData } = useContext(UserContext);

//   const handleLogout = () => {
//     updateUserData({ type: 'LOGOUT' });
//     navigate('/auth/');
//   }

//   const [searchQuery, setSearchQuery] = useState('');
  
//   const handleMenuButtonClick = () => {
//     const navbar = document.querySelector('.navbar');
//     const loginForm = document.querySelector('.login-form');
//     const searchForm = document.querySelector('.search-form');
    
//     navbar.classList.toggle('active');
//     loginForm?.classList.remove('active');
//     searchForm?.classList.remove('active');
//   };

//   const handleSearchButtonClick = () => {
//     const searchForm = document.querySelector('.search-form');
//     const navbar = document.querySelector('.navbar');
//     const loginForm = document.querySelector('.login-form');
    
//     searchForm.classList.toggle('active');
//     navbar.classList.remove('active');
//     loginForm?.classList.remove('active');
//   };

//   const handleWindowScroll = () => {
//     const navbar = document.querySelector('.navbar');
//     const loginForm = document.querySelector('.login-form');
//     const searchForm = document.querySelector('.search-form');
    
//     navbar.classList.remove('active');
//     loginForm?.classList.remove('active');
//     searchForm?.classList.remove('active');
//   };

//   React.useEffect(() => {
//     window.addEventListener('scroll', handleWindowScroll);

//     return () => {
//       window.removeEventListener('scroll', handleWindowScroll);
//     };
//   }, []);

//   const handleSearchFormSubmit = (e) => {
//     e.preventDefault();
//     if (searchQuery.trim() !== '') {
//       navigate(`/allfood/?q=${searchQuery}`);
//     }
//   };

//   return (
//     <>
//       <header className="header">
//        <Link  to='/' style={{ textDecoration: 'none' }}> <a style={{ textDecoration: 'none' }} href="#" className="logo">
//           <i className="fas fa-utensils"></i> Tasty Zone
//         </a></Link>

//         <form onSubmit={handleSearchFormSubmit} className="search-form">
//           <input
//             type="search"
//             name="search"
//             placeholder="search here..."
//             id="searchBox"
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//           />
//           <button type="submit" className="fas fa-search" id="search-btn"></button>
//           <label htmlFor="searchBox" className="fas fa-search"></label>
//         </form>

//         <div className="icons">
//           <div className="fas fa-search" id="search-btn" onClick={handleSearchButtonClick}></div>
//           <Link to="/cart/"> <div className="fas fa-shop" id="theme-btn"></div></Link>  
//           <Link to='/auth/'><div className="fas fa-user" id="login-btn"></div></Link>
//           <div onClick={() => handleLogout()} className="fas fa-sign-out-alt" id="logout-btn"></div>
//           <div className="fas fa-bars" id="menu-btn" onClick={handleMenuButtonClick}></div>
//         </div>

//         <nav className="navbar">
//           <Link to="/allfood/" style={{textDecoration:"none"}}>Items</Link>
//           <Link to="/pricing/" style={{textDecoration:"none"}}>Pricing</Link>
//           <Link to="/review/" style={{textDecoration:"none"}}>Review</Link>
//           <Link to="/contact/" style={{textDecoration:"none"}}>Contact</Link>
//           <Link to="/blog/" style={{textDecoration:"none"}}>Blogs</Link>
//         </nav>
//       </header>
//     </>
//   );
// }

// export default Header;
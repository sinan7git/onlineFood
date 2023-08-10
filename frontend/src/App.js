import React, { useEffect, useState } from "react";
import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Menu from "./components/Menu";
import FoodList from "./components/FoodList";
import AllItems from "./components/AllItems";
import Pricing from "./components/Pricing";
import Review from "./components/Review";
import Contact from "./components/Contact";
import Blog from "./components/Blog";
import Footer from "./components/includes/Footer";
import Order from "./components/Order";
import Auth from "./components/Auth";
import Login from "./components/Login";
import SingleProducts from "./components/SingleProducts";
import PrivateRoute from './components/PrivateRoute';

export const UserContext = React.createContext();
function App() {
  const [userData, setUserData] = useState({});
  const updateUserData = (action) => {
    switch (action.type) {
      case 'LOGOUT':
        setUserData(null);
        localStorage.clear();
        break;
      case 'LOGIN':
        setUserData(action.payload);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    setUserData(JSON.parse(localStorage.getItem("user_data")));
  }, []);

  return (
      <UserContext.Provider value={{ userData, updateUserData }}>
        <Router>
        <Routes>
          <Route path="/" element={<Menu />} />
          <Route path="/Foodi/" element={<FoodList />} />
          
          <Route path="/pricing/" element={<Pricing />} />
          <Route path="/review/" element={<Review />} />
          <Route path="/contact/" element={<Contact />} />
          <Route path="/blog/" element={<Blog />} />
          <Route path="/footer/" element={<Footer />} />
          <Route path="/auth/" element={<Auth />} />
          <Route path="/login/" element={<Login />} />
          <Route path="/food/:id" element={<SingleProducts />} />
          <Route path="/cart/" element={<PrivateRoute />} >
            <Route path="/cart/" element={<Order />} /> 
          </Route>
          <Route path="/allfood/" element={<PrivateRoute />} >
            <Route path="/allfood/" element={<AllItems />} /> 
          </Route>
        </Routes>
        </Router>
      </UserContext.Provider>
  );
}

export default App;

import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Header from "./includes/Header";
import { UserContext } from "../App";
import { Modal, Button } from "react-bootstrap";

function Order() {
  const [cart, setCart] = useState([]);
  const { userData } = useContext(UserContext);
  const [showRemoveModal, setShowRemoveModal] = useState(false);
  const [showAddedToCartModal, setShowAddedToCartModal] = useState(false);
  const CartApi = "http://localhost:8000/api/v1/food/cart/";
  const headers = {
    Authorization: userData ? `Bearer ${userData.access}` : "",
  };

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        if (userData && userData.access) {
          const response = await axios.get(CartApi, { headers });
          setCart(response.data.data);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchCartItems();
  }, []); // Empty dependency array to run useEffect only once

  const handleDeleteCartItem = (itemId) => {
    axios
      .post(
        `http://localhost:8000/api/v1/food/delete_cart/${itemId}/`,
        {},
        { headers }
      )
      .then((response) => {
        setShowRemoveModal(true);
        setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const closeModal = () => {
    setShowRemoveModal(false);
    setShowAddedToCartModal(false);
  };

  return (
    <>
      <Header />
      <section
        className="h-100"
        style={{ backgroundColor: "#eee", marginTop: "79px" }}
      >
        <div className="container h-100 py-5">
          <div  className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-10" >
              <div  className="d-flex justify-content-between align-items-center mb-4">
                <h3 className="fw-normal mb-0 text-black">Food Cart</h3>
                <div></div>
              </div>
              {cart.map((item) => (
                <div  className="card rounded-3 mb-4" key={item.id}>
                  <div  className="card-body p-4">
                    <div style={{backgroundColor:'blueviolet'}} className="row d-flex justify-content-between align-items-center">
                      <div className="col-md-2 col-lg-2 col-xl-2">
                        <img
                          src={item.image}
                          className="img-fluid rounded-3"
                          alt="Cotton T-shirt"
                        />
                      </div>
                      <div className="col-md-3 col-lg-3 col-xl-3">
                        <p
                          style={{ color: "black" }}
                          className="lead fw-normal mb-2"
                        >
                          {item.name}
                        </p>
                      </div>
                      <div className="col-md-3 col-lg-3 col-xl-2 d-flex"></div>
                      <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                        <h5 colo className="mb-0">{item.price}</h5>
                      </div>
                      <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                        <Link>
                          <div
                            className="fas fa-trash"
                            id="menu-btn"
                            onClick={() => handleDeleteCartItem(item.id)}
                          ></div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              <div className="card">
                <div className="card-body">
                  <button
                    type="button"
                    className="btn btn-warning btn-block btn-lg"
                  >
                    Proceed to Pay
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Modal show={showRemoveModal} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title style={{ color: "red" }}>Removed!</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ color: "black" }}>Item Removed From cart!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Order;

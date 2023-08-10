import React, { useEffect, useState } from "react";
import "./AllItems.css";
import Header from "./includes/Header";
import { Modal, Button } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import useAxios from "./useAxios"; // Import the custom hook

function AllItems() {
  const [products, setProducts] = useState([]);
  const { id } = useParams();
  const [showModal, setShowModal] = useState(false);
  const axiosInstance = useAxios(); // Use the custom hook

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const response = await axiosInstance.get('/api/v1/food/');
        setProducts(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchFavorites();
  }, [axiosInstance]);

  const handleAddToCart = async (id) => {
    try {
      await axiosInstance.post(`/api/v1/food/add_cart/${id}/`);
      setShowModal(true);
    } catch (error) {
      console.error(error);
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const renderProducts = () => {
    return products.map((food) => (
      <div className="box" data-aos="fade-up" key={food.id}>
        <Link to={`/food/${food.id}`}>
          <div className="image">
            <img src={food.image} alt="" />
            <h3>
              <i className="fas fa-utensils"></i>
              {food.name}
            </h3>
          </div>
        </Link>
        <div className="content">
          <div className="price">
            {food.price}
            <span> 350.99</span>{" "}
          </div>
          <p>{food.name}</p>
          <Link>
            <a
              href="#"
              name="add_to_cart"
              className="btn"
              onClick={() => handleAddToCart(food.id)}
            >
              Order now
            </a>
          </Link>
        </div>
      </div>
    ));
  };

  return (
    <>
      <Header />
      <section className="packages" id="packages">
        <h1 className="heading">
          {" "}
          .. <span> ..</span>{" "}
        </h1>
        <div className="box-container">{renderProducts()}</div>
      </section>
      <Modal show={showModal} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title style={{ color: "green" }}>Success!</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ color: "black" }}>Item added to cart!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AllItems;

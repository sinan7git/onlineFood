import React, { useEffect, useState, useContext } from 'react';
import './Single.css';
import { useParams } from 'react-router';
import axios from 'axios';
import { UserContext } from "../App";
import { Modal, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
function SingleProduct() {
    const { userData } = useContext(UserContext);
    const [showModal, setShowModal] = useState(false);
    const [detail,setDetail] = useState({
        name: "",
        price: "",
        description: "",
        id: "",
        image: "",
    })
    const { id } = useParams();

const headers = {
        Authorization: `Bearer ${userData?.access}`,
      };

    const getSingleBook = async () => {
        try {
            const response = await axios.get(
                `http://localhost:8000/api/v1/food/view/${id}`
            );
            setDetail(response.data.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() =>{
        getSingleBook();
    }, [id]);

    const handleAddToCart = (id) => {
        axios
          .post(
            `http://localhost:8000/api/v1/food/add_cart/${id}/`,
            {},
            { headers }
          )
          .then((response) => {
            setShowModal(true);
          })
          .catch((error) => {
            console.error(error);
          });
      };
    
      const closeModal = () => {
        setShowModal(false);
      };
  return (
  <>
    <div className="container" style={{marginTop:'45px'}}>
      <div id="demo" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="card">
              <div className="row">
                <div className="col-md-6 text-center align-self-center">
                  <img className="img-fluid" style={{width:'90%'}} src={detail.image} alt="Product Image" />
                </div>
                <div className="col-md-6 info">
                  <div className="row title">
                    <div className="col">
                      <h2 style={{marginBottom:'20px'}}>{detail.name}</h2>
                    </div>
                    <div className="col text-right">
                      <a href="#"><i className="fa fa-heart-o"></i></a>
                    </div>
                  </div>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star-half-full"></span>
                  <span id="reviews">1590 Reviews</span>
                  <div className="row price">
                    <label className="radio">
                      <input type="radio" name="size1" value="small" checked />
                      <span>
                        <div className="row">₹ {detail.price}</div>
                      </span>
                    </label>
                    <label className="radio">
                      <input type="radio" name="size1" value="large" />
                    </label>
                  </div>
                </div>
              </div>
              <div className="row lower">
                <div className="col text-right align-self-center">
                  <button style={{marginRight:'200px'}} onClick={() => handleAddToCart(detail.id)} className="btn">Add to cart</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Modal show={showModal} onHide={closeModal}>
    <Modal.Header closeButton>
      <Modal.Title style={{ color: "red" }}>Success!</Modal.Title>
    </Modal.Header>
    <Modal.Body style={{ color: "black" }}>Item added to cart!</Modal.Body>
    <Modal.Footer>
    <Link to='/cart/'><Button style={{marginRight:'150px'}} variant="secondary">
        Show Cart
      </Button></Link>
      <Button variant="secondary" onClick={closeModal}>
        Close
      </Button>
    </Modal.Footer>
  </Modal>
  </>
  );
}

export default SingleProduct;

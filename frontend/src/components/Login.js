import axios from 'axios';
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router';
import { UserContext } from '../App';
function Login() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();
    const { updateUserData } = useContext(UserContext);
  
    const handleSubmit = (event) => {
      setErrorMessage("");
      event.preventDefault();
  
      axios
        .post("http://localhost:8000/api/v1/auth/token/", {
          username,
          password,
        })
        .then((response) => {
          console.log(response.data);
          let data = response.data;
          localStorage.setItem("user_data", JSON.stringify(data));
          updateUserData({ type: 'LOGIN', payload: data });
          navigate("/");
        })
        .catch((error) => {
          if (error.response.status === 401) {
            setErrorMessage(error.response.data.detail);
          }
        });
    };
  return (
    <div className="secti">
      <div className="contai">
        <div className="row full-height justify-content-center">
          <div className="col-12 text-center align-self-center py-5">
            <div className="section pb-5 pt-5 pt-sm-2 text-center">
              <h6 className="mb-0 pb-3">
                <span>Log In </span>
                <span>Sign Up</span>
              </h6>
              <div className="card-3d-wrap mx-auto">
                <div className="card-3d-wrapper">
                  <div className="card-front">
                    <div className="center-wrap">
                      <div className="section text-center">
                        <h4
                          style={{ color: "whitesmoke" }}
                          className="mb-4 pb-3"
                        >
                          Log In
                        </h4>
                        <form action="" method="post" onSubmit={handleSubmit}>
                          <div className="form-group">
                            <input
                              type="email"
                              name="username"
                              className="form-style"
                              placeholder="Your Email"
                              autoComplete="off"
                              value={username}
                              onChange={(e) => setUsername(e.target.value)}
                              required
                            />
                            <i className="input-icon uil uil-at"></i>
                          </div>
                          <div className="form-group mt-2">
                            <input
                              type="password"
                              name="password"
                              className="form-style"
                              placeholder="Your Password"
                              id="password"
                              autoComplete="off"
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                            />
                            <i className="input-icon uil uil-lock-alt"></i>
                          </div>
                          <button type="submit" className="btn mt-4" value="login">
                            Login
                          </button>
                        </form>
                        <p className="mb-0 mt-4 text-center">
                          <a href="#0" className="link">
                            Forgot your password?
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                  </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
  )
}

export default Login
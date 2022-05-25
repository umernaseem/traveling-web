import React from "react";
import './SignUp.css';
import { Link } from "react-router-dom";
import Footer from '../Footer';


const SignUp = () => {
  return (
    <div>
      <br/>
      <br/>
      <div className="container shadow my-5">
        <div className="row">
          
          
            {/* <h1 className="display-4 fw-bolder">Welcome Back</h1> */}
            {/* <p className="lead text-center">Enter Your Credentials To Login</p>
            <h5 className="mb-4">OR</h5> */}
            {/* <Link
              to="/Signin"
              className="btn btn-outline-light
                 rounded-pill pb-2 w-50"
            >
              SignIn
            </Link> */}
          
          <div className="col-md-6 p-5 border-end">
            <h1 className="display-6 fw-bolder mb-5">Sign Up</h1>
            <form>
            <div class="mb-3">
                <label for="name" class="form-label">
                  Username
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="name"
                />
              </div>
              <div class="mb-3">
                <label for="name" class="form-label">
                  Phone Number
                </label>
                <input
                  type="number"
                  class="form-control"
                  id="name"
                />
              </div>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
                <div id="emailHelp" class="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">
                  Password
                </label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <div class="mb-3 form-check">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="exampleCheck1"
                />
                <label class="form-check-label" for="exampleCheck1">
                  Remember Me
                </label>
              </div>
              <button type="submit" class="btn btn-dark mt-4 w-100 rounded-pill">
                Sign Up
              </button>
              <br/>
              <br/>
           
            
            </form>

            
          </div>
          <div className="col-md-6 p-5 ">
          <p5 className="mb-4 justify-content-center align-items-center ">OR</p5>
          <br/>
          <br/>
          
            <Link
              to="/Signin"
              className="btn btn-outline-dark
                 rounded-pill pb-2 w-50"
            >
              SignIn
            </Link> 
            </div>

            
        </div>
      </div>
      <Footer/>
    </div>
  );
};
export default SignUp;
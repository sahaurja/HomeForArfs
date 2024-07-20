import React, { useRef } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utilis/firebase";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const email = useRef(null);
  const password = useRef(null);
  const navigate = useNavigate();
  const handleButtonClick = () => {
    // Sign In Logic
    signInWithEmailAndPassword(
      auth,
      email.current.value,
      password.current.value
    )
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        navigate('/browse')
        console.log("Login Component")
        toast.success("Logged In Successfully !", {
          position: "top-right"
        });
        
        })
      .catch(() => {
        toast.warning("Some Error Occurred !!! Check Credentials!!!", {
          position: "top-right"
        });
            });
  };

  return (
    <>
      <div className="container bg-offer" style={{marginTop:"40px"}}>
        <div className="row justify-content-center">
          <div className="col-xl-5 col-lg-5 col-md-8 px-5">
            <div className="card o-hidden border-0 shadow-lg my-5 py-3">
              <div className="card-body p-0">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="p-5">
                      <div className="text-center">
                        <h1 className="h5 text-gray-900 mb-4">Welcome Back!</h1>
                      </div>
                      <form onSubmit={(e) => e.preventDefault()}>
                        <div className="input-group mb-3">
                          <input
                            ref={email}
                            type="email"
                            className="form-control form-control-user bg-light border-0 px-4"
                            id="exampleInputEmail"
                            aria-describedby="emailHelp"
                            placeholder="Email Address..."
                            style={{ fontSize: "1rem", padding: "1rem 1rem" }}
                          />
                        </div>

                        <div className="input-group mb-3">
                          <input
                            type="password"
                            ref={password}
                            className="form-control form-control-user bg-light border-0 px-4"
                            id="exampleInputPassword"
                            placeholder="Password"
                            style={{ fontSize: "1rem", padding: "1rem 1rem" }}
                          />
                        </div>

                        <div className="d-grid gap-2 col-5 mx-auto">
                          <button
                            className="btn btn-primary border-primary"
                            type="button"
                            style={{
                              fontSize: "0.8rem",
                              padding: "0.7rem 1rem",
                              backgroundColor: "#7AB730",
                            }}
                            onClick={handleButtonClick}
                          >
                            Login
                          </button>
                       
                        </div>
                      </form>
                      <hr style={{ color: "#7AB730" }} />

                      <div className="text-center text-primary">
                        <button
                          className="small btn"
                          onClick={() => navigate("/register")}
                          style={{ color: "#7AB730" }}
                        >
                          New ? Create an Account!
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    
    </>
  );
};

export default Login;

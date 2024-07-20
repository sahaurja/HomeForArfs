import { useRef } from 'react';
import {
    createUserWithEmailAndPassword,
    updateProfile,
} from "firebase/auth";
import { auth } from '../utilis/firebase';
import { useDispatch } from "react-redux";
import { addUser } from '../utilis/userSlice';
import axios from 'axios'; // Import axios for HTTP requests
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const firstName = useRef(null);
    const lastName = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    const handleButtonClick = async () => {
        try {
            // Create user in Firebase authentication
            const userCredential = await createUserWithEmailAndPassword(
                auth,
                email.current.value,
                password.current.value
            );
            const user = userCredential.user;

            // Update user profile in Firebase with display name
            await updateProfile(user, {
                displayName: `${firstName.current.value} ${lastName.current.value}`,
            });

           // Send user data to external API (mockapi.io)
            const userData = {
                uid: user.uid,
                email: user.email,
                displayName: user.displayName,
                selectedBreed:"",
                subscriptionModal:true,
                Searched_Breed_Outof_stock: []
            };
            console.log(userData)

            const response=await axios.post('https://6624dd2604457d4aaf9d281d.mockapi.io/usersdata', userData);
            console.log(response.data)
            dispatch(addUser(response.data))
            // dispatch(addUser(userData))
            // Navigate to login page after successful registration
            navigate("/browse");
            toast.info("Registered Successfully !", {
                position: "top-right"
              });
            
        } catch (error) {
            console.error('Error registering user:', error.message);
            // Handle error states or display error message
            if(error.code=="auth/invalid-email"){
                toast.error("Email Address Invalid", {
                    position: "top-right"
                  });
            }
            if(error.code=="auth/weak-password"){
                toast.error("Password should be at least 6 characters", {
                    position: "top-right"
                  });
            }
            
            if(error.code=="auth/missing-password"){
                toast.error("Password Missing!!!", {
                    position: "top-right"
                  });
            }
        }
    };

    return (
        <div className="container bg-testimonial" style={{ marginTop: "40px" }}>
            <div className="row justify-content-center">
                <div className="col-xl-5 col-lg-5 col-md-8 px-5">
                    <div className="card o-hidden border-0 shadow-lg my-5">
                        <div className="card-body p-0">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="p-5">
                                        <div className="text-center">
                                            <h1 className="h4 text-gray-900 mb-4">Create an Account!</h1>
                                        </div>
                                        <form>
                                            <div className="input-group row mb-3">
                                                <div className="col-sm-6 mb-3 mb-sm-0">
                                                    <input
                                                        type="text"
                                                        className="form-control form-control-user bg-light border-0 px-4"
                                                        id="exampleFirstName"
                                                        placeholder="First Name"
                                                        ref={firstName}
                                                    />
                                                </div>
                                                <div className="col-sm-6">
                                                    <input
                                                        type="text"
                                                        className="form-control form-control-user bg-light border-0 px-4"
                                                        id="exampleLastName"
                                                        placeholder="Last Name"
                                                        ref={lastName}
                                                    />
                                                </div>
                                            </div>
                                            <div className="input-group row mb-3">
                                                <div className="col-sm-12 mb-3 mb-sm-0">
                                                    <input
                                                        type="email"
                                                        className="form-control form-control-user bg-light border-0 px-4"
                                                        id="exampleInputEmail"
                                                        aria-describedby="emailHelp"
                                                        placeholder="Email Address..."
                                                        ref={email}
                                                    />
                                                </div>
                                            </div>
                                            <div className="input-group row mb-3">
                                                <div className="col-sm-12 mb-3 mb-sm-0">
                                                    <input
                                                        type="password"
                                                        className="form-control form-control-user bg-light border-0 px-4"
                                                        id="exampleInputPassword"
                                                        placeholder="Password"
                                                        ref={password}
                                                    />
                                                </div>
                                            </div>
                                            <div className="d-grid gap-2 col-6 mx-auto">
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
                                                    Register
                                                </button>
                                            </div>
                                        </form>
                                        <hr style={{ color: "#7AB730" }} />
                                        <div className="text-center text-primary">
                                            <button
                                                className="small btn"
                                                onClick={() => navigate("/login")}
                                                style={{ color: "#7AB730" }}
                                            >
                                                Already Have an Account ? Login !
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
    );
};

export default Register;
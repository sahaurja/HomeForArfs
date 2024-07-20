import { Link } from "react-router-dom"
const Footer = () => {
  return (
    <>
     {/* <!-- Footer Start --> */}
     <div className="container-fluid bg-light pb-3">
        <div className="container pt-4">
            <div className="row g-5">
                <div className="col-lg-3 col-md-6">
                    <h6 className="text-uppercase border-start border-5 border-primary ps-3 mb-4">Get In Touch</h6>
                    <p className="mb-2"><i className="bi bi-geo-alt text-primary me-2"></i>55 Business Street, Edison, New Jersey, USA</p>
                    <p className="mb-2"><i className="bi bi-envelope-open text-primary me-2"></i>urjastudies@gmail.com</p>
                    <p className="mb-0"><i className="bi bi-telephone text-primary me-2"></i>732 258 9898</p>
                </div>
                <div className="col-lg-3 col-md-6">
                    <h6 className="text-uppercase border-start border-5 border-primary ps-3 mb-4">Quick Links</h6>
                    <div className="d-flex flex-column justify-content-start">
                        <Link className="text-body mb-2" href="/"><i className="bi bi-arrow-right text-primary me-2"></i>Home</Link>
                        <Link className="text-body mb-2" to="/about"><i className="bi bi-arrow-right text-primary me-2"></i>About Us</Link>
                        <Link className="text-body mb-2" to="services"><i className="bi bi-arrow-right text-primary me-2"></i>Our Services</Link>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <h6 className="text-uppercase border-start border-5 border-primary ps-3 mb-4">Popular Links</h6>
                    <div className="d-flex flex-column justify-content-start">
                        <Link className="text-body mb-2" to="/"><i className="bi bi-arrow-right text-primary me-2"></i>Home</Link>
                        <Link className="text-body mb-2" to="/about"><i className="bi bi-arrow-right text-primary me-2"></i>About Us</Link>
                        <Link className="text-body mb-2" to="/services"><i className="bi bi-arrow-right text-primary me-2"></i>Our Services</Link>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <h6 className="text-uppercase border-start border-5 border-primary ps-3 mb-4">Follow Us</h6>
                    <div className="d-flex">
                        <Link className="btn btn-outline-primary btn-square me-2" to="#"><i className="bi bi-twitter"></i></Link>
                        <Link className="btn btn-outline-primary btn-square me-2" to="#"><i className="bi bi-facebook"></i></Link>
                        <Link className="btn btn-outline-primary btn-square me-2" to="#"><i className="bi bi-linkedin"></i></Link>
                        <Link className="btn btn-outline-primary btn-square" to="#"><i className="bi bi-instagram"></i></Link>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
    <div className="container-fluid bg-dark text-white-50 py-3">
        <div className="container">
            <div className="row g-5">
                <div className="col-md-6 text-center text-md-start">
                    <p className="mb-md-0">&copy; <Link className="text-white" to="/">Home For Arf's</Link>. All Rights Reserved.</p>
                </div>
                <div className="col-md-6 text-center text-md-end">
                    <p className="mb-0">Designed by <a className="text-white">Urja Saha</a></p>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Footer End --> */}
    </>
  )
}

export default Footer
import React from 'react'

const Services = () => {
  return (
    <>
    {/* <!-- Services Start --> */}
    <div className="container-fluid pb-4">
        <div className="container">
            <div className="border-start border-5 border-primary ps-5 mb-5" style={{maxWidth: "600px"}}>
                <h5 className="text-primary text-uppercase">Services</h5>                
                <h5 className=" text-uppercase mb-0">Our Excellent Pet Care Services</h5>
            </div>
            <div className="row g-5">
                <div className="col-md-6">
                <div className="service-item bg-light d-flex p-4">
                    <i className="bi bi-house-gear-fill text-primary me-4 display-5 mt-4"></i>
                <div>
                            <h5 className="text-uppercase mb-3">Pet Boarding</h5>
                            <p>Businesses describe the service here. Disable the section otherwise</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="service-item bg-light d-flex p-4">
                        <i className="fa-solid fa-bone display-5 mt-4  text-primary me-4"></i>
                        <div>
                            <h5 className="text-uppercase mb-3">Pet Feeding</h5>
                            <p>Businesses describe the service here. Disable the section otherwise</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="service-item bg-light d-flex p-4">
                       <i className="fa-solid fa-paw display-5 mt-4  text-primary me-4"></i>
                        <div>
                            <h5 className="text-uppercase mb-3">Pet Grooming</h5>
                            <p>Businesses describe the service here. Disable the section otherwise</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="service-item bg-light d-flex p-4">
                        <i className="fa-solid fa-dog display-5 mt-4 text-primary me-4"></i>
                        <div>
                            <h5 className="text-uppercase mb-3">Pet Training</h5>
                            <p>Businesses describe the service here. Disable the section otherwise</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="service-item bg-light d-flex p-4">
                        <i className="fa-solid fa-dumbbell display-5 mt-4 text-primary me-4"></i>
                        <div>
                            <h5 className="text-uppercase mb-3">Pet Exercise</h5>
                            <p>Businesses describe the service here. Disable the section otherwise</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="service-item bg-light d-flex p-4">
                        <i className="fa-solid fa-hand-holding-medical display-5 mt-4 text-primary me-4"></i>
                        <div>
                            <h5 className="text-uppercase mb-3">Pet Treatment</h5>
                            <p>Businesses describe the service here. Disable the section otherwise</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Services End --> */}
    </>
  )
}

export default Services
import React from 'react'

const Hero = () => {
  return (
    <>
         {/* <!-- Hero Start --> */}
    <div className="container-fluid bg-primary py-5 mb-3 hero-header">
        <div className="container pt-1">
            <div className="row justify-content-start">
                <div className="col-lg-8 text-center text-lg-start">
                    <h1 className="display-5  fw-bolder text-uppercase text-dark mb-lg-4">Home For Arf's</h1>
                    <h1 className="text-uppercase text-white mb-lg-4">Make Your Pets Happy</h1>
                    <p className="fs-4 text-white mb-lg-4">Arf's have worries. They need a home. They have bad hair day.. lost toy day .. doctor panic day ..  In HomeForArf's they speak out their needs</p>
                    <div className="d-flex align-items-center justify-content-center justify-content-lg-start pt-0">
                        <button type="button" className="btn-play" data-bs-toggle="modal"
                            data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-bs-target="#videoModal">
                            <span></span>
                        </button>
                        <h5 className="font-weight-normal text-white m-0 ms-4 d-none d-sm-block">Play Video</h5>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Hero End --> */}


    {/* <!-- Video Modal Start --> */}
    <div className="modal fade" id="videoModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content rounded-0">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Youtube Video</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    {/* <!-- 16:9 aspect ratio --> */}
                    <div className="ratio ratio-16x9">
                    <iframe
                    className="embed-responsive-item"
                    src="https://www.youtube.com/embed/UFpAwT6Gir4"
                    id="video"
                    allowFullScreen
                    allow="autoplay"
                    ></iframe>                   

                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Video Modal End --> */}
    </>
  )
}

export default Hero

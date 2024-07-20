import React from 'react'
import { FaExclamationTriangle } from 'react-icons/fa';


const BreedNotFound = ({searchTerm}) => {
  return (
        <> 
       <div className="container-fluid bg-primary py-4 mb-3 notFound-header" style={{ height: "400px" ,width:"96%"}}>
      <div className="container">
        <div className="row justify-content-start align-items-center">
          <div className="col-lg-8 text-center">
            <FaExclamationTriangle style={{ fontSize: '4rem', color: 'brown', marginBottom: '20px' }} />
            <h1 className="fw-bold text-capitalize mb-4 text-white">No breeds found for "{searchTerm}"</h1>
            <h2 className="text-capitalize mb-4 text-secondary text-success">Try a Different Breed !!!</h2>
            <p className="fs-5 text-white mb-4">We're sorry, but the breed <span className="text-uppercase" style={{fontWeight:"bold",color:"brown"}}>"{searchTerm}"</span> is not currently available. Don't worry! We'll notify you as soon as it becomes available.</p>
            <p className="fs-5 text-white mb-4">You may suscribe for the breed. You will be notified when available. Meanwhile, feel free to explore other breeds or check back later.</p>
         
          </div>
        </div>
      </div>
    </div>
        </>
      )
}

export default BreedNotFound
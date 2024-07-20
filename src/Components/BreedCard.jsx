import { useState } from "react";
import EditBreedModal from "./EditBreedModal"; // Import your modal component
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BreedCard = ({  image, origin, weight, name, bred_for, temperament, breed, updateBreed ,deleteBreed }) => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleEditClick = () => {
    setShowModal(true);
  };

  const handleDeleteClick = () => {
    toast.error("Breed Deleted Successfully !", {
      position: "top-right"
    });
    deleteBreed(breed.id);
  };

  return (
    <div className="col-lg-6 rounded-start">
      <div className="blog-item ">
        <div className="row g-0 bg-light overflow-hidden">
        <div className="col-12 col-sm-5" style={{ height: "150px", width: "220px" }}>
          <img
            className="img-fluid rounded-start"
            src={image?.url || image}
            style={{objectFit: "cover"}}
            alt={name}
          />
        </div>
          <div className="col-12 col-sm-7 h-50 ps-2">
            <div className="p-1">
              <div className="d-flex ">
                {origin && <small className="me-3"><i className="bi bi-bookmarks me-1"></i>{origin}</small>}
                <small><i className="bi bi-bookmark me-1"></i>{weight?.imperial}</small>
              </div>
              <div><small className="text-uppercase mb-1"><b>{name}</b></small></div>
              <div><small><b>Bred_For: </b>{bred_for}</small></div>
              <small><b>Temperament: </b>{temperament?.substr(0, 70)}</small>
              <div>
                <i onClick={handleEditClick} className="text-primary bi bi-pencil-square pe-3 fs-5"></i>
                <i onClick={handleDeleteClick} className="text-danger bi bi-archive  fs-5"></i>
             </div>
      
            </div>
          </div>
        </div>
      </div>

      {/* Render the modal conditionally */}
      {showModal && (
        <EditBreedModal
          onClose={() => setShowModal(false)}
          breed={breed}
          updateBreed={updateBreed} // Pass updateBreed function to BreedModal
        />
      )} </div>
  );
};

export default BreedCard;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { addUser } from '../utilis/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const BreedSubscriptionModal = ({ onClose,showSubscriptionModal,setShowSubscriptionModal }) => {
  const [breeds, setBreeds] = useState([]);
  const user = useSelector((state) => state?.user);
  console.log(user)
  
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBreeds = async () => {
      try {
        const response = await axios.get('https://dogapi.dog/api/v2/breeds');
        setBreeds(response.data.data);
      } catch (error) {
        console.error('Error fetching breeds:', error);
      }
    };

    fetchBreeds();
  }, []);

  const handleBreedSelection = async (selectedBreed) => {
    try {
      const apiUrl1 = `https://6624dd2604457d4aaf9d281d.mockapi.io/usersdata?uid=${user?.uid}`;
      const response1 = await axios.get(apiUrl1);
      const id = response1.data[0].id;

      const updatedUserData = { ...user, 
        subscriptionModal: false,
        selectedBreed
      };
      const apiUrl = `https://6624dd2604457d4aaf9d281d.mockapi.io/usersdata/${id}`;
      const response = await axios.put(apiUrl, updatedUserData);
      dispatch(addUser(response.data));
    
      console.log('User data updated in mock API:', response.data);
      onClose(); // Close the modal after breed selection
    } catch (error) {
      console.error('Error updating user data in mock API:', error);
    }
  };

  const handleSkip = () => {
    console.log('Skipped for now');
    navigate('/allbreeds');
    setShowSubscriptionModal(false)
    onClose(); // Close the modal after skipping
  };

  return (
    <div className="modal" tabIndex="-1" style={{ display: 'block', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header p-2">
            <div className="border-start border-5 border-primary ps-3 ">
              <h5 className="text-primary text-uppercase">Breeds</h5>
              <h6 className="text-uppercase mb-0">Subscribe:Any Breed</h6>
            </div>
          </div>
          <div className="modal-body">
            {breeds.length > 0 ? (
              <div className='d-flex flex-wrap text-center' >
                {breeds.map((breed) => (
                  <div className="m-1" key={breed.id}>
                    <button
                      className="btn btn-primary border-primary"
                      type="button"
                      style={{
                        fontSize: "0.64rem",
                        padding: "0.2rem 0.9rem",
                        backgroundColor: "#7AB730",
                      }}
                      onClick={() => handleBreedSelection(breed.attributes.name)}
                    >
                      {breed.attributes.name}
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <p>Loading breed information...</p>
            )}
          </div>
          <div className='modal-footer'>
            <button
              className="btn-sm btn"
              onClick={handleSkip}
              style={{ color: "#7AB730" }}
            >
              Skip For Now!
            </button>
            <button type="button" className="btn-sm btn" 
             style={{ color: "#7AB730" }}
            onClick={onClose}>
              Close
            </button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default BreedSubscriptionModal;

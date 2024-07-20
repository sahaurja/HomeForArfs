import React, { useState, useEffect } from 'react';
import BreedSubscriptionModal from './BreedSubscriptionModal';
import axios from 'axios';
import { useSelector } from 'react-redux';
import AllBreeds from './AllBreeds';

const Browse = () => {
  const loggedInUserData=useSelector(store=>store.user)
  console.log("LoggedIn User",loggedInUserData)
  const [userHasSelectedBreed, setUserHasSelectedBreed] = useState(true);

  useEffect(() => {
    // Fetch user data to check if user has selected a breed
    if (loggedInUserData && loggedInUserData.uid) {
      const fetchUserData = async () => {
      try {
        const response = await axios.get(`https://6624dd2604457d4aaf9d281d.mockapi.io/usersdata?uid=${loggedInUserData?.uid}`);
        const userData = response.data;
        console.log(userData)
        // Check if user has selected a breed
        if (userData.selectedBreed) {
          setUserHasSelectedBreed(false);
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    }; 

    fetchUserData();
  }
  }, [loggedInUserData]);

  // Render Breed component conditionally based on user selection
  return (
    <div style={{ marginTop: "2%" }} >
      {userHasSelectedBreed ? (
        <AllBreeds/>
      ) : (
        <BreedSubscriptionModal/>
      )}
    </div>
  );
};

export default Browse;

import React from 'react';
import {useAuth} from "../context/AuthContext";

const ProfilePage = () => {
  const {currentUser} = useAuth()

  return (
    <div>
      {JSON.stringify(currentUser)}
    </div>
  );
};

export default ProfilePage;
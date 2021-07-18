import React from 'react';
import {useAuth} from "../context/AuthContext";
import {Card} from "react-bootstrap";

const ProfilePage = () => {
  const {currentUser} = useAuth()
  const {email, username, role, status} = currentUser
  return (
    <Card className="shadow">
      <Card.Header>
        <h5><i className="bi bi-person"/> {username}</h5>
      </Card.Header>
      <Card.Body>
        {username && <p><b><i className="bi bi-envelope-fill"/>&nbsp;Email:</b> {email}</p>}
        <p><b><i className="bi bi-info-circle"/>&nbsp;Role:</b> {role}</p>
        <p><b><i className="bi bi-info-circle"/>&nbsp;Status:</b> {status}</p>
        {/*{JSON.stringify(currentUser)}*/}
      </Card.Body>
    </Card>
  );
};

export default ProfilePage;
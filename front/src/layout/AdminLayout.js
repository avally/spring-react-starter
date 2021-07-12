import React from 'react';
import Header from "../component/Header.js";
import {Container} from "react-bootstrap";

export const AdminLayout = ({children}) =>
  <>
    <Header/>
    <Container style={{paddingTop: '90px'}} className="mb-5">
      {children}
    </Container>
  </>

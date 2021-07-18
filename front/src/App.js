import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SecuredPage from "./pages/SecuredPage";
import SignUpPage from "./pages/SignUpPage";
import {useAuth} from "./context/AuthContext";
import {AdminLayout} from "./layout/AdminLayout";
import ProfilePage from "./pages/ProfilePage";

const App = () => {
  const {accessToken, currentUser} = useAuth()
  // const currentUser = null

  if (accessToken && currentUser) {
    return (
      <AdminLayout>
        <Switch>
          <Route path="/" exact><SecuredPage/></Route>
          <Route path="/profile" exact><ProfilePage/></Route>
          <Redirect to="/"/>
        </Switch>
      </AdminLayout>
    )
  }
  return (
    <Switch>
      <Route path="/login" exact><LoginPage/></Route>
      <Route path="/signUp" exact><SignUpPage/></Route>
      <Redirect to="/login"/>
    </Switch>
  );
};

export default App;
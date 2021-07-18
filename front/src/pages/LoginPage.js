import React, {useState} from 'react';
import {Alert, Button, Form, Spinner} from "react-bootstrap";
import {Link} from "react-router-dom";
import {useAuth} from "../context/AuthContext";
import {ACCESS_TOKEN} from "../constants";

const LoginPage = () => {
  const [form, setForm] = useState({email: '', password: ''})
  const [alert, setAlert] = useState(null)
  const [loading, setLoading] = useState(false)
  const {login} = useAuth()

  const changeHandler = event => {
    setForm({...form, [event.target.name]: event.target.value})
  }

  const loginHandler = async event => {
    event.preventDefault()
    setLoading(true)
    try {
      const data = await login(form)
      localStorage.setItem(ACCESS_TOKEN, data.accessToken)
    } catch (e) {
      setAlert('Something went wrong!')
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="auth-form shadow mt-5">
      <h1 className="h3 mb-3 text-center">Login</h1>
      <Alert show={!!alert} variant="danger" className="mt-3" dismissible
             onClose={() => setAlert(null)}>{alert}</Alert>
      <Form onSubmit={loginHandler}>
        <fieldset disabled={loading}>
        <Form.Group controlId="email" className="mb-3">
          <Form.Label>Username</Form.Label>
          <Form.Control
            name="email"
            type="email"
            placeholder="Email"
            autoComplete="email"
            value={form.email}
            onChange={changeHandler}/>
        </Form.Group>
        <Form.Group controlId="password" className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            type="password"
            placeholder="Password"
            autoComplete="current-password"
            value={form.password}
            onChange={changeHandler}/>
        </Form.Group>
        <Button variant="primary" className="w-100"
                type="submit">
          {loading
            ? <><Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true"/> Sending...</>
            : <>Submit</>
          }
        </Button>
        </fieldset>
      </Form>
      <hr/>
      <Link to="/signUp">Sign Up</Link>
    </main>
  );
};

export default LoginPage;
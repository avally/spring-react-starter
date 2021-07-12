import React, {useState} from 'react';
import {Alert, Button, Form, Spinner} from "react-bootstrap";
import {Link} from "react-router-dom";
import {useAuth} from "../context/AuthContext";

const SignUpPage = () => {
  const [form, setForm] = useState({username: '', email: '', password: ''})
  const [alert, setAlert] = useState({type: 'danger', message: ''})
  const [loading, setLoading] = useState(false)
  const {signUp} = useAuth()

  const changeHandler = event => {
    setForm({...form, [event.target.name]: event.target.value})
  }

  const signUpHandler = async event => {
    event.preventDefault()
    setLoading(true)
    try {
      const data = await signUp(form)
      setForm({username: '', email: '', password: ''})
      setAlert({type: 'info', message: data.message})
    } catch (e) {
      setAlert({type: 'danger', message: e.message})
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="auth-form shadow mt-5">
      <h1 className="h3 mb-3 text-center">Sign Up</h1>
      <Alert show={!!alert.message} variant={alert.type} className="mt-3" dismissible
             onClose={() => setAlert({type: '', message: ''})}>{alert.message}</Alert>
      <Form onSubmit={signUpHandler}>
        <fieldset disabled={loading}>
          <Form.Group controlId="username" className="mb-3">
            <Form.Label>Username</Form.Label>
            <Form.Control
              name="username"
              type="text"
              placeholder="Username"
              autoComplete="username"
              value={form.username}
              onChange={changeHandler}/>
          </Form.Group>
        <Form.Group controlId="email" className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            name="email"
            type="email"
            placeholder="name@example.com"
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
      <Link to="/login">Sign In</Link>
    </main>
  );
};

export default SignUpPage;
/** @format */

import React from "react"
import { useState } from "react"
import "../style/SignPage.css"
import { Row, Container, Col } from "react-bootstrap"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import { Link } from "react-router-dom"

const SignUpPage = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("clicked")
  }
  return (
    <Container className='col-11 mt-4 signIn-logo-container'>
      <Row>
        <img
          className='signIn-logo'
          src='https://proinfluent.b-cdn.net/wp-content/uploads/2019/05/Logo-LinkedIn-officiel.png'
          alt='signIn-logo'
        />
      </Row>
      <Row className='col-12'>
        <Col className='col-11 col-xs-11 col-md-6 col-lg-5  mt-3 mx-auto rounded signin-div'>
          <div className='mt-2'>
            <h3 className='text-center'>
              Make the most of your professional life
            </h3>
          </div>
          <Form className='mt-4 col-9 mx-auto'>
            <Form.Group className='mb-3' controlId='formBasicEmail'>
              <Form.Label>Email </Form.Label>
              <Form.Control
                type='email'
                placeholder='Enter email'
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formBasicPassword'>
              <Form.Label>Password (6 or more characters)</Form.Label>
              <Form.Control
                type='password'
                placeholder='Password'
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <p
              className='text-center'
              style={{ lineHeight: "14px", fontSize: "12px" }}>
              By clicking Agree & Join, you agree to the LinkedIn{" "}
              <Link to='/'>User Agreement,</Link>
              <Link to='/'> Privacy Policy,</Link> and{" "}
              <Link to='/'>Cookie Policy.</Link>
            </p>

            <Button
              variant='primary'
              type='submit'
              className='btn btn-block rounded-pill py-2'
              onClick={handleSubmit}>
              Agree & Join
            </Button>

            <Button
              type='submit'
              className='btn btn-block rounded-pill py-2 mt-3 bg-transparent text-dark'>
              <span>
                <i className='bi bi-google'></i>
              </span>
              <span> Continue with Google</span>
            </Button>

            <p className='text-center mt-4'>
              Already on LinkedIn?<Link to='/signin'> Sign In</Link>
            </p>
            <p className='text-center mt-4' style={{ fontSize: "14px" }}>
              Looking to create a page for a business?
              <Link to='/signin'> Get help</Link>
            </p>
          </Form>
        </Col>
      </Row>
      <Row className='signin-footer col-10 mx-auto px-0'>
        <div className='col-7 d-flex justify-content-around'>
          <p>
            <img
              className='footer-signIn-logo'
              src='https://proinfluent.b-cdn.net/wp-content/uploads/2019/05/Logo-LinkedIn-officiel.png'
              alt='signIn-logo'
            />
            &#169; 2022
          </p>
          <p>
            <Link to='/'>Accessibility</Link>
          </p>
          <p>
            <Link to='/'>Privacy Policy</Link>
          </p>
          <p>
            <Link to='/'>Copyright Policy</Link>
          </p>
          <p>
            <Link to='/'>Guest Controls</Link>
          </p>
          <p>
            <Link to='/'>
              Language
              <span>
                <i className='bi bi-chevron-compact-down'></i>
              </span>
            </Link>
          </p>
        </div>
        <div className='col-5 d-flex justify-content-around'>
          <p>
            <Link to='/'>About</Link>
          </p>
          <p>
            <Link to='/'>User Agreement</Link>
          </p>
          <p>
            <Link to='/'>Cookie Policy</Link>
          </p>
          <p>
            <Link to='/'>Brand Policy</Link>
          </p>
          <p>
            <Link to='/'>Community Guidelines</Link>
          </p>
        </div>
      </Row>
    </Container>
  )
}

export default SignUpPage

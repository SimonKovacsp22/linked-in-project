/** @format */

import React from "react"
import { useState } from "react"
import "../style/SignPage.css"
import { Row, Container, Col } from "react-bootstrap"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import { Link, useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"

const SignUpPage = () => {
  const profiles = useSelector((state) => state.allProfiles.allProfilesData[0])
  //console.log(profiles)

  const navigate = useNavigate()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [emailError, setEmailError] = useState("")
  const [passwordError, setPasswordError] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    let user = profiles.filter((profile) => profile.email === email)

    if (user.length > 0 || password.length > 6) {
      setEmailError("Sorry..!! User already exist")
    } else if (user.length < 0 || password.length < 6) {
      setPasswordError("Sorry..!! Password too short")
    } else {
      console.log(user[0])
      navigate("/register", { state: { email, password } })
    }
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
        <Col className='col-12 col-xs-12 col-md-12 col-lg-8  mt-3 mx-auto rounded signin-div'>
          <div className='mt-2 text-center'>
            <h3 className='text-center'>
              Make the most of your professional life
            </h3>
          </div>
          <Form className='mt-4 col-12 col-xs-12 col-md-12 col-lg-8 mx-auto'>
            <Form.Group className='mb-3' controlId='formBasicEmail'>
              <Form.Label className='my-0'>Email </Form.Label>
              <Form.Control
                size='sm'
                type='email'
                placeholder='Enter email'
                onChange={(e) => setEmail(e.target.value)}
              />
              <small className='text-danger '>{emailError}</small>
            </Form.Group>

            <Form.Group className='mb-3' controlId='formBasicPassword'>
              <Form.Label className='my-0'>
                Password (6 or more characters)
              </Form.Label>
              <Form.Control
                size='sm'
                type='password'
                placeholder='Password'
                onChange={(e) => setPassword(e.target.value)}
              />
              <small className='text-danger '>{passwordError}</small>
            </Form.Group>

            <p
              className='text-center'
              style={{ lineHeight: "14px", fontSize: "12px" }}>
              By clicking Agree & Join, you agree to the LinkedIn{" "}
              <Link to='/'>User Agreement,</Link>
              <Link to='/'> Privacy Policy,</Link> and{" "}
              <Link to='/'>Cookie Policy.</Link>
            </p>
            <div className='col-12'>
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
            </div>
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

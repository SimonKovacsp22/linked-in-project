/** @format */

import React from "react"
import { useState } from "react"
import "../style/SignPage.css"
import { Row, Container, Col } from "react-bootstrap"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import { Link } from "react-router-dom"

import { MenuItem, TextField } from "@mui/material"
// import InputLabel from "@mui/material/InputLabel"
// import FilledInput from "@mui/material/FilledInput"
// import InputAdornment from "@mui/material/InputAdornment"
// import IconButton from "@mui/material/IconButton"
// import Visibility from "@mui/icons-material/Visibility"
// import VisibilityOff from "@mui/icons-material/VisibilityOff"

const SignInPage = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  //   const handleChange = (prop) => (event) => {
  //     setValues({ ...values, [prop]: event.target.value })
  //   }

  //   const handleClickShowPassword = () => {
  //     setValues({
  //       ...values,
  //       showPassword: !values.showPassword,
  //     })
  //   }

  //   const handleMouseDownPassword = (event) => {
  //     event.preventDefault()
  //   }
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("clicked")
  }
  return (
    <Container className='col-11 mt-4'>
      <Row>
        <img
          className='signIn-logo'
          src='https://proinfluent.b-cdn.net/wp-content/uploads/2019/05/Logo-LinkedIn-officiel.png'
          alt='signIn-logo'
        />
      </Row>
      <Row className='col-12'>
        <Col className='col-6 col-md-4  mt-3 mx-auto rounded signin-div'>
          <div className='mt-2'>
            <h2>Sign in</h2>
            <p>Stay updated on your professional world</p>
          </div>
          <Form>
            <TextField
              sx={{
                marginTop: "10px",
              }}
              fullWidth
              id='outlined-required'
              label='Email or Phone'
              defaultValue={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              sx={{
                marginTop: "10px",
              }}
              fullWidth
              id='outlined-password-input'
              label='Password'
              type='password'
              autoComplete='current-password'
              onChange={(e) => setPassword(e.target.value)}
            />
            <p className='mt-3'>Forgot password?</p>

            {/* <FilledInput
              id='filled-adornment-password'
              type={values.showPassword ? "text" : "password"}
              value={values.password}
              onChange={handleChange("password")}
              endAdornment={
                <InputAdornment position='end'>
                  <IconButton
                    aria-label='toggle password visibility'
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge='end'>
                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            /> */}

            <Button
              variant='primary'
              type='submit'
              className='btn btn-block rounded-pill py-2'
              onClick={handleSubmit}>
              Sign in
            </Button>
            <div className='d-flex align-items-center my-3'>
              <div className='hr-line text-center mx-2'></div>
              <div className=''>or</div>
              <div className='hr-line text-center mx-2'></div>
            </div>
            <Button
              type='submit'
              className='btn btn-block rounded-pill py-2 mt-3 bg-transparent text-dark'>
              <span>
                <i className='bi bi-google'></i>
              </span>
              <span> Sign in with Google</span>
            </Button>
            <Button
              type='submit'
              className='btn btn-block rounded-pill py-2 bg-transparent text-dark'>
              <span>
                <i className='bi bi-apple'></i>
              </span>
              <span> Sign in with Apple</span>
            </Button>
            <p className='text-center mt-4'>
              New to LinkedIn?<Link to='/signup'> Join now</Link>
            </p>
          </Form>
        </Col>
      </Row>
      <Row className='signin-footer col-10 mx-auto'>
        <div className='col-7 d-flex justify-content-between'>
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
        <div className='col-5 d-flex justify-content-between'>
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

export default SignInPage

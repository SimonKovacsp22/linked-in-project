/** @format */

import { useEffect, useState } from "react"
import { Modal, Form, Button } from "react-bootstrap"
import { useSelector } from "react-redux"
import "../style/EditProfile.css"

export default function EditProfile(props) {
  const myProfile = useSelector((state) => state.logUser.loginData)
  //console.log(myProfile._id);
  const [image, setImage] = useState(null)

  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const [editDetails, setEditDetails] = useState({
    id: myProfile._id,
    name: myProfile.name,
    surname: myProfile.surname,
    bio: myProfile.bio,
    area: myProfile.area,
    email: myProfile.email,
    title: myProfile.title,
    username: myProfile.username,
    image: myProfile.image,
  })

  const editProfile = async (e) => {
    console.log("first")
    e.preventDefault()

    try {
      let formData = new FormData()
      formData.append("profile", image)
      formData.get("profile")
      let response = await fetch(
        `${process.env.REACT_APP_URL}/profile/${editDetails.id}/picture`,
        // `https://striveschool-api.herokuapp.com/api/profile/`,

        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
          },
          body: formData,
        }
      )
      let data = await response.json()
      console.log(data)
    } catch (err) {
      console.log(err)
    }
  }
  useEffect(() => {
    console.log(image)
  }, [image])

  // const [show, setShow] = useState(false);
  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
  return (
    <Modal
      {...props}
      aria-labelledby='contained-modal-title-vcenter modal-container'>
      <Modal.Header className='d-flex'>
        <Modal.Title id='contained-modal-title-vcenter'>
          <span> Edit Details </span>
        </Modal.Title>
        <i className='bi bi-x-lg' onClick={props.onHide}></i>
      </Modal.Header>
      <Modal.Body className='modal-container-content'>
        <Form>
          <Form.Group
            className='mb-3 col-12 d-flex'
            controlId='exampleForm.ControlInput1'>
            <Form.Label className='col-4'>First name*</Form.Label>
            <Form.Control
              className='col-8'
              size='sm'
              type='text'
              placeholder='Enter your name'
              defaultValue={editDetails.name}
              autoFocus
            />
          </Form.Group>
          <Form.Group
            className='mb-3 col-12 d-flex'
            controlId='exampleForm.ControlInput1'>
            <Form.Label className='col-4'>Last name*</Form.Label>
            <Form.Control
              className='col-8'
              size='sm'
              type='text'
              placeholder='Enter your surname'
              defaultValue={editDetails.surname}
              autoFocus
            />
          </Form.Group>
          <Form.Group
            className='mb-3 col-12 d-flex'
            controlId='exampleForm.ControlInput1'>
            <Form.Label className='col-4'>Username</Form.Label>
            <Form.Control
              className='col-8'
              size='sm'
              type='text'
              placeholder='Enter your username'
              defaultValue={editDetails.username}
              autoFocus
            />
          </Form.Group>
          <Form.Group
            className='mb-3 col-12 d-flex'
            controlId='exampleForm.ControlInput1'>
            <Form.Label className='col-4'>Email address</Form.Label>
            <Form.Control
              className='col-8'
              size='sm'
              type='email'
              placeholder='Enter your email'
              defaultValue={editDetails.email}
              autoFocus
            />
          </Form.Group>
          <Form.Group
            className='mb-3 col-12 d-flex'
            controlId='exampleForm.ControlInput1'>
            <Form.Label className='col-4'>Title</Form.Label>
            <Form.Control
              className='col-8'
              size='sm'
              type='text'
              placeholder='Enter your job title'
              defaultValue={editDetails.title}
              autoFocus
            />
          </Form.Group>
          <Form.Group
            className='mb-3 col-12 d-flex'
            controlId='exampleForm.ControlInput1'>
            <Form.Label className='col-4'>Bio</Form.Label>
            <Form.Control
              className='col-8'
              size='sm'
              type='text'
              placeholder='Enter your bio'
              defaultValue={editDetails.bio}
              autoFocus
            />
          </Form.Group>
          <Form.Group
            className='mb-3 col-12 d-flex'
            controlId='exampleForm.ControlInput1'>
            <Form.Label className='col-4'>Location</Form.Label>
            <Form.Control
              className='col-8'
              size='sm'
              type='text'
              placeholder='Enter your bio'
              defaultValue={editDetails.area}
              autoFocus
            />
          </Form.Group>
          <Form.Group
            className='mb-3 col-12 d-flex'
            controlId='exampleForm.ControlInput1'>
            <Form.Label className='col-4'>Image</Form.Label>
            <Form.Control
              className='col-8'
              type='text'
              defaultValue={editDetails.image}
              // onChange={(e) => {
              //   setImage(e.target.files[0])
              // }}
            />
          </Form.Group>
          <Form.Group
            className='mb-3 col-12 d-flex'
            controlId='exampleForm.ControlInput1'>
            <Form.Label className='col-4'>Add image</Form.Label>
            <Form.Control
              className='col-8'
              type='file'
              onChange={(e) => {
                setImage(e.target.files[0])
              }}
            />
          </Form.Group>

          <Button
            type='submit'
            variant='primary'
            onClick={editProfile}
            className='mb-3 btn btn-block col-8 mx-auto'>
            Save
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer></Modal.Footer>
    </Modal>
  )
}

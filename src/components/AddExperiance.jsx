/** @format */

import React, { useState } from "react"
import { Button, Form, Modal } from "react-bootstrap"
import { useSelector } from "react-redux"

const AddExperiance = (props) => {
  const myProfile = useSelector((state) => state.logUser.loginData)

  const [role, setRole] = useState("")
  const [company, setCompany] = useState("")
  const [area, setArea] = useState("")
  const [startDate, setStartDate] = useState("")
  const [endDate, setEndDate] = useState("")
  const [description, setDescription] = useState("")
  const [expImg, setExpImg] = useState("")

  const handSubmitExp = async (e) => {
    e.preventDefault()
    const blog = {
      role,
      company,
      area,
      startDate,
      endDate,
      description,
      expImg,
    }
    console.log(blog)

    try {
      let response = await fetch(
        `${process.env.REACT_APP_URL}/users/${myProfile._id}/experiences`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(blog),
        }
      )
      let data = response.json()
      console.log(data, "AGHA rouzbehhhh")
    } catch (err) {
      console.log(err, "AGHA rouzbeh error")
    }
  }
  return (
    <Modal {...props} size='lg' aria-labelledby='contained-modal-title-vcenter'>
      <Modal.Header className='d-flex'>
        <Modal.Title id='contained-modal-title-vcenter'>
          Add Experiance
        </Modal.Title>
        <i className='bi bi-x-lg' onClick={props.onHide}></i>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group
            className='mb-3 col-12 d-flex'
            controlId='exampleForm.ControlInput1'>
            <Form.Label className='col-4'>Role</Form.Label>
            <Form.Control
              className='col-8'
              size='sm'
              type='text'
              placeholder='Role'
              value={role}
              onChange={(e) => setRole(e.target.value)}
            />
          </Form.Group>
          <Form.Group
            className='mb-3 col-12 d-flex'
            controlId='exampleForm.ControlInput1'>
            <Form.Label className='col-4'>Company</Form.Label>
            <Form.Control
              className='col-8'
              size='sm'
              type='text'
              placeholder='Company Name'
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            />
          </Form.Group>
          <Form.Group
            className='mb-3 col-12 d-flex'
            controlId='exampleForm.ControlInput1'>
            <Form.Label className='col-4'>Area</Form.Label>
            <Form.Control
              className='col-8'
              size='sm'
              type='text'
              placeholder='Name Of City-Country'
              value={area}
              onChange={(e) => setArea(e.target.value)}
            />
          </Form.Group>
          <Form.Group
            className='mb-3 col-12 d-flex'
            controlId='exampleForm.ControlInput1'>
            <Form.Label className='col-4'>Start Date</Form.Label>
            <Form.Control
              className='col-8'
              size='sm'
              type='date'
              placeholder='Started-Date'
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </Form.Group>
          <Form.Group
            className='mb-3 col-12 d-flex'
            controlId='exampleForm.ControlInput1'>
            <Form.Label className='col-4'>End Date</Form.Label>
            <Form.Control
              className='col-8'
              size='sm'
              type='date'
              placeholder='Finish-Date'
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </Form.Group>
          <Form.Group
            className='mb-3 col-12 d-flex'
            controlId='exampleForm.ControlInput1'>
            <Form.Label className='col-4'>Description</Form.Label>
            <Form.Control
              className='col-8'
              size='sm'
              as='textarea'
              rows={3}
              placeholder='Desc'
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Form.Group>
          <Form.Group
            className='mb-3 col-12 d-flex'
            controlId='exampleForm.ControlInput1'>
            <Form.Label className='col-4'>Add image</Form.Label>
            <Form.Control
              className='col-8'
              type='text'
              value={expImg}
              onChange={(e) => {
                setExpImg(e.target.value)
              }}
            />
          </Form.Group>
          <Button
            type='submit'
            variant='primary'
            onClick={handSubmitExp}
            className='mb-3 btn-block col-8 mx-auto'>
            Save
          </Button>
        </Form>
      </Modal.Body>
      {/* <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer> */}
    </Modal>
  )
}

export default AddExperiance

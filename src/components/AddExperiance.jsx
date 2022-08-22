/** @format */

import React, { useState } from "react"
import { Button, Form, Modal } from "react-bootstrap"
import { useSelector } from "react-redux"

const AddExperiance = (props) => {
  const myProfile = useSelector((state) => state.myProfile.profileData)

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
        `${process.env.REACT_APP_URL}/profile/${myProfile._id}/experiences`,
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
    <Modal
      {...props}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered>
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter'>
          Add Experiance
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
            <Form.Label>Role</Form.Label>
            <Form.Control
              type='text'
              placeholder='Role'
              value={role}
              onChange={(e) => setRole(e.target.value)}
            />
          </Form.Group>
          <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
            <Form.Label>Company</Form.Label>
            <Form.Control
              type='text'
              placeholder='Company Name'
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            />
          </Form.Group>
          <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
            <Form.Label>Area</Form.Label>
            <Form.Control
              type='text'
              placeholder='Name Of City-Country'
              value={area}
              onChange={(e) => setArea(e.target.value)}
            />
          </Form.Group>
          <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
            <Form.Label>start Date</Form.Label>
            <Form.Control
              type='date'
              placeholder='Started-Date'
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </Form.Group>
          <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
            <Form.Label>End Date</Form.Label>
            <Form.Control
              type='date'
              placeholder='Finish-Date'
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </Form.Group>
          <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
            <Form.Label>Description</Form.Label>
            <Form.Control
              type='text'
              placeholder='Desc'
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Form.Group>
          <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
            <Form.Label>Add image</Form.Label>
            <Form.Control
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
            className='mb-3'>
            Save
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default AddExperiance

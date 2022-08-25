/** @format */

import React, { useState } from "react"
import { Button, Form, Modal } from "react-bootstrap"
import { useSelector } from "react-redux"
import { Link, useParams } from "react-router-dom"

const AddExperiance = (props) => {

  const myProfile = useSelector((state) => state.logUser.loginData)
  let id = useParams()._id


  const [role, setRole] = useState("")
  const [company, setCompany] = useState("")
  const [area, setArea] = useState("")
  const [startDate, setStartDate] = useState("")
  const [endDate, setEndDate] = useState("")
  const [description, setDescription] = useState("")
  const [imageUrl, setImageUrl] = useState("")

  const handSubmitExp = async (e) => {
    e.preventDefault()
    const blog = {
      role,
      company,
      area,
      startDate,
      endDate,
      description,
      imageUrl,
    }
    if(role === "" || company === "" || area === "" || startDate === "" || endDate === "" || description === ""){
      alert("requirments must be filled!")
    }else{
      console.log(blog)
      console.log(id,"im the id ")
  
      try {
        let response = await fetch(
          `${process.env.REACT_APP_URL}/users/${id}/experiences`,
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
        alert("Successfully added!")
        console.log(data, "AGHA rouzbehhhh")
        window.location.reload()
      } catch (err) {
        console.log(err, "AGHA rouzbeh error")
      }
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

          <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
            <Form.Label>Role*</Form.Label>

            <Form.Control
              className='col-8'
              size='sm'
              type='text'
              placeholder='Role'
              value={role}
              onChange={(e) => setRole(e.target.value)}
            />
          </Form.Group>

          <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
            <Form.Label>Company*</Form.Label>

            <Form.Control
              className='col-8'
              size='sm'
              type='text'
              placeholder='Company Name'
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            />
          </Form.Group>

          <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
            <Form.Label>Area*</Form.Label>

            <Form.Control
              className='col-8'
              size='sm'
              type='text'
              placeholder='Name Of City-Country'
              value={area}
              onChange={(e) => setArea(e.target.value)}
            />
          </Form.Group>


          <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
            <Form.Label>start Date*</Form.Label>

            <Form.Control
              className='col-8'
              size='sm'
              type='date'
              placeholder='Started-Date'
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </Form.Group>


          <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
            <Form.Label>End Date*</Form.Label>

            <Form.Control
              className='col-8'
              size='sm'
              type='date'
              placeholder='Finish-Date'
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </Form.Group>

          <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
            <Form.Label>Description*</Form.Label>

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
              value={imageUrl}
              onChange={(e) => {
                setImageUrl(e.target.value)
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

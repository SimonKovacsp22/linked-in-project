/** @format */

import React, { useState } from "react"
import { useEffect } from "react"
import { Button, Container, Form, Modal } from "react-bootstrap"
import { useSelector } from "react-redux"
import { Link, useParams } from "react-router-dom"

const EditExperience = (props) => {
  let id = useParams()._id
  const oneOfExp = useSelector(
    (state) => state.singleExperience.singleExperiences
  )
  const myProfile = useSelector((state) => state.myProfile.profileData)

  const [role, setRole] = useState("")
  const [company, setCompany] = useState("")
  const [area, setArea] = useState("")
  const [startDate, setStartDate] = useState("")
  const [endDate, setEndDate] = useState("")
  const [description, setDescription] = useState("")
  const [imageUrl, setImageUrl] = useState("")
  // useEffect(()=>{
  //     setRole(oneOfExp.role)
  // },[oneOfExp])

  const editingIt = async (e) => {
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
      alert("fill the required fields!")
    }else{
      console.log(blog)
      console.log(myProfile._id);
  
      try {
        let response = await fetch(
          `${process.env.REACT_APP_URL}/users/${id}/experiences/${props.expid}`,
          {
            method: "PUT",
            headers: {
              Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            body: JSON.stringify(blog),
          }
        )
        let data = response.json()
        alert("your experience succesfully edited!")
        window.location.reload();
      } catch (err) {
        console.log(err, "errrrrr")
        alert("Back-end Error!")
      }
    }

    }
    const getExp = async () => {
      try {
        if(props.expid!==''){
          let response = await fetch(`${process.env.REACT_APP_URL}/users/${id}/experiences/${props.expid}`,
              {
                  method: "GET",
                  headers: {
                      "Content-Type": "application/json",
                      Accept: "application/json",
                  }
              })
              let data = await response.json()
              setRole(data.role)
              setCompany(data.company)
              setArea(data.area)
              setStartDate(data.startDate)
              setEndDate(data.endDate)
              setDescription(data.description)
              setImageUrl(data.imageUrl)
            }
      } catch (error) {
          console.log(error , "errrrrrr");
      }
  }
  useEffect(()=>{
    getExp()
  },[props.expid])

  return (
    <Modal
      {...props}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered>
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter'>
          Edit Experiance
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
            <Form.Label>Role</Form.Label>
            <Form.Control
              type='text'
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
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
            />
          </Form.Group>
          <Button
            type='submit'
            variant='primary'
            className='mb-3'
            onClick={editingIt}>
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

export default EditExperience

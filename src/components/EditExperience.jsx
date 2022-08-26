/** @format */

import React, { useState } from "react"
import { useEffect } from "react"
import { Button, Container, Form, Modal } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { Link, useParams } from "react-router-dom"
import { getUserExpById } from "../redux/actions"

const EditExperience = (props) => {
  //console.log(props)
  let id = useParams()._id
  const oneOfExp = useSelector(
    (state) => state.singleExperience.singleExperiences
  )
  //const myProfile = useSelector((state) => state.myProfile.profileData)
  const myProfile = useSelector((state) => state.logUser.loginData)
  const dispatch = useDispatch()

  const [role, setRole] = useState("")
  const [company, setCompany] = useState("")
  const [area, setArea] = useState("")
  const [startDate, setStartDate] = useState("")
  const [endDate, setEndDate] = useState("")
  const [description, setDescription] = useState("")
  const [imageUrl, setImageUrl] = useState("")
  const [expImg, setExpImg] = useState("")
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

      image: expImg,
    }
    //console.log(blog)

    try {
      let response = await fetch(
        `${process.env.REACT_APP_URL}/users/${props.user_id}/experiences/${props.singleexp._id}`,
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
      let data = await response.json()
      // console.log(data)
      // alert("SUCCED! reload the page for update")
      dispatch(getUserExpById(myProfile._id))
    } catch (err) {
      console.log(err, "AGHA rouzbeh error")
    }
    if (
      role === "" ||
      company === "" ||
      area === "" ||
      startDate === "" ||
      endDate === "" ||
      description === ""
    ) {
      alert("fill the required fields!")
    } else {
      console.log(blog)
      console.log(myProfile._id)

      try {
        let response = await fetch(
          `${process.env.REACT_APP_URL}/users/${props.user_id}/experiences/${props.expid}`,
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
        // alert("your experience succesfully edited!")
        // window.location.reload()
      } catch (err) {
        console.log(err, "errrrrr")
        alert("Back-end Error!")
      }
    }
  }
  // const getExp = async () => {
  //   try {
  //     if (props.expid !== "") {
  //       let response = await fetch(
  //         `${process.env.REACT_APP_URL}/users/${props.user_id}/experiences/${props.expid}`,
  //         {
  //           method: "GET",
  //           headers: {
  //             "Content-Type": "application/json",
  //             Accept: "application/json",
  //           },
  //         }
  //       )
  //       let data = await response.json()
  //       setRole(data.role)
  //       setCompany(data.company)
  //       setArea(data.area)
  //       setStartDate(data.startDate)
  //       setEndDate(data.endDate)
  //       setDescription(data.description)
  //       setImageUrl(data.imageUrl)
  //     }
  //   } catch (error) {
  //     console.log(error, "errrrrrr")
  //   }
  // }

  const addImage = async (e) => {
    const str = e.target.files[0]
    let url = `${process.env.REACT_APP_URL}/files/cloudinary`
    var formData = new FormData()
    formData.append("image", str)
    var requestOptions = {
      method: "POST",
      body: formData,
    }
    try {
      let res = await fetch(url, requestOptions)
      let data = await res.json()
      //console.log(data)
      setImageUrl(data.url)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    //getExp()
  }, [props])

  return (
    <Modal {...props} size='lg' aria-labelledby='contained-modal-title-vcenter'>
      <Modal.Header className='d-flex'>
        <Modal.Title id='contained-modal-title-vcenter'>
          Edit Experiance
        </Modal.Title>
        <i className='bi bi-x-lg' onClick={props.onHide}></i>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className='mb-3 col-12 d-flex '>
            <Form.Label className='col-4'>Role</Form.Label>
            <Form.Control
              className='col-8'
              size='sm'
              type='text'
              defaultValue={props.singleexp.role}
              onChange={(e) => setRole(e.target.value)}
            />
          </Form.Group>
          <Form.Group className='mb-3 col-12 d-flex'>
            <Form.Label className='col-4'>Company</Form.Label>
            <Form.Control
              className='col-8'
              size='sm'
              type='text'
              placeholder='Company Name'
              defaultValue={props.singleexp.company}
              onChange={(e) => setCompany(e.target.value)}
            />
          </Form.Group>
          <Form.Group className='mb-3 col-12 d-flex'>
            <Form.Label className='col-4'>Area</Form.Label>
            <Form.Control
              className='col-8'
              size='sm'
              type='text'
              placeholder='Name Of City-Country'
              defaultValue={props.singleexp.area}
              onChange={(e) => setArea(e.target.value)}
            />
          </Form.Group>
          <Form.Group className='mb-3 col-12 d-flex'>
            <Form.Label className='col-4'>start Date</Form.Label>
            <Form.Control
              className='col-8'
              size='sm'
              type='date'
              placeholder='Started-Date'
              defaultValue={props.singleexp.startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </Form.Group>
          <Form.Group className='mb-3 col-12 d-flex'>
            <Form.Label className='col-4'>End Date</Form.Label>
            <Form.Control
              className='col-8'
              size='sm'
              type='date'
              placeholder='Finish-Date'
              defaultValue={props.singleexp.endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </Form.Group>
          <Form.Group className='mb-3 col-12 d-flex'>
            <Form.Label className='col-4'>Description</Form.Label>
            <Form.Control
              className='col-8'
              size='sm'
              type='text'
              placeholder='Desc'
              defaultValue={props.singleexp.description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Form.Group>
          <Form.Group className='mb-3 col-12 d-flex'>
            <Form.Label className='col-4'>ImageUrl</Form.Label>
            <Form.Control
              className='col-8'
              type='text'
              size='sm'
              defaultValue={imageUrl}
            />
          </Form.Group>
          <Form.Group className='mb-3 col-12 d-flex'>
            <Form.Label className='col-4'>Add image</Form.Label>
            <Form.Control className='col-8' type='file' onChange={addImage} />
          </Form.Group>

          <Button
            type='submit'
            variant='primary'
            className='mb-3 col-8 btn-block mx-auto'
            onClick={editingIt}>
            Save
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer></Modal.Footer>
    </Modal>
  )
}

export default EditExperience

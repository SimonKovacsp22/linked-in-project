/** @format */

import React, { useEffect, useState } from "react"
import { Col, Row } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import Moment from "moment"
import "../style/ExperianceItem.css"
import EditExperience from "./EditExperience"
import { getSingletUserExpById, getUserExpById } from "../redux/actions"
import { useParams } from "react-router-dom"

const ExperianceItem = ({ user_id, isAdmin }) => {
  const pplExp = useSelector((state) => state.userIdExp.singleUserExperiences)
  //console.log(user_id, isAdmin, pplExp)
  const [modalShow, setModalShow] = React.useState(false)
  const [expId, getExpId] = useState("")
  const dispatch = useDispatch()

  let id = useParams()._id

  const deleteExp = async (theId) => {
    try {
      let response = await fetch(
        `${process.env.REACT_APP_URL}/users/${user_id}/experiences/${theId}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      )
      let data = await response.json()
      // alert("Experience Succesfully deleted!")
      // window.location.reload()
      dispatch(getUserExpById(user_id))
    } catch (error) {
      console.log(error)
    }
  }

  // useEffect(() => {

  // }, [])
  return (
    <div className='experiance-div mt-2'>
      {pplExp && pplExp.length <= 0 ? (
        <p>Add your experience</p>
      ) : (
        pplExp.map((singleExp, i) => (
          <Row key={i} className='pt-3 experiance-item'>
            <Col sm={2} className='p-1 text-center'>
              <img
                className='experiance-image m-auto'
                src={
                  singleExp.imageUrl
                    ? singleExp.imageUrl
                    : "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png"
                }
                alt=''
                height={50}
              />
            </Col>
            <Col sm={8} className='px-0'>
              <h5 className='ml-md-3 ml-lg-3'>
                <b>{singleExp.company}</b>
              </h5>
              <span className='changeTheFont'>
                <div className='ml-md-3 ml-lg-3 ml-sm-4 ml-3'>
                  <b>{singleExp.role}</b>
                </div>
                <div className='text-muted ml-md-3 ml-lg-3 ml-sm-4 ml-3'>
                  {Moment(singleExp.startDate).format("MMM Do YY")}-
                  {Moment(singleExp.endDate).format("MMM Do YY")}
                </div>
                <p className='text-muted ml-md-3 ml-lg-3 ml-sm-4 ml-3'>
                  {singleExp.area}
                </p>
                <p className='ml-md-3 ml-lg-3 ml-sm-4 ml-3'>
                  {singleExp.description}
                </p>
              </span>
              <hr style={{ width: "100%" }} />
            </Col>
            <Col sm={2}>
              {isAdmin ? (
                <div className='d-flex align-items-center'>
                  <img
                    alt='delete-image'
                    src='https://img.icons8.com/external-inkubators-gradient-inkubators/25/000000/external-delete-email-inkubators-gradient-inkubators.png'
                    className='mr-1'
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      // getExpId(singleExp._id)
                      console.log("this is profile id")
                      console.log(user_id)
                      console.log("this is exp id")
                      console.log(singleExp._id)
                      deleteExp(singleExp._id)
                    }}
                  />
                  <i
                    className='bi bi-pen'
                    onClick={() => {
                      dispatch(getSingletUserExpById(user_id, singleExp._id))
                      console.log("this is profile id")
                      console.log(user_id)
                      console.log("this is exp id")
                      console.log(singleExp._id)
                      getExpId(singleExp._id)
                      setModalShow(true)
                    }}
                    style={{ cursor: "pointer" }}></i>
                </div>
              ) : (
                ""
              )}
            </Col>
            <EditExperience
              show={modalShow}
              expid={expId}
              user_id={user_id}
              singleexp={singleExp}
              onHide={() => setModalShow(false)}
            />
          </Row>
        ))
      )}
    </div>
  )
}
export default ExperianceItem

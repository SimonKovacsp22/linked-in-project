/** @format */

import { Col, Container, Row } from "react-bootstrap"
import "../style/Experience.css"
import ExperianceItem from "./ExperianceItem"
import { useDispatch } from "react-redux"
import React, { useEffect } from "react"
import { getUserExpById } from "../redux/actions"
import AddExperiance from "./AddExperiance"
import { Link, useParams } from "react-router-dom"


const Experiance = ({ id, isAdmin }) => {

  const theId = useParams()._id
  const downloadCSV = async () => {
    try {
        let response = await fetch(`${process.env.REACT_APP_URL}/files/CSV/${theId}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            }
        })
        let data = await response.json()
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}
  const [modalShow, setModalShow] = React.useState(false)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getUserExpById(id))
  }, [id])
  return (
    <Container>
      <Row>
        <Col
          lg={12}
          style={{ backgroundColor: "white", height: "auto" }}
          className={"lineHeight"}>
          <Col lg={12} className='border-bottom'>
            <h5 className='mt-3 d-flex justify-content-between'>
              <span>Experience</span>
              {isAdmin ? (
                <span>
                  <i
                    className='bi bi-plus-square pr-3'
                    onClick={() => setModalShow(true)}
                    style={{ cursor: "pointer" }}></i>
                  <AddExperiance
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                  />
                </span>
              ) : (
                ""
              )}
            </h5>
          </Col>
          <Col className='experiance-container'>
            <ExperianceItem userId={id} isAdmin={isAdmin} />
          </Col>
        </Col>
        <Col>
        <button className="button-86 ml-auto mr-auto mb-4" onClick={()=>{downloadCSV()}}>Download exps<br/> as a CSV file!</button>
        </Col>
      </Row>
    </Container>
  )
              }
export default Experiance

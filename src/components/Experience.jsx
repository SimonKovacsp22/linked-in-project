/** @format */

import { Col, Container, Row } from "react-bootstrap"
import "../style/Experience.css"
import ExperianceItem from "./ExperianceItem"
import { useDispatch } from "react-redux"
import React, { useEffect } from "react"
import { getUserExpById } from "../redux/actions"
import AddExperiance from "./AddExperiance"

const Experiance = ({ id, isAdmin }) => {
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
      </Row>
    </Container>
  )
}
export default Experiance

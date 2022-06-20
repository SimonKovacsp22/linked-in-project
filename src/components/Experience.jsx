import { Col, Container, Row } from 'react-bootstrap';
import '../style/Experience.css';
import ExperianceItem from './ExperianceItem';
import { useDispatch } from "react-redux";
import { useEffect } from 'react';
import { getUserExpById } from '../redux/actions';


const Experiance = ({ id }) => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getUserExpById(id))
    }, [id])
    return (
        <Container>
            <Row>
                <Col lg={12} style={{ backgroundColor: 'white', height: "auto" }} className={'lineHeight'}>
                    <Col lg={12} className="border-bottom">
                        <h5 className='mt-3'>Experience</h5>
                    </Col>
                    <Col className='experiance-container'>
                        <ExperianceItem />
                    </Col>

                </Col>
            </Row>

        </Container>
    )
}
export default Experiance;
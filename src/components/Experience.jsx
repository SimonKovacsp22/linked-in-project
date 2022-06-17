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
    }, [])
    return (
        <Container>
            <Row className='mt-2'>
                <Col lg={10} style={{ backgroundColor: 'white' }} className={'lineHeight'}>
                    <Col lg={12}>
                        <h5 className='mt-3'>Experience</h5>
                    </Col>
                    <ExperianceItem />
                </Col>
            </Row>

        </Container>
    )
}
export default Experiance;
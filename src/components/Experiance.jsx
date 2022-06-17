import { Col, Container, Row } from 'react-bootstrap';
import '../style/Experiance.css';
import ExperianceItem from './ExperianceItem';
import { useDispatch } from "react-redux";
import { useEffect } from 'react';
import { getUserExpById } from '../Redux/Actions';

const Experiance = () => {
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getUserExpById('5fc4af46b708c200175de88f'))
    },[])
    return (
        <Container>
            <Row className='mt-2'>
                <Col lg={10} style={{ backgroundColor: 'white' }} className={'lineHeight'}>
                    <Col lg={12}>
                        <h5 className='mt-3'>Experience</h5>
                    </Col>
                    <ExperianceItem/>
                </Col>
            </Row>

        </Container>
    )
}
export default Experiance;
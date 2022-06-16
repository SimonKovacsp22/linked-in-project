import { Col, Container, Row } from 'react-bootstrap';
import '../style/Experiance.css';
import ExperianceItem from './ExperianceItem';

const Experiance = () => {
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
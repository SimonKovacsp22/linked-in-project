
import { Col, Container, Row } from 'react-bootstrap';
import '../style/Experience.css';

const Experiance = () => {
    return (
        <Container>
            <Row className='mt-2'>
                <Col style={{ backgroundColor: 'white' }} className={'lineHeight'}>
                    <div className='px-3 mt-3'>
                        <h4>Experience</h4>
                        <p><span><i className="bi bi-eye-fill mr-2"></i></span><span>Private to you</span></p>
                    </div>
                    <Row>
                        <Col sm={1}>
                            <img src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-674010.jpg&fm=jpg" alt="" height={60} className='ml-3' />
                        </Col>
                        <Col sm={11}>
                            <div><b>Docente de Español</b></div>
                            <span className='changeTheFont'>
                                <div>Rochester School</div>
                                <div className='text-muted'>Aug 2016 - Jun 2018 · 1 yr 11 mos</div>
                                <p className='text-muted'>Chía, Cundinamarca.</p>
                                <p>Encargado de la enseñanza del español como lengua materna en el nivel de Middle School.
                                    Coordinador de grupo.</p>
                            </span>
                        </Col>
                        <Col sm={11}>
                        </Col>
                    </Row>
                </Col>
            </Row>

        </Container>
    )
}
export default Experiance;
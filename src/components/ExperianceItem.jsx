import { useEffect } from "react";
import { Col, Row } from "react-bootstrap"
import { useSelector } from "react-redux";
import Moment from 'moment';
import "../style/ExperianceItem.css"


const ExperianceItem = () => {
    const pplExp = useSelector((state) => state.userIdExp.singleUserExperiences);

    useEffect(() => {
        console.log(pplExp);
    }, [])
    return (
        <div className="experiance-div mt-2">
            {pplExp.map((singleExp, i) => (
                <Row key={i} className='pt-3 experiance-item'>
                    <Col sm={1} className="p-1">
                        <img className="experiance-image m-auto" src={singleExp.image ? singleExp.image : "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png"} alt="" height={50} />
                    </Col>
                    <Col sm={10}>
                        <div className="ml-md-3 ml-lg-3 ml-sm-4"><b>{singleExp.area}</b></div>
                        <span className='changeTheFont'>
                            <div className="ml-md-3 ml-lg-3 ml-sm-4 ml-3">{singleExp.company}</div>
                            <div className='text-muted ml-md-3 ml-lg-3 ml-sm-4 ml-3'>{Moment(singleExp.startDate).format("MMM Do YY")}</div>
                            <p className='text-muted ml-md-3 ml-lg-3 ml-sm-4 ml-3'>{singleExp.role}</p>
                            <p className="ml-md-3 ml-lg-3 ml-sm-4 ml-3">{singleExp.description}</p>
                        </span>
                        <hr style={{ width: '100%' }} />
                    </Col>
                </Row>
            ))}
        </div>
    )
}
export default ExperianceItem;
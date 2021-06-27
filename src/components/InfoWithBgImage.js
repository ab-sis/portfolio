import { Row, Col } from "reactstrap";


export function InfoWithBgImage(props) {
    return (
        <Row className="m-0">
        <Col className="p-0">
            <div className="position-relative">
                <img className={"img-fluid " + (props.imageFilterClass || "")} src={props.image} alt="itachi" />
                <div className={"top-left-text-overlay text-black " + (props.headingAnimationEffectClass || "")}></div>
            </div>

        </Col>
    </Row>
    )
    
}

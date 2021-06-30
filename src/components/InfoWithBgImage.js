import { Row, Col } from "reactstrap";


export function InfoWithBgImage(props) {
    return ( 
    <Row className = "m-0" >
        <Col className = "p-0" >
        <div className = "position-relative" >
        <img id = "homeImage"className = { "img-fluid sectionImages " + (props.imageFilterClass || "") }
        src = { props.image }
        alt = "itachi" />
        <div className = { "top-left-heading-overlay pl-2 " + (props.headingAnimationEffectClass || "") } > </div>  
        <div className = { "top-left-text-overlay pl-2 " + (props.textAnimationEffectClass || "") } > </div > 
        <div className = { "top-left-anime-overlay pl-2 " + (props.animeAnimationEffectClass || "") } > </div> 
        <div className = { "top-left-gamer-overlay pl-2 " + (props.gamerAnimationEffectClass || "") } > </div> 
        </div >
        </Col>
    </Row>
    )
}
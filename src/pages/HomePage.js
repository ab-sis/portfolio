import homePage from "../assets/images/homePage.jpg"
import { Row, Col } from "reactstrap";

export function HomePage() {

    return ( 
    <div>
        <Row className = "m-0" >
            <Col className = "p-0" >
                <div className = "position-relative" >
                    <img id="homeImage"className = { "img-fluid sectionImages filter-effect"}
                    src = {homePage}
                    alt = "itachi" />
                    <div className = { "top-left-heading-overlay pl-2 home-page-name"}> </div>  
                    <div className = { "top-left-text-overlay pl-2 home-page-frontend-dev"}> </div > 
                    <div className = { "top-left-anime-overlay pl-2 home-page-anime-overlay"}> </div> 
                    <div className = { "top-left-gamer-overlay pl-2 home-page-gamer-overlay"}> </div> 
                </div >
            </Col>
        </Row>
    </div>
    )
}
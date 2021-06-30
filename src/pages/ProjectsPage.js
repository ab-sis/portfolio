import projects from "../assets/images/projects.jpg"
import microClicker from "../assets/images/microClicker.jpg"
import { Row, Col } from "reactstrap";

export function ProjectsPage() {

    return ( 
    <div>
        <Row className = "m-0" >
            <Col className = "p-0" >
                <div className = "position-relative" >
                    <img id="homeImage"className = { "img-fluid sectionImages"}
                    src = {projects}
                    alt = "itachi" />
                </div >
            </Col>
        </Row>

        <div className="position-static">
            <form>
                <input type="radio" name="fancy" autofocus value="clubs" id="clubs" />
                <input type="radio" name="fancy" value="hearts" id="hearts" />
                {/* <input type="radio" name="fancy" value="spades" id="spades" /> */}
                {/* <input type="radio" name="fancy" value="diamonds" id="diamonds" />			 */}
                <label for="clubs" className="m-0">
                        <img 
                        id="projectImg-1" className="img-fluid sectionImages"
                        src = {microClicker}
                        alt = "itachi" /> 
                </label>
                <label for="hearts">&#9829; Hearts</label>
                {/* <label for="spades">&#9824; Spades</label> */}
                {/* <label for="diamonds">&#9830; Diamonds</label> */}
            </form>
        </div>
    </div>
    )
}
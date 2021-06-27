import { Row, Col } from "reactstrap";
import sample from "../assets/images/sample.jpg"
import {InfoWithBgImage} from "../components/InfoWithBgImage"

export function HomePage() {
    return (
        <div>
            <InfoWithBgImage image={sample} imageFilterClass="filter-effect" headingAnimationEffectClass="home-page-name"/>
        </div>
    )
}

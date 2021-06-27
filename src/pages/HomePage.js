import sample from "../assets/images/sample.jpg"
import {InfoWithBgImage} from "../components/InfoWithBgImage"

export function HomePage() {
    
    return (
        <div>
            <InfoWithBgImage image={sample} imageFilterClass="filter-effect" headingAnimationEffectClass="home-page-name" textAnimationEffectClass="home-page-frontend-dev" animeAnimationEffectClass="home-page-anime-overlay" gamerAnimationEffectClass="home-page-gamer-overlay" />
        </div>
    )
}

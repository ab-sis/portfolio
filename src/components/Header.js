import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import { HomePage } from '../pages/HomePage';

export function Header() {
  return (
    <Router>
      <div className="d-flex flex-row-reverse justify-content-center pb-3 fixed-top">
        <div>
          <Link className="position-absolute header-link-text" to="/">Home</Link>
          <div className="trapezoid-inverted">
          </div>
        </div>

        <div>
          <Link className="position-absolute header-link-text" to="/about">About</Link>
          <div className="trapezoid">
          </div>
        </div>
        <div>
          <Link className="position-absolute header-link-text" to="/topics">Topics</Link>
          <div className="trapezoid-inverted">
          </div>
        </div>
      </div>


      <Switch>
        <Route path="/about">
        </Route>
        <Route path="/topics">
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
}

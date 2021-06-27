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
        <div className="order-3">
          <Link className="position-absolute header-link-text " to="/">Home</Link>
          <div className="trapezoid-inverted">
          </div>
        </div>

        <div className="order-2">
          <Link className="position-absolute header-link-text" to="/projects">Projects</Link>
          <div className="trapezoid">
          </div>
        </div>
        <div className="order-1">
          <Link className="position-absolute header-link-text" to="/topics">Topics</Link>
          <div className="trapezoid-inverted">
          </div>
        </div>
      </div>

      <Switch>
        <Route path="/projects">
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

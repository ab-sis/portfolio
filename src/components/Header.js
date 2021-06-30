import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import { HomePage } from '../pages/HomePage';
import { ProjectsPage } from '../pages/ProjectsPage';
import React, { useState } from 'react';

export function Header(props) {
  const [currentPage, setCurrentPage] = useState(props.history.location.pathname);
  return (
    <Router key={"route-" + currentPage}>
      <div className="d-flex flex-row-reverse justify-content-center pb-3 fixed-top">
        <div className="order-3" onClick={() => setCurrentPage("/")}>
          <Link to="/">
            <span className="position-absolute header-link-text ">Home</span>
            <div className={"trapezoid-inverted " + (currentPage === "/" ? "trapezoid-inverted-active" : "")}></div>
          </Link>          
        </div>
        <div className="order-2" onClick={() => setCurrentPage("/projects")}>
          <Link to="/projects">
            <span className="position-absolute header-link-text">Projects</span>
            <div className={"trapezoid " + (currentPage === "/projects" ? "trapezoid-active" : "")}></div>  
          </Link>
        </div>
        <div className="order-1" onClick={() => setCurrentPage("/topics")}>
          <Link to="/topics">
            <span className="position-absolute header-link-text">Topics</span>
            <div className={"trapezoid-inverted " + (currentPage === "/topics" ? "trapezoid-inverted-active" : "")}></div>  
          </Link>
        </div>
      </div>

      <Switch>
        <Route path="/projects">
          <ProjectsPage/>
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

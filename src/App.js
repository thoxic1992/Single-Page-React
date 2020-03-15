import React from 'react';
import HomePage from './pages/Home';
import {HashRouter as Router, Route, Switch, Link, Redirect, withRouter} from 'react-router-dom';

const PageNotFound = () => {
  return <div>404 - page not found</div>;
};

const Post = withRouter(
  (props) => {
    return <React.Fragment>
      <div>Post</div>
      <div>{props.match.params.postSlug}</div>
      <Link to="/">wróć do home</Link>
    </React.Fragment>;
  }
);

function MainApp () {
  return (
    <div className="app">

      <Router>
        <Switch>

          <Route path="/" exact>
            <HomePage />
          </Route>

          <Route path="/blog" exact>
            <HomePage />
          </Route>

          <Route path="/blog/:postSlug" exact>
            <Post />
          </Route>

          <Route path="/*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default MainApp
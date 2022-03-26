import Navbar from './Navbar';
import Footer from './footer'
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';
import Archives from './Archives';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';
import React from 'react';
import { useAlert } from 'react-alert';
import { useTranslation } from 'react-i18next';

// https://www.youtube.com/watch?app=desktop&v=QmKnaHNW9ps For translation

function App() {

  const { t } = useTranslation();

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>

            <Route exact path="/">
              <Home />
            </Route>

            <Route exact path="/?lng=es">
              <Home />
            </Route>

            <Route exact path="/?lng=en">
              <Home />
            </Route>

            <Route path="/archives">
              <Archives />
            </Route>

            <Route path="/create">
              <Create />
            </Route>

            <Route path="/blogs/:id">
              <BlogDetails />
            </Route>

            <Route path="*">
              <NotFound />
            </Route>

          </Switch>
          <Footer>
            <Create />
          </Footer>
        </div>
      </div>
    </Router>
  );
}

export default App;

// const title = 'Welcome to the new blog';
// const likes = 50;
// const link = "http://www.google.com";
// <h1>{title}</h1>
// <p>Liked {likes} times</p>
// <p>Random number: {Math.random() * 10} </p>
// <a href={link} target="_blank">Google Site</a>

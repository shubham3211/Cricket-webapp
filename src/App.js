import React from 'react';
import './App.css';
import Home from './components/Home/Home';
import TopBar from './components/Topbar/Topbar';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { CricketAppContext } from './CricketAppContext';
import Article from './components/Article/Article';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Router>
        <CricketAppContext>
          <Route path="/" component={TopBar} />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/post/:id" exact component={Article} />
              <Route path="/*">
                <Redirect to="/" />
              </Route>
            </Switch>
          <Route path="/" component={Footer} />
        </CricketAppContext>
      </Router>
    </>
  );
}

export default App;

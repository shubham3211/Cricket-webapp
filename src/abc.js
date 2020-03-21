import React from 'react';
import './App.css';
import Home from './components/Home/Home';
import TopBar from './components/Topbar/Topbar';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { CricketAppContext } from './CricketAppContext';
import Article from './components/Article/Article';
import Footer from './components/Footer/Footer';


function ContextRoute({ContextComponent, Component, ...rest}){
  console.log('...rest :', {...rest});
  return (
    <Route {...rest}>
      <ContextComponent>
        <Component location={rest.location} match={rest.computedMatch} />
      </ContextComponent>
    </Route>
  )
}

function App() {
  return (
    <>
      <Router>
        <Route path="/" component={TopBar} />
          <Switch>
            <ContextRoute path="/" exact Component={Home} ContextComponent={CricketAppContext} />
            <ContextRoute path="/post/:id" exact Component={Article} ContextComponent={CricketAppContext} />
            <Route path="/*">
              <Redirect to="/" />
            </Route>
          </Switch>
        <Route path="/" component={Footer} />
      </Router>
    </>
  );
}

export default App;

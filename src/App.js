import React from 'react';
import './App.css';
import Header from './Header'
import Login from './Login'
import Dashboard from './components/pages/Dashboard'
import Detail from './components/pages/Detail'
import Platform from './components/pages/Platform';
import Charttypes from './components/pages/Charttypes';
import LineChart from './components/pages/LineChart';
import PieChart from './components/pages/PieChart';
import ComparativeChart from './components/pages/ComparativeChart';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import AddItem from "./components/items/AddItem";
import EditItem from "./components/items/EditItem";

function App() {

  return (

    <div className="app">
      <Router>
      <Header />
        <Switch>
          <Route exact path="/">
            <Dashboard/>
          </Route>
          <Route exact path="/detail">
            <Detail/>
          </Route>
          <Route exact path="/platform">
            <Platform/>
          </Route>
          <Route exact path="/chartTypes">
            <Charttypes/>
          </Route>
          <Route exact path="/chart">
            <LineChart/>
          </Route>
          <Route exact path="/pie">
           <PieChart/>
          </Route>
          <Route exact path="/comparison">
           <ComparativeChart/>
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
        </Switch>
        <Switch>
          <Route exact path="/items/add"> <AddItem /> </Route>
        </Switch>
        <Switch>
          <Route exact path="/items/edit/:id"><EditItem /></Route>
        </Switch>
        {/* <Switch>
          <Route exact path="/items/:id"><Item /></Route>
        </Switch> */}

      </ Router>
    </div>
  );
}

export default App;

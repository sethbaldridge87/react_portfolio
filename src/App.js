import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import History from './pages/History';
import References from './pages/References';
import Contact from './pages/Contact';
import TopNav from './components/TopNav';
import './App.css';

function App() {
  return (
    <Router>
      <TopNav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/history" component={History} />
        <Route exact path="/references" component={References} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
    </Router>
  );
}

export default App;

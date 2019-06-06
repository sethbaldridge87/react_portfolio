import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Education from './pages/Education';
import History from './pages/History';
import References from './pages/References';
import TopNav from './components/TopNav';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <TopNav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/education" component={Education} />
        <Route exact path="/history" component={History} />
        <Route exact path="/references" component={References} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;

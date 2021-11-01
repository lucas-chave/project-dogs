import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Components/Home';
import Login from './Components/Login/Login';
import './App.css';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
          </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom'
import './App.css';
import Header from './Components/Header.js'
import HomePage from './Components/HomePage.js'
import PlantDiary from './Components/PlantDiary.js'
import NovelFinds from './Components/NovelFinds.js'
import TurboTyping from './Components/TurboTyping.js'
import Footer from './Components/Footer.js'

class App extends Component {
  render() {
    return (
      <div>
      <Header />
      <Switch>
        <Route path="/plant-diary" component={PlantDiary}/>
        <Route path="/novel-finds" component={NovelFinds}/>
        <Route path="/turbo-typing" component={TurboTyping}/>
        <Route path="/" component={HomePage}/>
      </Switch>
      <Footer />
      </div>
    );
  }
}

export default App;

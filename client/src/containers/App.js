import React, { Component } from 'react';
import MessageBoardPage from './MessageBoardPage';
import { 
  BrowserRouter as Router, 
  Route 
} from 'react-router-dom';
import NavBar from '../components/NavBar';
import Home from '../components/Home';
import '../App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Route exact path="/" component={Home} />
          <Route path='/messages' component={MessageBoardPage}/>
        </div>
      </Router>
    );
  }
}

export default App;
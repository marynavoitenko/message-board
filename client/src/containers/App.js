import React, { Component } from 'react';
import MessageBoardPage from './MessageBoardPage';
import { 
  BrowserRouter as Router, 
  Route 
} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" render={() => <div>Home</div>} />
          <Route path='/messages' component={MessageBoardPage}/>
        </div>
      </Router>
    );
  }
}

export default App;
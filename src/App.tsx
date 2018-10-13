import * as React from 'react';
import { Route } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Commands from './Components/Commands/Commands.Component';
import Footer from './Components/Footer/Footer.Component';
import HomePage from './Components/HomePage/HomePage.Component';
import NavBar from './Components/NavBar/NavBar.Component';

interface IState {
  index: number;
}

class App extends React.Component<{}, IState> {

  public render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route path="*" component={NavBar} />
            <Route path="/commands" component={Commands} />
            <Route path="/profile" />
            <Route path="/login" />
            <Route exact={true} path="/" component={HomePage} />
            <Route path="*" component={Footer} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;

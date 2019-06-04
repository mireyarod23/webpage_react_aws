import React, { Component } from 'react';
import  { BrowserRouter as Router, Route, Switch, Link  } from 'react-router-dom';
import { Home } from './Home';
import { Contact } from './Contact';
import { Projects } from './Projects';
import { Skills } from './Skills';
import { Layout } from './components/Layout';
import { NavigationBar } from './components/NavigationBar';
import { Jumbotron } from './components/Jumbotron';
import { Professional_tab } from './components/Professional_tab';
import { Personal_tab } from './components/Personal_tab';

class App extends Component {
 render() {
  return (
    <React.Fragment>
      <NavigationBar/>
      {/* <Jumbotron />      */}
        <Router>
          {/* <Layout> */}
          <Switch>
            <Route exact path="/" component= {Home} />
            <Route path="/Projects" component= {Projects} />
            <Route path="/Skills" component= {Skills} />
            <Route path="/Contact" component= {Contact} />
            
          </Switch>   
          {/* </Layout>     */}
        </Router>
    </React.Fragment>
    );
  }
}

export default App;

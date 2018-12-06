import React, { Component } from 'react';
import { Route,Switch } from 'react-router-dom';
import Todo from '../component/todo/todo'
import Layout from '../component/container/layout'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import './App.scss';

library.add(faArrowDown)

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <Switch>
            <Route path='/' exact component={Todo}/>
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;

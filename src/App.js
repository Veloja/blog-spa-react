import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';


import './App.css';
import Posts from './components/Posts';
import FullPost from './components/FullPost';
import NewPost from './components/NewPost';


class App extends Component {

  render() {
    return(
      <BrowserRouter>
        <div>
          <Route path='/' exact component={Posts} />
          <Route path='/addPost' exact component={NewPost} />
          <Route path='/posts/:id' exact component={FullPost} />
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
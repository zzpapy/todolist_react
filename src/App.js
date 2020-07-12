import React, {Component} from 'react';
import AppTodoList from './components/AppTodoList'
import './App.css';

class App extends Component {
  render(){
    return (
      <main>
        <div id="error"></div>
        <AppTodoList/>
        
      </main>
    );

  }
}

export default App;

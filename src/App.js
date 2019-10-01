import React from 'react';
import './App.css';
import api from './services/api';
import UsersModel from './models/usersModel';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      dataArray: []

    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.getUser(this.refs.username.value);
  }

  getUser(username) {
    api(username)
      .then((res) => {
        this.setState({dataArray: res.data});
      }).catch((error) => {
        console.log(error);
      })
  }

  render() {
    return (
      <div className="App">
        <div className="login">
          <form onSubmit={e => this.handleSubmit(e)}>
            <input ref="username" type="text" placeholder="username" required />
            <input className ="submit" type="submit" value="buscar"/>
          </form>
        </div>       
        <UsersModel repo = {this.state.dataArray}/>
      </div>
    );
  }
}

export default App;

import React from 'react';
import './App.css';
import { render } from '@testing-library/react';
import { Component } from 'react';


class App extends Component {
  state = {
    users: []
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then((data) => {
      this.setState({users: data })
      console.log(this.state.users)
    })
    .catch(console.log)
  }
  
  render(){
    return (
     // your jsx code
     <div className="container">
     <div className="col-xs-12">
     <h1>USER APP</h1>
     {this.state.users.map((users) => ( 
     <div className="card">
    <div className="card-body">
     <h5 className="card-title">{users.name}</h5>
     <h6 className="card-subtitle mb-2 text-muted">
     <span>
      username =
      </span>  { users.username}
      
     </h6>
     </div>
     </div>
  
     ))}
     </div>
    </div>
    );
    }
} 
export default App;

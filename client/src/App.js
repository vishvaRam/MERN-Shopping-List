import React, { Component } from 'react';
import Header from './Components/header';
import ShoppingList from './Components/ShoppingList'; 

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header/>
        <ShoppingList/>
      </React.Fragment>
    )
  }
}

export default App;
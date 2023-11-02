import React, { Component } from 'react';
import MyContext from './MyContext';

class MyProvider extends Component {
  constructor(props) {
    super(props);
    this.state = { // global state
      // variables
      token: '',
      // Lab-7:  
      mycart:[],
      customer: null,
      // functions
      setToken: this.setToken,
      setCustomer: this.setCustomer,
      // Lab-7: 
      setMycart: this.setMycart
    };
  }
  setToken = (value) => 
  {
    this.setState({ token: value });
  }
  setCustomer = (value) => 
  {
    this.setState({ customer: value });
  }
  // Lab-7: 
  setMycart = (value) => 
  {
    this.setState({ mycart: value });
  }


  render() {
    return (
      <MyContext.Provider value={this.state}>
        {this.props.children}
      </MyContext.Provider>
    );
  }
}
export default MyProvider;

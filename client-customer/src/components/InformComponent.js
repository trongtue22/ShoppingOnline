// import React, { Component } from 'react';

// class Inform extends Component {
//   render() {
//     return (
//       <div className="border-bottom">
//         <div className="float-left">
//           <a href="">Login</a> | <a href="">Sign-up</a> | <a href="">Active</a>
//         </div>
//         <div className="float-right">
//           <a href="">My cart</a> have <b>0</b> items
//         </div>
//         <div className="float-clear" />
//       </div>
//     );
//   }
// }
// export default Inform;


import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// Lab - 6
import MyContext from '../contexts/MyContext';
class Inform extends Component {
  static contextType = MyContext; // using this.context to access global state
  render() {
    return (
      <div className="border-bottom">
        <div className="float-left">
              {/* <Link to=''>Login</Link> | <Link to=''>Sign-up</Link> | <Link to=''>Active</Link> */}
              {/* <Link to=''>Login</Link> | <Link to='/signup'>Sign-up</Link> | <Link to='/active'>Active</Link> */}
          {this.context.token === '' ?
          <div><Link to='/login'>Login</Link> | <Link to='/signup'>Sign-up</Link> | <Link to='/active'>Active</Link></div>
          :
          <div>Hello <b>{this.context.customer.name}</b> | <Link to='/home' onClick={() => this.lnkLogoutClick()}>Logout</Link> | < Link to ='/myprofile'> My profile </ Link > | <Link to='/myorders'>My orders</Link></div>
          }

        </div>
        <div className="float-right">
        
        {/* <Link to=''>My cart</Link> have <b>0</b> items */}
         {/* <Link to='/mycart'>My cart</Link> have <b>{this.context.mycart.length}</b> items */}
         <Link to='/mycart'>My cart</Link> have <b>{this.context.mycart.length}</b> items
        
        </div>
        <div className="float-clear" />
      </div>
    );
  }
  // Lab-6 
  lnkLogoutClick() {
    this.context.setToken('');
    this.context.setCustomer(null);
    this.context.setMycart([]);
  }
}
export default Inform;

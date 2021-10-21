import React from 'react';
import ReactDOM from 'react-dom';

const App = props => {
         return (
                  <div>
                           <BankAccount />
                  </div>
         )
}

class BankAccount extends React.Component {
         constructor(props) {
                  super(props);
                  this.state={
                           savings: {
                                    accountBalance: 36.00
                           },
                           checking: {
                                    accountBalance: 369.00
                           }
                  }
         }
         render() {
                  return (
                           <div>
                                    <h3>Account Balance: {this.state.savings.accountBalance}</h3>
                                    <h3>Checking Balance: {this.state.checking.accountBalance}</h3>
                           </div>
                  )
         }
}

ReactDOM.render(<App/>, document.getElementById('root'));







// ex 4.2
// const App= props => {
//          return(
//                   <div>
//                            <Hello name="Sylphrena" />
//                            <Hello name="Kvothe" />
//                            <Hello name="Illidan" />  
//                   </div>
//          )
// }

// class Hello extends React.Component{
//          render() {
//                   return(
//                            <div>
//                                     <h1>Salutations, {this.props.name}!!!</h1>
//                            </div>
//                   )
//          }
// }

// ReactDOM.render(<App/>, document.getElementById('root'))
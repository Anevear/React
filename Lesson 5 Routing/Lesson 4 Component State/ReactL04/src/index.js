import React from 'react';
import ReactDOM from 'react-dom';

const App=props=>{
         return <BankAccount/>;
};

ReactDOM.render(<App />, document.getElementById('root'));




//example 4.5
// const App=props=>{
//          return <BankAccount/>;
// };
// class BankAccount extends React.Component{
//          constructor(props){
//                   super(props);
//                   this.state={
//                            accountBalance: 3333.33
//                   };
//          }
//          increment(){
//                   this.setState({accountBalance: this.state.accountBalance +1})
//          }
//          render(){
//                   return(
//                            <div>
//                                     <h3>Account Balance: ${this.state.accountBalance}</h3>
//                                     <button onClick={this.increment.bind(this)}>Increase Amount</button>
//                            </div>
//                   )
//          }
// }

// ReactDOM.render(<App />, document.getElementById('root'));









// example 4.4
// const App = props => {
//          return <Text />;
// };
// class Text extends React.Component{
//          constructor() {
//                   super();
//                   this.state={
//                            text: 'Salutations Universe!!!'
//                   }
//          }
//          update(event){
//                   this.setState({text: event.target.value})
//          }
//          render() {
//                   return (
//                            <div>
//                                     <input type="text" onChange={this.update.bind(this)} />
//                                     <h1>{this.state.text}</h1>
//                            </div>
//                   )
//          }
// }
// ReactDOM.render(<App />, document.getElementById('root'));







// example 4.3
// const App = props => {
//          return (
//                   <div>
//                            <BankAccount />
//                   </div>
//          )
// }

// class BankAccount extends React.Component {
//          constructor(props) {
//                   super(props);
//                   this.state={
//                            savings: {
//                                     accountBalance: 36.00
//                            },
//                            checking: {
//                                     accountBalance: 369.00
//                            }
//                   }
//          }
//          render() {
//                   return (
//                            <div>
//                                     <h3>Account Balance: {this.state.savings.accountBalance}</h3>
//                                     <h3>Checking Balance: {this.state.checking.accountBalance}</h3>
//                            </div>
//                   )
//          }
// }

// ReactDOM.render(<App/>, document.getElementById('root'));







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
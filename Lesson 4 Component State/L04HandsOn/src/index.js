import React from 'react';
import ReactDOM from 'react-dom';

const App=props=>{
         return <NumberOfStudents/>;
};
class NumberOfStudents extends React.Component{
         constructor(props){
                  super(props);
                  this.state={
                           enrolledStudents:0,
                           waitListedStudents:0,
                           addAmount1:0,
                           addAmount2:0
                  }
         }
         increment1(){
                  this.setState({enrolledStudents: this.state.enrolledStudents+1})
         }
         increment2(){
                  this.setState({waitListedStudents: this.state.waitListedStudents+1})
         }
         addMul1(){
                  this.setState({enrolledStudents: this.state.enrolledStudents + this.state.addAmount1})
         }
         addMul2(){
                  this.setState({waitListedStudents: this.state.waitListedStudents + this.state.addAmount2})
         }
         
         render(){
                  return(
                           <div>
                                    <h1>Enrolled Students: {this.state.enrolledStudents}</h1>
                                    <button onClick={this.increment1.bind(this)}>Add 1 Enrolled Student</button>
                                    
                                    <h3>Add Multiple Enrolled Students:</h3>
                                    <input type="number" onChange={event=>this.setState({addAmount1: parseInt(event.target.value)})} />
                                    <button onClick={this.addMul1.bind(this)}>Increase Students</button>

                                    <h1>Waitlisted Students: {this.state.waitListedStudents}</h1>
                                    <button onClick={this.increment2.bind(this)}>Add 1 Waitlisted Student</button>

                                    <h3>Add Multiple Waitlisted Students:</h3>
                                    <input type="number" onChange={event=>this.setState({addAmount2: parseInt(event.target.value)})} />
                                    <button onClick={this.addMul2.bind(this)}>Increase Students</button>
                           </div>
                  )
         }
}

ReactDOM.render(<App />, document.getElementById('root'));
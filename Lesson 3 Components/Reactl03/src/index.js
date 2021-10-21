import React from 'react';
import ReactDOM from 'react-dom';

const App = props => {
         const items = [
                  { name:'Bread', price: 2.35 },
                  { name:'Eggs', price: 3.15 },
                  { name:'Tea', price: 4.00 },
                  { name:'Steak', price: 6.99 }
         ];
         return(
                  <div>
                           <List items={items}/>
                           <Employee name='Lisbet' age={27} position='Sales Manager'/>
                           <GroceryList item1='Mangos' item2='Spanish Limes' item3='Pineapples'/>
                  </div>
         )
}

const List = props => {
         const listItems =props.items.map((item, index)=> (
                  <li key={index}>{item.name}: {item.price}</li>
         ));
         return <ul>{listItems}</ul>;
}

const Employee = props => (
         <ul>
                  <li>{props.name}</li>
                  <li>{props.age}</li>
                  <li>{props.position}</li>
         </ul>
)

const GroceryList= props =>(
         <ul>
                  <li>{props.item1}</li>
                  <li>{props.item2}</li>
                  <li>{props.item3}</li>
         </ul>
)

ReactDOM.render(<App/>, document.getElementById('root'))







// Example 5 >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// const App = props => {
//          const items = [
//                   { name: 'Bread', price: 2.35},
//                   { name: 'Eggs', price: 3.15},
//                   { name: "Tea", price: 4.00},
//                   { name: 'Steak', price: 6.99}
//          ];
//          return <List items={items}/>;
// }

// // the const listItems in the const List replaces the below for loop
// // for(let i=0; i< items.length; i++){
// //          listItems.push(<li key={i}>{items[i]}</li>);
// // }

// const List= props => {
//          const listItems=props.items.map((item, index) => <li key={index}>{item.name}: {item.price}</li>);
//          return (<ul>{listItems}</ul>);
// }

// ReactDOM.render(<App/>, document.getElementById('root'))


// Example 4 >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// import React from'react';
// import ReactDOM from 'react-dom';
// import PropTypes from 'prop-types';

// const App = props =>{
//          const user={
//                   name: 'Branden Bailey',
//                   address: '1122 Drafty House',
//                   city: 'Bedford Falls',
//                   state: 'New York',
//                   zip: 13148
//          }
//          return <User person={user} items='Boots, Tie, Socks' amount={100}/>;
// }

// const User = props => (
//          <ul>
//                   <li>Name: {props.person.name}</li>
//                   <ul>
//                            <li>Address: {props.person.address}</li>
//                            <li>City: {props.person.city}</li>
//                            <li>State: {props.person.state}</li>
//                            <li>Zip: {props.person.zip}</li>
//                   </ul>
//                   <li>Items: {props.items}</li>
//                   <li>Paid: {String(props.paid)}</li>
//                   <li>Amount: {props.amount}</li>
//                   <li>Shipped: {String(props.shipped)}</li>
//          </ul>
// );

// User.propTypes={
//          person: PropTypes.shape({
//                   name: PropTypes.string.isRequired,
//                   address: PropTypes.string.isRequired,
//                   city: PropTypes.string.isRequired,
//                   state: PropTypes.string.isRequired,
//                   zip: PropTypes.number.isRequired
//          }),
//          items: PropTypes.string.isRequired,
//          paid: PropTypes.bool,
//          amount: PropTypes.number.isRequired,
//          shipped: PropTypes.bool
// }
// User.defaultProps = {
//          paid: false,
//          shipped: false
// }

// ReactDOM.render(<App/>, document.getElementById('root'));


//Example 3 >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// const App = props => (
//          <Employee name="Elisabet" age={27} position="Sales Manager"/>
// )

// const Employee = props => (
//          <ul>
//                   <li>{props.name}</li>
//                   <li>{props.age}</li>
//                   <li>{props.position}</li>
//          </ul>
// )

// Employee.propTypes={
//          name: PropTypes.string.isRequired,
//          age: PropTypes.number.isRequired,
//          position: PropTypes.string
// }

// Employee.defaultProps={
//          position: 'Employee'
// }

// ReactDOM.render(<App/>, document.getElementById('root'));


// Example 2>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// const GroceryList = (props) => {
//          return (
//                   <ul>
//                            <li>{props.item1}</li>
//                            <li>{props.item2}</li>
//                            <li>{props.item3}</li>
//                   </ul>
//          )
// }
// ReactDOM.render(
//          <GroceryList item1="Apples" item2='Oranges' item3='Mangos'/>,
//          document.getElementById('root')
// )
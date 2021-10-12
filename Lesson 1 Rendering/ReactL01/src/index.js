import React from 'react';
import ReactDOM from 'react-dom';

const applePrice=React.createElement('li',{}, '$1.00 per lb');
const orangePrice=React.createElement('li',{}, '$0.70 per lb');
const mangoPrice=React.createElement('li',{}, '$2.00 per lb');

const apples=React.createElement('ul', {}, applePrice);
const oranges=React.createElement('ul', {}, orangePrice);
const mangos=React.createElement('ul', {}, mangoPrice);

ReactDOM.render(
         React.createElement(
                  'ul', 
                  {}, 
                  React.createElement('li', {}, 'Apples', apples), 
                  React.createElement('li', {}, 'Oranges', oranges), 
                  React.createElement('li', {}, 'Mangos', mangos)
         ), 
         document.getElementById('root')
);

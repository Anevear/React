import React from "react";
import ReactDOM from "react-dom";

const groceryList=(item1, item1Price, item2, item2Price, item3, item3Price) => {
         return (
                  <ul>
                           <li>{item1}</li>
                           <ul>
                                    <li>{item1Price}</li>
                           </ul>
                           <li>{item2}</li>
                           <ul>
                                    <li>{item2Price}</li>
                           </ul>
                           <li>{item3}</li>
                           <ul>
                                    <li>{item3Price}</li>
                           </ul>
                  </ul>
         );
}

ReactDOM.render(groceryList("appLes", "$1.00 per lb.", "oraNges", "$0.70 pre lb.", "manGos", "$2.00 per lb."),
         document.getElementById('root')
);



/* const groceryList= (
         <ul>
                  <li>aPples</li>
                  <ul>
                           <li>$1.00 per lb.</li>
                  </ul>
                  <li>oRanges</li>
                  <ul>
                           <li>$0.70 per lb.</li>
                  </ul>
                  <li>mAngos</li>
                  <ul>
                           <li>$2.00 per lb.</li>
                  </ul>
         </ul>
);
ReactDOM.render(
         groceryList,
         document.getElementById('root')
); */


/* part of part 2 example with html and vars*/
/* const item1 = 'Apples';
const item1Price = '$1.00 per lb.';

const item2 = 'Oranges';
const item2Price = '$0.70 per lb';

const item3 = 'Mangos';
const item3Price = '$2.00 per lb';

ReactDOM.render(
         <ul>
                  <li>{item1}</li>
                  <ul>
                           <li>{item1Price}</li>
                  </ul>
                  <li>{item2}</li>
                  <ul>
                           <li>{item2Price}</li>
                  </ul>
                  <li>{item3}</li>
                  <ul>
                           <li>{item3Price}</li>
                  </ul>
         </ul>,
         document.getElementById('root')

); */






/* ReactDOM.render(
         React.createElement(
                  'ul', {},
                  React.createElement('li', {}, 'Apples'),
                  React.createElement('li', {}, 'Oranges'),
                  React.createElement('li', {}, 'Mangos')
         ),
         document.getElementById('root')
); */



/* Part 1*/
/* ReactDOM.render(
         React.createElement('div', {className: 'flower'}, React.createElement('h1', {}, 'Salutations Universe')),
         document.getElementById('root')
); */

/* ReactDOM.render(
         <div className="flower">
                  <h1>Salutations World</h1>
         </div>,
         document.getElementById('root')
); */


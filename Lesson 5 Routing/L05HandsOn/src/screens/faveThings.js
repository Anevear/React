import React from "react";
import { Route, Link } from "react-router-dom";
import Things from './things';

const FaveThings = ({match}) => (
         <div>
                  <h2>FaveThings</h2>

                  <ul>
                           <li><Link to={`${match.url}/car`}>Lotus</Link></li>
                           <li><Link to={`${match.url}/food`}>Rice</Link></li>
                           <li><Link to={`${match.url}/movie`}>Gladiator</Link></li>
                  </ul>
                  <Route path={`${match.url}/:thingsId`} component={Things} />
                  <Route exact path={match.url} render={() => <h3>Please select a thing.</h3>} />       
         </div>
);

export default FaveThings;

// Requirements
// Step 1 -complete :: Create 4 components within separate files:
// Step 2
// Be able to route between each of the pages
// Remember the import statements needed at the top of each file.
// Step 3
// Within the FavoriteThings component, be able to click on at least 3 different things: Car, Food, Movie
// Based on the thing you click, you should then and render the specific Car, Food or Movie onto the page and in the URL.
// Hint! Use match.url
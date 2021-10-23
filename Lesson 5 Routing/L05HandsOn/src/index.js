import React from 'react';
import {render} from 'react-dom';
import Home from './screens/home';
import About from './screens/about';
import FaveThings from './screens/faveThings';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const App = () => (
         <Router>
                  <div>
                           <ul>
                                    <li>
                                             <Link to="/">Home</Link>
                                    </li>
                                    <li>
                                             <Link to="/about">About</Link>
                                    </li>
                                    <li>
                                             <Link to="/favethings">FaveThings</Link>
                                    </li>
                           </ul>

                           <hr />

                           <Route exact path="/" component={Home} />
                           <Route path="/about" component={About} />
                           <Route path="/favethings" component={FaveThings} />
                  </div>
         </Router>
);

render(<App />, document.getElementById('root'));



// Requirements
// Step 1 -complete :: Create 4 components within separate files:
// Step 2
// Be able to route between each of the pages
// Remember the import statements needed at the top of each file.
// Step 3
// Within the FavoriteThings component, be able to click on at least 3 different things: Car, Food, Movie
// Based on the thing you click, you should then and render the specific Car, Food or Movie onto the page and in the URL.
// Hint! Use match.url


// import React from 'react';
// import ReactDOM from 'react-dom';
// import Home from './screens/home';
// import About from './screens/about';
// import Things from './screens/things';
// import FaveThings from './screens/faveThings';

// const Index = ({pathname}) => {
//          switch(pathname){
//                   case '/about':
//                            return <About />;
//                   case '/things':
//                            return <Things />;
//                   case '/favethings':
//                            return <FaveThings />;
//                   default:
//                            return <Home />;
//          }
// }

// let pathname = window.location.pathname;

// ReactDOM.render(<Index pathname={pathname} />, document.getElementById('root'));

// window.addEventListener('popstate', ()=> pathname= window.location.pathname);
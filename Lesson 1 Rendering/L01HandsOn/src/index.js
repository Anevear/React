import React from 'react';
import ReactDOM from 'react-dom';

const noirColor=React.createElement('li', {}, 'Black');
const blueColor=React.createElement('li', {}, 'Blue');
const rojoColor=React.createElement('li', {}, 'Red');

const edmMusic=React.createElement('li', {}, 'EDM Music');
const epicMusic=React.createElement('li', {}, 'Epic Score');
const popMusic=React.createElement('li', {}, 'Pop music');

const riceFood=React.createElement('li', {}, 'Rice');
const meatFood=React.createElement('li', {}, 'Meat');
const potaFood=React.createElement('li', {}, 'Potatoes');

const redLink=React.createElement('a', {href:'https://www.reddit.com'}, 'Memes Among Things');
const youLink=React.createElement('a', {href:'https://www.youtube.com'}, 'The Great Oracle');
const wikiLink=React.createElement('a', {href:'https://www.wikipedia.org'}, 'The Collective Library');

const redName=React.createElement('li', {}, redLink);
const youName=React.createElement('li', {}, youLink);
const wikiName=React.createElement('li', {}, wikiLink);


const faveColor=React.createElement('ol', {}, noirColor, blueColor, rojoColor);
const faveMusic=React.createElement('ol', {}, edmMusic, epicMusic, popMusic);
const faveFoods=React.createElement('ol', {}, riceFood, meatFood, potaFood);
const faveSites=React.createElement('ol', {}, redName, youName, wikiName);

const list=React.createElement(
         'ul',
         {},
         React.createElement('li', {className: 'hues'}, <strong>Favorite Colors</strong>, faveColor),
	React.createElement('li', {className: 'waves'}, <strong>Favorite Music</strong>, faveMusic),
	React.createElement('li', {className: 'taste'}, <strong>Favorite Foods</strong>, faveFoods),
	React.createElement('li', {className: 'reads'}, <strong>Favorites Sites</strong>, faveSites)
);


ReactDOM.render(
         React.createElement(
                  'div',
                  {},
                  React.createElement('h1', {className:'title'}, 'Some of my Favorite things!'),
                  React.createElement('p', {className: 'content'}, list),
                  React.createElement('h5', {className: 'disclaimer'},<i>*the orders of these lists may vary</i>)
         ),
         document.getElementById('root')
)
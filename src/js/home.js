var React = require('react');
var NavBar = require('./components/navbar.js.jsx');

React.render(
  <NavBar />,
  document.getElementById('navbar')
);
//initialize skrollr js 
var s = skrollr.init();

var React = require('react');
var NavBar = require('./components/navbar.js.jsx');
var EventManager = require('./components/events/event-manager.js.jsx');
React.render(
  <NavBar />,
  document.getElementById('navbar')
);

React.render(
  <EventManager />,
  document.getElementById('event-manager')
);
//initialize skrollr js 
var s = skrollr.init();

var React = require('react');
var NavBar = require('./components/navbar/navbar.js.jsx');
var EventManager = require('./components/events/event-manager.js.jsx');
var FormView = require('./components/forms/form_view.js.jsx');

var nav = document.getElementById('navbar');
var event_manager = document.getElementById('event-manager');
var form_view = document.getElementById('form-view');

//initialize skrollr js 
var s = skrollr.init();

if(nav){
  React.render(
    <NavBar />, nav
  );
}

if(event_manager){
  React.render(
    <EventManager />, event_manager
  );
}

if(form_view){
  React.render(
    <FormView />, form_view
  );
}

$('.button-collapse').sideNav({
      menuWidth: 300, // Default is 240
      edge: 'left', // Choose the horizontal origin
      closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
    }
  );


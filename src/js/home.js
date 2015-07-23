var React = require('react');
var NavBar = require('./components/navbar/navbar.js.jsx');
var EventManager = require('./components/events/event-manager.js.jsx');
var FormView = require('./components/forms/form_view.js.jsx');

var nav = document.getElementById('navbar');
var event_manager = document.getElementById('event-manager');
var form_view = document.getElementById('form-view');

//initialize skrollr js 
var s = skrollr.init();


// Initialize collapse button
$(".button-collapse").sideNav();
// Initialize collapsible (uncomment the line below if you use the dropdown variation)
//$('.collapsible').collapsible();


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


var React = require('react');
var NavBar = require('./components/navbar.js.jsx');
var FormView = require('./components/forms/form_view.js.jsx');
React.render(
  <NavBar />,
  document.getElementById('navbar')
);

React.render(
  <FormView />,
  document.getElementById('form-view')
);
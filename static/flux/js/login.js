var $ = require('jquery')
var React = require('react')
var LoginForm = require('./flux/components/LoginComponents/LoginForm')
var Schema=require('react-forms');
var Property=require('react-forms');



React.render(
  <LoginForm />,
  document.getElementById('example'))

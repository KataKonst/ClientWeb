var $ = require('jquery')
var React = require('react')
var PlayListsPage = require('./flux/components/PLayListComponents/PlayListsPage')
var Schema=require('react-forms');
var Property=require('react-forms');



React.render(
  <PlayListsPage />,
  document.getElementById('playList'))

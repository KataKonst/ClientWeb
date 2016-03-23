var React=require("react")
var Router = require('react-router-component')

var Locations = Router.Locations
var Location = Router.Location
var Link = Router.Link
var Track =require("../TrackComponents/Track")
var HomePage =require("./HomePage")
var Profile =require("../UserComponents/Profile")



var AppRoute = React.createClass({

  render: function() {
    return (
      <Locations>
      <Location path="/track/:trackId" handler={Track} />
      <Location path="/" handler={HomePage} />
      <Location path="/profile/:userId" handler={Profile} />

      </Locations>
    )
  }
})

module.exports=AppRoute

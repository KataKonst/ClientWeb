var React=require("react")
var Router = require('react-router-component')

var Locations = Router.Locations
var Location = Router.Location
var Link = Router.Link
var Track =require("../TrackComponents/Track")
var HomePage =require("./HomePage")
var Profile =require("../UserComponents/Profile")
var PlayListsPage =require("../PlayListComponents/PlayListsPage")
var Wall =require("./Wall.js")
var Upload =require("./Upload")







var AppRoute = React.createClass({

  render: function() {

    return (
      <Locations  className={"centered"}>
      <Location path="/track/:trackId" handler={Track} />
      <Location path="/" handler={HomePage} />
      <Location path="/Upload" handler={Upload} />
      <Location path="/profile" handler={Profile} />
      <Location path="/playLists" handler={PlayListsPage} />
      <Location path="/wall" handler={Wall} />



      </Locations>
    )
  }
})

module.exports=AppRoute

var React=require("react");
var TrackBar=require("./TrackBar")
var AudioPlayer = require('react-responsive-audio-player');
var ActionTypes=require('../../Actions/ActionTypes')



var Track = React.createClass({

  propTypes: {
      _query: React.PropTypes.object

  },
  getInitialState:function()
  {
    return({
      trackId:ActionTypes.ip+this.props._query["trackId"]
    })
  },

  render:function()
  {

    var link=ActionTypes.ip+this.props._query["trackLink"];
    var  name=this.props._query["trackName"]
    var photoLink=ActionTypes.ip+this.props._query["photoLink"];





    var playlit =
      [{ url:link,
         displayText:name}]


          return(
              <div className={"navButtons"}>
              <img src={photoLink} height="122" width="122"/>
               <AudioPlayer playlist={ playlit } hideBackSkip={ true } />
               <TrackBar trackId={this.props._query["id"]} userId={this.props._query["userId"]} />
              </div>
       )

  },
});
module.exports=Track

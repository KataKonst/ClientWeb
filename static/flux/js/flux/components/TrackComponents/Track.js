var React=require("react");
var TrackBar=require("./TrackBar")
var AudioPlayer = require('react-responsive-audio-player');



var Track = React.createClass({

  propTypes: {
    trackId: React.PropTypes.string,
      _query: React.PropTypes.object

  },

  render:function()
  {

    var link="http://127.0.0.1:2000/"+this.props._query["trackLink"];
    var  name=this.props._query["trackName"]
    var photoLink="http://127.0.0.1:2000/"+this.props._query["photoLink"];





    var playlit =
      [{ url:link,
         displayText:name}]


          return(
              <div className={"navButtons"}>
              <img src={photoLink} />
               <AudioPlayer playlist={ playlit } hideBackSkip={ true } />
               <TrackBar trackId={this.props._query["id"]} userId={this.props._query["userId"]} />
              </div>
       )

  },
});
module.exports=Track

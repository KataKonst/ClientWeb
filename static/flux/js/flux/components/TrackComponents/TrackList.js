/**
 * Created by katakonst on 3/13/16.
 */

var React = require('react');
var AudioTrackPlayer=require('./AudioTrackPlayer')
      var TrackList = React.createClass({

            propTypes: {
                         tracks: React.PropTypes.array.isRequired,
                         sectionTracks : React.PropTypes.string.isRequired,
                         playLists:React.PropTypes.array.isRequired,
                         userId:React.PropTypes.string.isRequired
            },


      render: function() {
            var tracks = this.props.tracks;
            var tracksToDisplay = [];
            var sectionTracks=this.props.sectionTracks
            var playLists=this.props.playLists
            var usrId=this.props.userId
            tracks.forEach(function(entry) {
            tracksToDisplay.push(<div><AudioTrackPlayer  sectionTracks={ sectionTracks } link={entry["link"]} id={entry["id"]} name={entry["nume"]} playLists={playLists} userId={usrId} photoLink={entry["photoLink"]}/></div>)
            });
          return (
                <section id="main">
                  {tracksToDisplay}
                </section>
           );
         }
      });

module.exports=TrackList;

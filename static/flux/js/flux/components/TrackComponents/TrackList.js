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
                         userId:React.PropTypes.string.isRequired,
                         searchText:React.PropTypes.string.isRequired

            },
            getInitialState:function(){
              return({
              sss:this.props.tracks
            })

          },


      render: function() {
            var tracks = this.props.tracks;
            var tracksToDisplay = [];
            var sectionTracks=this.props.sectionTracks
            var playLists=this.props.playLists
            var usrId=this.props.userId
            console.log(this.props.searchText)
var scj=this.props.searchText;
var i=0;
          tracks.forEach(function(entry) {
i++;
            tracksToDisplay.push(<div><AudioTrackPlayer   sectionTracks={ sectionTracks } link={entry["link"]} id={entry["id"]} name={entry["nume"]} playLists={playLists} userId={usrId} photoLink={entry["photoLink"]}/></div>)
            });
          return (
                <section id="main">
                <p>{this.props.searchText}</p>
                  {tracksToDisplay}
                </section>
           );
         }
      });

module.exports=TrackList;

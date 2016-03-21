/**
 * Created by katakonst on 3/13/16.
 */


/**
 * Created by katakonst on 3/13/16.
 */
var React = require('react');
var TrackList = require('./TrackList');
var MatchStore = require('../../stores/MatchStore');


function  getTrackState(){
     return {
             tracks: MatchStore.getAllTracks()
           };
      }

      var MatchedTrackList = React.createClass({
          getInitialState: function() {
              return {tracks: this.props.tracks,
                      playLists:this.props.playLists,
                      userId:this.props.userId
                    };
          },

          componentDidMount: function() {
              MatchStore.addMatchListener(this._onChange);
          },

          componentWillUnmount: function() {
          },

          render: function() {
              var trks = this.state.tracks;
              var sect="match"

              return (
                       <section id="match">
                       <TrackList tracks={trks} sectionTracks={ sect } playLists={this.state.playLists} userId={this.state.userId}/>
                       </section>
               );
          },

          _onChange: function() {
                  this.setState(getTrackState(),function () {
              });

          },
     });
module.exports=MatchedTrackList;

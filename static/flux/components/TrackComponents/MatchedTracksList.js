/**
 * Created by katakonst on 3/13/16.
 */


/**
 * Created by katakonst on 3/13/16.
 */


function  getTrackState(){
     return {
             tracks: MatchStore.getAllTracks()
           };
      }

      var MatchedTrackList = React.createClass({
          getInitialState: function() {
              return {tracks: this.props.tracks,
                      playLists:this.props.playLists
                    };
          },

          componentDidMount: function() {
              MatchStore.addMatchListener(this._onChange);
          },

          componentWillUnmount: function() {
              MatchStore.removeMatchListener(this._onChange);
          },

          render: function() {
              var trks = this.state.tracks;
              var sect="match"

              return (
                       <section id="match">
                       <TrackList tracks={trks} sectionTracks={ sect } playLists={this.state.playLists}/>
                       </section>
               );
          },

          _onChange: function() {
                  this.setState(getTrackState(),function () {
              });

          },
     });

window.MatchedTrackList = MatchedTrackList;

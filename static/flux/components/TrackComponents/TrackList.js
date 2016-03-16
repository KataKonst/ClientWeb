/**
 * Created by katakonst on 3/13/16.
 */



      var TrackList = React.createClass({

            propTypes: {
                         tracks: React.PropTypes.array.isRequired,
                         sectionTracks : React.PropTypes.string.isRequired,
                         playLists:React.PropTypes.array.isRequired
            },


      render: function() {
            var tracks = this.props.tracks;
            var tracksToDisplay = [];
            var sectionTracks=this.props.sectionTracks
            var playLists=this.props.playLists
            tracks.forEach(function(entry) {
            tracksToDisplay.push(<div><AudioPlayer  sectionTracks={ sectionTracks } link={entry["link"]} id={entry["id"]} name={entry["nume"]} playLists={playLists}/></div>)
            });
          return (
                <section id="main">
                  {tracksToDisplay}
                </section>
           );
         }
      });
     window.TrackList = TrackList;

/**
 * Created by katakonst on 3/16/16.
 *//**
 * Created by katakonst on 3/13/16.
 */



var AddToPlayLists = React.createClass({

         propTypes: {
             playLists: React.PropTypes.array.isRequired,
             trackId: React.PropTypes.string.isRequired
         },


          render: function() {
              var playId = this.props.playLists;
              var sect="playList"
              var playL=[];
              var trackId=this.props.trackId

              for(var i in playId)
              {
                  playL.push(<div><PlayList playId={playId[i]["id"]} playName={playId[i]["nume"]} section={sect}/>
                  <AddToPlayListButton playId={playId[i]["id"]} section="Sss" trackId={trackId}/></div> )
              }

              return (
                       <section id="match">
                           {playL}
                       </section>
               );
          },

          _onChange: function() {
                  this.setState(getTrackState(),function () {
                  console.log(this.state.tracks[0]["nume"]);
              });

          },
     });

window.AddToPlayLists = AddToPlayLists;

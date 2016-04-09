


/**
 * Created by katakonst on 3/13/16.
 */


/**
 * Created by katakonst on 3/13/16.
 */
var React = require('react');
var AudioTrackPlayer=require('./AudioTrackPlayer')
var AudioPlayer = require('react-responsive-audio-player');
var SoundActions=require('../../Actions/SoundActions')
var ActionTypes=require('../../Actions/ActionTypes')

var TrackStore=require('../../stores/TrackStore')




      var FixedPlayer = React.createClass({

        getInitialState: function() {

        return {

            trackName:"s",
            trackLink:"s"

        }
      },



          componentDidMount: function() {
            TrackStore.addPLayListener(this.playListener)

          },

          componentWillUnmount: function() {
          },
          forward:function()
          {
SoundActions.forward()
          },
          backward:function()
          {
            SoundActions.backward()

          },
          playListener:function()
          {

this.setState({trackName:TrackStore.getTrackName(),trackLink:TrackStore.getTrackLink()},function(e){
var audo = document.getElementById('FixedPlayer');
audo.src=ActionTypes.ip+this.state.trackLink
audo.load()
audo.play();
});

          },

          render: function() {


            var playlit =
              [{ url: ActionTypes.ip+this.state.trackLink,
                 displayText:this.state.trackName }]
                 url=ActionTypes.ip+this.state.trackLink;

              return (
                       <section id="match">
                       <img src={"/static/buttons/bk.png"} height="42" width="42" onClick={this.backward} value="back"  />
                        <img src={"/static/buttons/ff.png"} height="42" width="42" onClick={this.forward} value="forward"  />

                       <audio controls className={"pacpac"} id="FixedPlayer">

                            <source src={url}/>

                          </audio>                       </section>
               );
          },




     });
module.exports=FixedPlayer;

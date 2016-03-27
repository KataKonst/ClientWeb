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

alert(1)
this.setState({trackName:TrackStore.getTrackName(),trackLink:TrackStore.getTrackLink()},function(e){
var audo = document.getElementById('FixedPlayer');
audo.src='http://127.0.0.1:2000/'+this.state.trackLink
audo.load()
audo.play();
});

          },

          render: function() {


            var playlit =
              [{ url: 'http://127.0.0.1:2000/'+this.state.trackLink,
                 displayText:this.state.trackName }]
                 url='http://127.0.0.1:2000/'+this.state.trackLink;

              return (
                       <section id="match">
                       <input type="button"  className={"button button-glow button-rounded button-caution"} onClick={this.backward} value="back"  />
                       <input type="button"  className={"button button-glow button-rounded button-caution"} onClick={this.forward} value="forward"  />

                       <audio controls className={"pacpac"} id="FixedPlayer">

                            <source src={url}/>

                          </audio>                       </section>
               );
          },




     });
module.exports=FixedPlayer;

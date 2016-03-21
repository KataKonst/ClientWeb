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

            trackName:this.props.trackName,
            trackLink:this.props.trackLink

        }
      },



          componentDidMount: function() {
            TrackStore.addPLayListener(this.playListener)

          },

          componentWillUnmount: function() {
          },
          playListener:function()
          {
this.setState({trackName:TrackStore.getTrackName(),trackLink:TrackStore.getTrackLink()})

          },

          render: function() {
            var playlit =
              [{ url: 'http://127.0.0.1:2000/'+this.state.trackLink,
                 displayText:this.state.trackName }]

              return (
                       <section id="match">
                       <AudioPlayer playlist={ playlit } className={"pacpac"} hideBackSkip={ true } />
                       </section>
               );
          },




     });
module.exports=FixedPlayer;

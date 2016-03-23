/**
 * Created by katakonst on 3/16/16.
 *//**
 * Created by katakonst on 3/13/16.
 */


var React = require('react');
var AddToPlayListButton=require('./AddToPlayListButton')
var PlayList=require('./PlayList')
var ListPlayList = React.createClass({

         propTypes: {
             playLists: React.PropTypes.array.isRequired,
         },


          render: function() {
              var playId = this.props.playLists;
              var sect="playList"
              var playL=[];

              for(var i in playId)
              {
                  playL.push(<PlayList playId={playId[i]["id"]} playName={playId[i]["nume"]} section={sect} playLists={playId}/>)
              }

              return (
                       <section id="match">
                           {playL}
                       </section>
               );
          },

          _onChange: function() {
                  this.setState(getTrackState(),function () {
              });

          },
     });
module.exports=ListPlayList

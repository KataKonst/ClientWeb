/**
 * Created by katakonst on 3/13/16.
 */


/**
 * Created by katakonst on 3/13/16.
 */
var React = require('react');
var TrackList = require('../TrackComponents/TrackList');
var MatchStore = require('../../stores/MatchStore');
var tracks;
var sectionTracks;
var userId;

function  getTrackState(fnc){

    $.getJSON( "/tracksJson", function( tracksList ) {


          $.getJSON( "/getPlayLists", function( data ) {


               $.getJSON("/getUserId",function(id){
                              tracks=tracksList;
                              sectionTracks="list";
                              playLists=data;
                              userId=id
                              fnc(tracks,sectionTracks,playLists,userId);








                });
  });
});
}

      var HomePage = React.createClass({


        getInitialState: function() {

        return ({
            show:false

        })
        },


          componentDidMount: function() {
            getTrackState(this.ch)

          },

          componentWillUnmount: function() {
          },



  ch :function(trcks,sectionTrcks,playLsts,useId){

this.setState({tracks:trcks,
               sectionTracks:sectionTrcks,
               playLists:playLsts,
               userId:useId,
               show:true})

          },

          render: function() {
              var sect="match"

              return (
                       <section id="match">
                        { this.state.show ? <TrackList tracks={this.state.tracks} sectionTracks={ "list" } playLists={this.state.playLists} userId={this.state.userId}/>:null}
                       </section>
               );
          },

          _onChange: function() {
                  this.setState(getTrackState(),function () {
              });

          },
     });
module.exports=HomePage;

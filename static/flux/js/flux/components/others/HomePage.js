/**
 * Created by katakonst on 3/13/16.
 */

var React = require('react');
var TrackList = require('../TrackComponents/TrackList');

var MatchStore = require('../../stores/MatchStore');
var TrackStore = require('../../stores/TrackStore');

var tracks;
var sectionTracks;
var userId;
var srchText;

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
                                   show:false,
                                    searchText:"s"
                              })
              },
            componentDidMount: function() {
              getTrackState(this.ch)
            TrackStore.addSearchTracksEvent(this.searchTracks)
            },
            componentWillUnmount: function() {
            },
            searchTracks:function(){

              alert(TrackStore.getSearchResults()[0]["link"])
                    this.setState({tracks:TrackStore.getSearchResults(),searchText:TrackStore.getSearchText()})

            },
          ch :function(trcks,sectionTrcks,playLsts,useId){

          this.setState({tracks:trcks,
               sectionTracks:sectionTrcks,
               playLists:playLsts,
               userId:useId,
               show:true,
               searchText:"s"})

          },

          render: function() {
              var sect="match"

              return (
                       <section id="match">
                        { this.state.show ? <TrackList key={this.state.searchText} tracks={this.state.tracks} sectionTracks={ "list" } playLists={this.state.playLists} userId={this.state.userId} searchText={this.state.searchText}/> :null}
                      </section>

               );
          },

          _onChange: function() {
                  this.setState(getTrackState(),function () {
              });

          },
     });
module.exports=HomePage;

/**
 * Created by katakonst on 3/13/16.
 */

var React = require('react');
var TrackList = require('../TrackComponents/TrackList');

var MatchStore = require('../../stores/MatchStore');
var TrackStore = require('../../stores/TrackStore');
var SearchStore = require('../../stores/SearchStore');
var UserStore = require('../../stores/UserStore');
var UserList = require('../UserComponents/UserList');



var RightMenu=require('./RightMenu')

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
                                   showUsersResults:false
                              })
              },
            componentDidMount: function() {
              getTrackState(this.ch)
            TrackStore.addSearchTracksEvent(this.searchTracks)
            UserStore.addSearchUserListener(this.searchUser)
            },
            componentWillUnmount: function() {
            },
           searchUser:function()
           {
                 this.setState({users:UserStore.getUserSearchResults(),searchText:UserStore.getSearchText(),showUsersResults:true,show:false})
           },
            searchTracks:function(){
                  this.setState({tracks:TrackStore.getSearchResults(),searchText:TrackStore.getSearchText(),showUsersResults:false,show:true})

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
                       <section id="match" className={"centered"}>
                        <RightMenu/>
                        { this.state.show ? <TrackList  key={this.state.searchText} tracks={this.state.tracks} sectionTracks={ "list" } playLists={this.state.playLists} userId={this.state.userId}/> :null}
                        { this.state.showUsersResults ? <UserList key={this.state.searchText} users={this.state.users}  userId={this.state.userId}/> :null}
                      </section>

               );
          },

          _onChange: function() {
                  this.setState(getTrackState(),function () {
              });

          },
     });
module.exports=HomePage;

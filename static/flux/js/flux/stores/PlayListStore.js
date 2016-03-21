/**
 * Created by katakonst on 3/13/16.
 */
/**
 * Created by katakonst on 3/13/16.
 */


var LIST_EVENT_TRACKS="listEventTracks";
var LIST_EVENT_PLAYLISTS="listEventTracks";
var ADD_TRACK_EVENT="ADD_TRACK_EVENT"
var CREATE_LIST_EVENT="CREATE_LIST_EVENT"
var SHOW_PLAY_LIST_EVENT="SHOW_PLAY_LIST_EVENT"
var HIDE_PLAY_LIST_EVENT="HIDE_PLAY_LIST_EVENT"


var ActionTypes=require('../Actions/ActionTypes')
var AppDispatcher = require('../dispatcher/AppDispatcher');
var $=require('jquery')
var  tracks = {}
var  playList = {}
var EventEmitter = require('events').EventEmitter;
var id=0;
var section;
var playListId=0;


function  createPlayList(userId,trackId,sectionTracks,playListName)
 {
     $.getJSON( "/createPlayList?userId="+encodeURIComponent(userId)+"&nume="+encodeURIComponent(playListName)+"&trackId="+encodeURIComponent(trackId), function( data ) {

     });
 };

function  listTracksPlayList(trackId,sectionTracks,playId)
{
     $.getJSON( "/getTracksPlayList?playId="+encodeURIComponent(playId), function( data ) {

         id=trackId;
         section=sectionTracks;
         tracks=data;
         playListId=playId;
         alert(data[0]['id'])
         PLayListStore.emitListTrack();
     });
}

function addToPlayList(trackId,playId,sectionTracks)
{
   $.getJSON( "/addToPLayList?playId="+encodeURIComponent(playId)+"&trackId="+encodeURIComponent(trackId), function( data ) {
         id=trackId;
         section=sectionTracks;
         tracks=data;
     });

}

function listPlayList(trackId,sectionTracks)
{
   $.getJSON( "/getPlayLists", function( data ) {
         id=trackId;
         section=sectionTracks;
         playList=data;
     });

}

function   showPlayList(trackId,sectionTracks)
{
    id=trackId;
    section=sectionTracks;
    PLayListStore.emitShowPlayLists();

}

function   hidePlayList(trackId,sectionTracks)
{
    id=trackId;
    section=sectionTracks;
    alert(id+" "+section)
    PLayListStore.emitHidePlayLists();

}







var PLayListStore = Object.assign({}, EventEmitter.prototype, {

    emitCreate:function()
    {
        this.emit(CREATE_LIST_EVENT)
    },
     emitShowPlayLists:function()
    {
        this.emit(SHOW_PLAY_LIST_EVENT)
    },

    emitAdd:function()
    {
        this.emit(ADD_TRACK_EVENT)
    },

    emitListTrack:function()
    {
      this.emit(LIST_EVENT_TRACKS)
    },

    emitListPlayLists:function()
    {
      this.emit(LIST_EVENT_PLAYLISTS)
    },
    emitHidePlayLists:function()
    {
      this.emit(HIDE_PLAY_LIST_EVENT)
    },


    addShowPlayListsListener:function(callback)
    {
        this.addListener(SHOW_PLAY_LIST_EVENT,callback);

    },
    removeShowPlayListsListener: function (callback) {
        this.removeListener(SHOW_PLAY_LIST_EVENT, callback)

    },
   addHidePlayListListener: function(callback){
       this.addListener(HIDE_PLAY_LIST_EVENT,callback);
     },
    removeHidePlayListListener: function(callback){
         this.removeListener(HIDE_PLAY_LIST_EVENT,callback);
       },

    addAddTrackListener: function(callback) {
        this.addListener(ADD_TRACK_EVENT,callback);
    },

    removeAddTrackListener: function(callback) {
      this.removeListener(ADD_TRACK_EVENT, callback);
    },

    addListTracksListener: function(callback) {
      this.addListener(LIST_EVENT_TRACKS,callback);
    },

    removeListTracksListener: function(callback) {
     this.removeListener(LIST_EVENT_TRACKS, callback);
    },

    addListPlayListsListener: function(callback) {
       this.addListener(LIST_EVENT_PLAYLISTS,callback);
    },

    removeListPlayListsListener: function(callback) {
       this.removeListener(LIST_EVENT_PLAYLISTS, callback);
    },

     addCreatelayListsListener: function(callback) {
       this.addListener(CREATE_LIST_EVENT,callback);
    },

    removeCreatePlayListsListener: function(callback) {
       this.removeListener(CREATE_LIST_EVENT, callback);
    },
      getTracks: function() {
         return tracks;
   },
     getPlayLists: function() {
         return playList;
   },
      getId: function() {
         return id;
  },
      getSection: function() {
           return section;
  },
      getPlayListId: function() {
           return playId;
  }
   });



 AppDispatcher.register(function(action) {
     switch(action.actionType) {
     case ActionTypes.AddTracktoPlayList:
        var section = action.section;
        var playId = action.playId;
        var trackId = action.trackId;
        addToPlayList(trackId,playId,section)

        break;

        case ActionTypes.CreatePlayList:
           var section = action.section;
           var playNume = action.playlistNume;
           var trackId = action.trackId;
           var userid = action.userId;
           createPlayList(userid,trackId,section,playNume)

           break;

        case ActionTypes.ListPlayList:
            var section = action.section;
            var trackId = action.trackId;
             listPlayList(trackId,section)

            break;

         case ActionTypes.listPlayListTracks:
            var section = action.section;
             var trackId = action.trackId;
             var playId = action.playId;
             listTracksPlayList(trackId,section,playId)

         case  ActionTypes.showPlayList:
             var section=action.section;
             var trackId=action.trackId;
             showPlayList(trackId,section)
             break;

        case  ActionTypes.hidePlayList:
            var section=action.section;
            var trackId=action.trackId;
            hidePlayList(trackId,section)
            break;

         default:
  }
});

module.exports=PLayListStore;

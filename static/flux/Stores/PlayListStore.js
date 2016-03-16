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



var  tracks = {}
var  playList = {}

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



!function(r){"use strict";function t(){}function n(n,e){if(i)return e.indexOf(n);for(var t=e.length;t--;)if(e[t]===n)return t;return-1}var e=t.prototype,i=Array.prototype.indexOf?!0:!1;e._getEvents=function(){return this._events||(this._events={})},e.getListeners=function(n){var r,e,t=this._getEvents();if("object"==typeof n){r={};for(e in t)t.hasOwnProperty(e)&&n.test(e)&&(r[e]=t[e])}else r=t[n]||(t[n]=[]);return r},e.getListenersAsObject=function(n){var e,t=this.getListeners(n);return t instanceof Array&&(e={},e[n]=t),e||t},e.addListener=function(i,r){var e,t=this.getListenersAsObject(i);for(e in t)t.hasOwnProperty(e)&&-1===n(r,t[e])&&t[e].push(r);return this},e.on=e.addListener,e.defineEvent=function(e){return this.getListeners(e),this},e.defineEvents=function(t){for(var e=0;e<t.length;e+=1)this.defineEvent(t[e]);return this},e.removeListener=function(i,s){var r,e,t=this.getListenersAsObject(i);for(e in t)t.hasOwnProperty(e)&&(r=n(s,t[e]),-1!==r&&t[e].splice(r,1));return this},e.off=e.removeListener,e.addListeners=function(e,t){return this.manipulateListeners(!1,e,t)},e.removeListeners=function(e,t){return this.manipulateListeners(!0,e,t)},e.manipulateListeners=function(r,t,i){var e,n,s=r?this.removeListener:this.addListener,o=r?this.removeListeners:this.addListeners;if("object"!=typeof t||t instanceof RegExp)for(e=i.length;e--;)s.call(this,t,i[e]);else for(e in t)t.hasOwnProperty(e)&&(n=t[e])&&("function"==typeof n?s.call(this,e,n):o.call(this,e,n));return this},e.removeEvent=function(n){var e,r=typeof n,t=this._getEvents();if("string"===r)delete t[n];else if("object"===r)for(e in t)t.hasOwnProperty(e)&&n.test(e)&&delete t[e];else delete this._events;return this},e.emitEvent=function(r,i){var n,e,s,t=this.getListenersAsObject(r);for(e in t)if(t.hasOwnProperty(e))for(n=t[e].length;n--;)s=i?t[e][n].apply(null,i):t[e][n](),s===!0&&this.removeListener(r,t[e][n]);return this},e.trigger=e.emitEvent,e.emit=function(e){var t=Array.prototype.slice.call(arguments,1);return this.emitEvent(e,t)},"function"==typeof define&&define.amd?define(function(){return t}):r.EventEmitter=t}(this);



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


    addShowPlayListsListener:function(callback)
    {
        this.addListener(SHOW_PLAY_LIST_EVENT,callback);

    },
    removeShowPlayListsListener: function (callback) {
        this.removeListener(SHOW_PLAY_LIST_EVENT, callback)

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

 ActionTypes.prototype.AddTracktoPlayList="addTrackToPlayList"
 ActionTypes.prototype.CreatePlayList="createPlayList"
 ActionTypes.prototype.ListPlayList="listPlayList"

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

         default:
  }
});

window.PlayListStore = PLayListStore;

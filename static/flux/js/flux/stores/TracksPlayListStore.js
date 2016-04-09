
var ActionTypes=require('../Actions/ActionTypes')
var PlayListActions=require('../Actions/PlayListActions')
var SoundActions=require('../Actions/SoundActions')
var AppDispatcher = require('../dispatcher/AppDispatcher');
var $=require('jquery')
var  tracks = {}
var EventEmitter = require('events').EventEmitter;
var gTrackId=0;
var gPlayId=0;

var isLikedTrack=false;
var CHECK_TRACK_IN_PLAYLIST="CHECK_TRACK_IN_PLAYLIST"
var DELETE_TRACK_FROM_PLAYLIST=" DELETE_TRACK_FROM_PLAYLIST"

function  checkTrackInPlayList(trackId,playId)
{
  $.getJSON( "/checkTrackFromPlayList?trackId="+encodeURIComponent(trackId)+"&playId="+encodeURIComponent(playId), function( data ) {

        isLikedTrack=data["result"]
        gTrackId=trackId
        gPlayId=playId
        TracksPlayListStore.emitCheckTrackInPlayList();
    });
}

function deleteTrackFromPlayList(trackId,playId)
{
  $.get( "/deleteTrackFromPlayList?trackId="+encodeURIComponent(trackId)+"&playId="+encodeURIComponent(playId), function( data ) {
          gPlayId=playId

        TracksPlayListStore.emitDeleteTrackFromPlayList();
        PlayListActions.checkTrackInPlayList(playId,trackId)

    });
}


var TracksPlayListStore = Object.assign({}, EventEmitter.prototype, {



  emitCheckTrackInPlayList:function()
  {
    this.emit(CHECK_TRACK_IN_PLAYLIST)
  },
  emitDeleteTrackFromPlayList:function()
  {
    this.emit(DELETE_TRACK_FROM_PLAYLIST)
  },
  addCheckTrackInPlayListListener:function(callback)
  {
    this.addListener(CHECK_TRACK_IN_PLAYLIST,callback)
  },
  removeCheckTrackInPlayListListener:function(callback)
  {
    this.removeListener(CHECK_TRACK_IN_PLAYLIST,callback)
  },
  addDeleteTrackFromPlayList:function(callback)
  {
    this.addListener(DELETE_TRACK_FROM_PLAYLIST,callback)
  },
  removeDeleteTrackFromPlayList:function(callback)
  {
    this.removeListener(DELETE_TRACK_FROM_PLAYLIST,callback)
  },
  getTrackId:function()
  {
    return gTrackId
  },
  getPlayId:function()
  {
    return gPlayId
  },
  isLiked:function()
{
  return isLikedTrack
}

});
AppDispatcher.register(function(action) {
    switch(action.actionType) {
    case ActionTypes.checkTrackInPlayList:
    trackId=action.trackId
    playId=action.playId

    checkTrackInPlayList(trackId,playId)
    break
    case ActionTypes.deleteTrackFromPlayList:
    trackId=action.trackId
    playId=action.playId

    deleteTrackFromPlayList(trackId,playId)
    break
    default:
  }
  });

  module.exports=TracksPlayListStore;

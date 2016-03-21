var $=require('jquery')
var EventEmitter = require('events').EventEmitter

var LIKE_EVENT="LIKE_EVENT";
var GET_LIKES_EVENT="LIKE_EVENT";
var GET_NR_LIKES_EVENT=" GET_NR_LIKES_EVENT";
var USERS_WHO_LIKED_TRACK_EVENT="USERS_WHO_LIKED_TRACK_EVENT";

var $=require('jquery')

var CHANGE_EVENT = 'change';

var  tracks = {}
var gTrackId;
var nrLikes;
var $=require('jquery')
var ActionTypes=require('../Actions/ActionTypes')
var AppDispatcher = require('../dispatcher/AppDispatcher');
function likeTrack(trackId,userId) {

    $.get( "/likeTrack?userId="+encodeURIComponent(userId)+"&trackId="+encodeURIComponent(trackId), function( data ) {
        gTrackId=trackId;
        LikeStore.emitLike();
    });
};
function getTrackLikesNr(trackId) {


    $.getJSON( "/getTrackNrLikes?trackId="+encodeURIComponent(trackId), function( data ) {
        nrLikes=data["nr"];
        gTrackId=trackId;
        LikeStore.emitGetNrLikesEvent();
    });
};
var usersLikedTracks
function getUsersWhoLikedTrack(trackId) {


    $.getJSON( "/getUserTrackLiked?trackId="+encodeURIComponent(trackId), function( data ) {

        gTrackId=trackId;
        usersLikedTracks=data;
        LikeStore.emitUsersWhoLikedTrack();
    });
};

var Match_EVENT = 'match';

var LikeStore = Object.assign({}, EventEmitter.prototype, {

emitUsersWhoLikedTrack:function()
{
   this.emit(USERS_WHO_LIKED_TRACK_EVENT)
},

  emitLike: function() {
    this.emit(LIKE_EVENT)
  },
  emitGetLikesEvent:function(){
    this.emit(GET_LIKES_EVENT)
  },
  emitGetNrLikesEvent:function(){
    this.emit(GET_NR_LIKES_EVENT)
  },

  addLikeListener: function(callback) {
    this.addListener(LIKE_EVENT,callback);
  },
  removeLikeListener:function(callback){
    this.removeListener(LIKE_EVENT,callback);
  },
  addGetLikesListener: function(callback) {
    this.addListener(GET_LIKES_EVENT,callback);
  },
  removeGetLikesListener:function(callback){
    this.removeListener(GET_LIKES_EVENT,callback);
  },
  addGetNrLikesListener: function(callback) {
    this.addListener(GET_NR_LIKES_EVENT,callback);
  },
  removeGetNrLikesListener:function(callback){
    this.removeListener(GET_NR_LIKES_EVENT,callback);
  },
  addUsersWhoLikedTrackListener: function(callback) {
    this.addListener(USERS_WHO_LIKED_TRACK_EVENT,callback);
  },
  removeUsersWhoLikedTrackListener:function(callback){
    this.removeListener(USERS_WHO_LIKED_TRACK_EVENT,callback);
  },


  getTrackId:function()
  {
    return gTrackId;
  },
  getNrLikes:function()
  {
    return nrLikes;
  },

  getUsersWichLikedTrack:function()
  {
    return  usersLikedTracks;
  }

 });

AppDispatcher.register(function(action) {

  switch(action.actionType) {
      case ActionTypes.LikeTrack:
       trackId = action.trackId;
       userId=action.userId
       likeTrack(trackId,userId);
       break
      case ActionTypes.GetTrackLikesNr:
        trackId=action.trackId
        getTrackLikesNr(trackId);
      break;
      case ActionTypes.GetUsersWhoLikedTrack:
        trackId=action.trackId
        getUsersWhoLikedTrack(trackId);
      break;

      default:
  }
});

module.exports=LikeStore;

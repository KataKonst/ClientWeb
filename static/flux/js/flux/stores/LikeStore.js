var $=require('jquery')
var EventEmitter = require('events').EventEmitter

var LIKE_EVENT="LIKE_EVENT";
var GET_LIKES_EVENT="LIKE_EVENT";
var GET_NR_LIKES_EVENT=" GET_NR_LIKES_EVENT";
var USERS_WHO_LIKED_TRACK_EVENT="USERS_WHO_LIKED_TRACK_EVENT";
var USER_LIKED_TRACK="USER_LIKED_TRACK"

var $=require('jquery')

var CHANGE_EVENT = 'change';

var  tracks = {}
var gTrackId;
var nrLikes;
var $=require('jquery')
var ActionTypes=require('../Actions/ActionTypes')
var LikesActions=require('../Actions/LikesActions')

var AppDispatcher = require('../dispatcher/AppDispatcher');

function likeTrack(trackId,userId) {
    $.get( "/likeTrack?userId="+encodeURIComponent(userId)+"&trackId="+encodeURIComponent(trackId), function( data ) {
        gTrackId=trackId;
        LikeStore.emitLike();
        LikesActions.checkUserLikedTrack(trackId,userId)

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
var liked;
function getUsersWhoLikedTrack(trackId) {


    $.getJSON( "/getUserTrackLiked?trackId="+encodeURIComponent(trackId), function( data ) {

        gTrackId=trackId;
        usersLikedTracks=data;
        LikeStore.emitUsersWhoLikedTrack();
    });
};


function checkUserLikedTrack(trackId,userId)
{
  $.getJSON( "/checkUserLikedTrack?trackId="+encodeURIComponent(trackId)+"&userId="+encodeURIComponent(userId), function( data ) {

      gTrackId=trackId;
      liked=data["result"];
      LikeStore.emitUsersWhoLikedTrack();
  });

}
function unlike(trackId,userId)
{
  $.get( "/unlike?trackId="+encodeURIComponent(trackId)+"&userId="+encodeURIComponent(userId), function( data ) {

      gTrackId=trackId;
      LikesActions.getTrackNrLikes(trackId)
      LikesActions.checkUserLikedTrack(trackId,userId)
  });

}

var Match_EVENT = 'match';

var LikeStore = Object.assign({}, EventEmitter.prototype, {


emitUserLikedTrackCheck:function()
{
  this.emit(USER_LIKED_TRACK)
},
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
 addCheckUserLikeListener:function(callback)
 {
     this.addListener(USERS_WHO_LIKED_TRACK_EVENT,callback);
 },
 removeCheckUserLikeListener:function(callback)
 {
     this.removeListener(USERS_WHO_LIKED_TRACK_EVENT,callback);
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
  },
  getLiked:function()
  {
    return  liked;
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
      case ActionTypes.checkUserLikedTracks:
        trackId=action.trackId
        userId=action.userId

        checkUserLikedTrack(trackId,userId);
      break;

      case ActionTypes.unlike:
        trackId=action.trackId
        userId=action.userId

        unlike(trackId,userId);
      break;

      default:
  }
});

module.exports=LikeStore;

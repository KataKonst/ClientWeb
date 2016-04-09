var EventEmitter = require('events').EventEmitter;
var ActionTypes=require('../Actions/ActionTypes')
var AppDispatcher = require('../dispatcher/AppDispatcher');
var SoundActions=require('../Actions/SoundActions')
var UserActions=require('../Actions/UserActions')

var userDetails;
var GET_USER_DETAILS_EVENT="GET_USER_DETAILS_EVENT"
var SHOW_USER_PROFILE_EVENT="SHOW_USER_PROFILE_EVENT"
var SEARCH_USER_EVENT="SEARCH_USER_EVENT"
var GET_USER_LIKED_TRACKS_EVENT="GET_USER_LIKED_TRACKS_EVENT"
var SHOW_USER_DETAILS_EVENT="SHOW_USER_DETAILS_EVENT"
var IS_USER_FOLLOWING_EVENT="IS_USER_FOLLOWING_EVENT"
var FOLLOW_USER_EVENT="FOLLOW_USER_EVENT"



var UserSearchResults;
var searchText;
var userId
var user
var tracks
var isUserFollow
var curentUserId


function showFollowing(pUserId)
{
  $.getJSON( "/getFollowing?userId="+encodeURIComponent(pUserId), function( data ) {
      UserSearchResults=data
      searchText="asd"
      UserStore.emitSearchUserEvent()

    });


}

function showFollowers(pUserId)
{
  $.getJSON( "/getFollowers?userId="+encodeURIComponent(pUserId), function( data ) {
      UserSearchResults=data
      searchText="as"

      UserStore.emitSearchUserEvent()

    });


}

function isUserFollowingUser(pUserId,followUserId)
{

  $.getJSON( "/isUserFollowing?userId="+encodeURIComponent(pUserId)+"&followId="+(followUserId), function( data ) {

      isUserFollow=data
      UserStore.emitIsUserFollowing()
    });
}

function getCurrentUser()
{

  $.get( "/getUserId", function( data ) {
      curentUserId=data
  });


}

function getUserDetails(pUserId)
{
  $.getJSON( "/getUserById?userId="+encodeURIComponent(pUserId), function( data ) {

      userId=pUserId
      user=data;
      UserStore.emitGetUserDetails()
    });

}
function followUser(pUserId,followUserId)
{
  $.get( "/followUser?userId="+encodeURIComponent(pUserId)+"&followId="+encodeURIComponent(followUserId), function( data ) {

      UserActions.isUserFollowingUser(pUserId,followUserId)
    });

}
function unFollowUser(pUserId,followUserId)
{
  $.get( "/unfollowUser?userId="+encodeURIComponent(pUserId)+"&followId="+encodeURIComponent(followUserId), function( data ) {

    UserActions.isUserFollowingUser(pUserId,followUserId)
    });

}

function showUserProfile(puserId)
{


}

function searchUser(pSearchText)
{

  $.getJSON( "/searchUser?searchText="+encodeURIComponent(pSearchText), function( data ) {

      UserSearchResults=data
      searchText=pSearchText
      UserStore.emitSearchUserEvent()
    });
}

function getUserLikedTracks(userId)
{
  $.getJSON( "/getUserLikedTracks?userId="+encodeURIComponent(userId), function( data ) {
       tracks=data;
       UserStore.emitGetUserLikedTracks()
    });
}

var UserStore=Object.assign({}, EventEmitter.prototype, {


    emitIsUserFollowing:function () {
      this.emit(IS_USER_FOLLOWING_EVENT)
    },
    emitFollowUserEvent:function() {
         this.emit(FOLLOW_USER_EVENT)

    },
   emitGetUserDetails:function()
   {
     this.emit(GET_USER_DETAILS_EVENT);
   },
   emitGetUserLikedTracks:function()
   {
     this.emit(GET_USER_LIKED_TRACKS_EVENT)
   },
   emitSearchUserEvent:function()
   {
     this.emit(SEARCH_USER_EVENT);
   },
   emitShowUserProfileEvent:function()
   {
     this.emit(SHOW_USER_PROFILE_EVENT);
   },
   addFollowUserListener:function(callback)
   {
     this.addListener(FOLLOW_USER_EVENT,callback)
   },
   removeFollowUserListener:function(callback)
   {
     this.removeListener(FOLLOW_USER_EVENT,callback)
   },
   addGetUserLikedTracksEventListener:function(callback)
   {
     this.addListener(GET_USER_LIKED_TRACKS_EVENT,callback)
   },
   removeGetUserLikedTracksEventListener:function(callback)
   {
     this.removeListener(GET_USER_LIKED_TRACKS_EVENT,callback)
   },
   addUserFollowingListener:function(callback)
   {
        this.addListener(IS_USER_FOLLOWING_EVENT,callback)
   },
   removeUserFollowingListener:function(callback)
   {
     this.removeListener(IS_USER_FOLLOWING_EVENT,callback)
   },
   addSearchUserListener:function(callback)
   {
    this.addListener(SEARCH_USER_EVENT,callback)
   },
   removeSearchUserListener:function(callback)
   {
     this.removeListener(SEARCH_USER_EVENT,callback)
   },
   addGetUserDetailsListener:function(callback)
   {
     this.addListener(GET_USER_DETAILS_EVENT,callback)
   },
   removeGetUserDetailsListener:function(callback)
   {
     this.removeListener(GET_USER_DETAILS_EVENT,callback)
   },
   showUserProfileListener:function(callback)
   {
     this.addListener(SHOW_USER_PROFILE_EVENT,callback)
   },
   removeShowProfileListener:function(callback)
   {
     this.removeListener(SHOW_USER_PROFILE_EVENT,callback)
   },
   getUserSearchResults:function()
   {
     return UserSearchResults
   },
   getSearchText:function()
   {
     return searchText
   },
   getUser:function()
   {
     return user;
   },
   getTracks:function()
   {
     return tracks;
   },
   getCurrentUserId:function()
   {
     return curentUserId;
   },
   getFollowingResult:function()
   {
     return isUserFollow;
   }
 });

 AppDispatcher.register(function(action) {

   switch(action.actionType) {
       case ActionTypes.GetUserDetailsEvent:
            userId=action.userId

            getUserDetails(userId);
        break
        case ActionTypes.ShowUserProfile:
             userId=action.userId
             showUserProfile(userId);
         break
         case ActionTypes.searchUsers:

               searchText=action.searchText
               searchUser(searchText)
        break
        case  ActionTypes.getUserLikedTracks:
            userId=action.userId
            getUserLikedTracks(userId);
            break
            case  ActionTypes.isUserFollowingUser:
                userId=action.userId
                followUserId=action.followUserId
                isUserFollowingUser(userId,followUserId);
                break
            case ActionTypes.followUser:
            userId=action.userId
            followUserId=action.followUserId
            followUser(userId,followUserId);
            break
            case ActionTypes.unFollowUser:
            userId=action.userId
            followUserId=action.followUserId
            unFollowUser(userId,followUserId);
            break
            case ActionTypes.getLoggedUserId:
            getCurrentUser();
            break
            case ActionTypes.showFollowing:
              var userId=action.userId
            showFollowing(userId);
            break

            case ActionTypes.showFollowers:
              var userId=action.userId
            showFollowers(userId);




       default:
   }
 });







module.exports=UserStore

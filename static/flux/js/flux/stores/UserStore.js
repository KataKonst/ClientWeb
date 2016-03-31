var EventEmitter = require('events').EventEmitter;
var ActionTypes=require('../Actions/ActionTypes')
var AppDispatcher = require('../dispatcher/AppDispatcher');
var SoundActions=require('../Actions/SoundActions')
var userDetails;
var GET_USER_DETAILS_EVENT="GET_USER_DETAILS_EVENT"
var SHOW_USER_PROFILE_EVENT="SHOW_USER_PROFILE_EVENT"
var SEARCH_USER_EVENT="SEARCH_USER_EVENT"

var UserSearchResults;
var searchText;
var userId
var user
function getUserDetails(pUserId)
{
  $.getJSON( "/getUserById?userId="+encodeURIComponent(pUserId), function( data ) {

      userId=pUserId
      user=data;
      UserStore.emitGetUserDetails()
    });

}

function showUserProfile(userId)
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

var UserStore=Object.assign({}, EventEmitter.prototype, {


   emitGetUserDetails:function()
   {
     this.emit(GET_USER_DETAILS_EVENT);
   },
   emitSearchUserEvent:function()
   {
     this.emit(SEARCH_USER_EVENT);
   },
   emitShowUserProfileEvent:function()
   {
     this.emit(SHOW_USER_PROFILE_EVENT);
   }
   ,
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
   getUser()
   {
     return user;
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
       default:
   }
 });







module.exports=UserStore

var EventEmitter = require('events').EventEmitter;
var ActionTypes=require('../Actions/ActionTypes')
var AppDispatcher = require('../dispatcher/AppDispatcher');

var userDetails;
var GET_USER_DETAILS_EVENT="GET_USER_DETAILS_EVENT"
var SHOW_USER_PROFILE_EVENT="SHOW_USER_PROFILE_EVENT"


function getUserDetails(userId)
{

}

function showUserProfile(userId)
{

}

var UserStore=Object.assign({}, EventEmitter.prototype, {


   emitGetUserDetails:function()
   {
     this.emit(GET_USER_DETAILS_EVENT);
   },
   emitShowUserProfileEvent:function()
   {
     this.emit(SHOW_USER_PROFILE_EVENT);
   }
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
   }

 });

 AppDispatcher.register(function(action) {

   switch(action.actionType) {
       case ActionTypes.GetUserDetailsEvent:
            userId=action.userId
            likeTrack(userId);
        break
        case ActionTypes.ShowUserProfile:
             userId=action.userId
             showUserProfile(userId);
         break
       default:
   }
 });






}

var AppDispatcher = require('../dispatcher/AppDispatcher');
var ActionTypes = require('./ActionTypes');


var UserActions={

  getUserDetails: function (userId) {

      AppDispatcher.dispatch({
          actionType: ActionTypes.GetUserDetailsEvent,
          userId: userId
      });

  },
  getLoggedUserId:function()
  {
    AppDispatcher.dispatch({
        actionType: ActionTypes.getLoggedUserId,
    });

  },
  showUserProfile: function (userId) {

      AppDispatcher.dispatch({
          actionType: ActionTypes.ShowUserProfile,
          userId: userId
      });

  },
  getUserPhotoLink:function(userId)
  {
    AppDispatcher.dispatch({
        actionType: ActionTypes.getUserPhotoLink,
        userId: userId
    });

  },
  getUserLikedTracks:function(userId){
    AppDispatcher.dispatch({
        actionType:   ActionTypes.getUserLikedTracks,
        userId: userId
    });

  },
  isUserFollowingUser:function(userId,followUserId)
  {
    AppDispatcher.dispatch({
        actionType:   ActionTypes.isUserFollowingUser,
        userId: userId,
        followUserId:followUserId
    });


  },
  followUser:function(userId,followUserId)
  {
    AppDispatcher.dispatch({
        actionType:   ActionTypes.followUser,
        userId: userId,
        followUserId:followUserId
    });

},
unFollowUser:function(userId,followUserId)
{
  AppDispatcher.dispatch({
      actionType:   ActionTypes.unFollowUser,
      userId: userId,
      followUserId:followUserId
  });


},
showFollowers:function(userId)
{
  AppDispatcher.dispatch({
      actionType:   ActionTypes.showFollowers,
      userId: userId
      });


},
showFollowing:function(userId)
{
  AppDispatcher.dispatch({
      actionType:   ActionTypes.showFollowing,
      userId: userId
      });


}


}

module.exports=UserActions

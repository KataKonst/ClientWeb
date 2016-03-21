var AppDispatcher = require('../dispatcher/AppDispatcher');
var ActionTypes = require('./ActionTypes');

var LikesActions = {

  likeTrack: function (userId,trackId) {

        AppDispatcher.dispatch({
            actionType: ActionTypes.LikeTrack,
            trackId: trackId,
            userId:userId
        });
    },
  getTrackNrLikes: function (trackId) {



          AppDispatcher.dispatch({
              actionType: ActionTypes.GetTrackLikesNr,
              trackId: trackId,
          });
      },
      getUsersWhoLikedTrack: function (trackId) {
        alert(trackId)
                AppDispatcher.dispatch({
                  actionType: ActionTypes.GetUsersWhoLikedTrack,
                  trackId: trackId,
              });
          },

}

  module.exports=LikesActions

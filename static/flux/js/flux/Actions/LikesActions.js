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
                AppDispatcher.dispatch({
                  actionType: ActionTypes.GetUsersWhoLikedTrack,
                  trackId: trackId,
              });
          },
      checkUserLikedTrack:function(trackId,userId)
          {

            AppDispatcher.dispatch({
              actionType: ActionTypes.checkUserLikedTracks,
              trackId: trackId,
              userId:userId
            });

          },
          unLike:function(trackId,userId)
          {

              AppDispatcher.dispatch({
                          actionType: ActionTypes.unlike,
                          trackId: trackId,
                          userId:userId
                        });

          }

}

  module.exports=LikesActions

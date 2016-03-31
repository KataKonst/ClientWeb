var AppDispatcher = require('../dispatcher/AppDispatcher');
var ActionTypes = require('./ActionTypes');

var HashTagsActions={

  getHashTagsForTrack: function (trackId) {

        AppDispatcher.dispatch({
            actionType: ActionTypes.getHashTagsForTrack,
            trackId: trackId,
        });
    },
  searchTracksByHashTags:function(hashId){
    console.log("searchTracksByHashTags")

    AppDispatcher.dispatch({
        actionType: ActionTypes.getTracksByHashTags,
        hashId: hashId,
    });


  },
  getAllHashTag:function(){
    AppDispatcher.dispatch({
        actionType: ActionTypes.getAllHashTag,
    });


  }


}


module.exports=HashTagsActions

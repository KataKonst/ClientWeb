/**
 * Created by katakonst on 3/16/16.
 */

var AppDispatcher = require('../dispatcher/AppDispatcher');
var ActionTypes = require('./ActionTypes');

var PlayListActions = {


    AddToPlayList: function (trackId,section,playId) {
         AppDispatcher.dispatch({
            actionType: ActionTypes.AddTracktoPlayList,
            trackId: trackId,
             section: section,
             playId: playId

        });
    },

    CreatePlayList: function(trackId,section,playlistNume,userId)
    {
         AppDispatcher.dispatch({
            actionType: ActionTypes.CreatePlayList,
            trackId: trackId,
             section: section,
             playlistNume: playlistNume,
             userId:userId

        });

    },

     ListPlayList: function(trackId,section)
    {

         AppDispatcher.dispatch({
            actionType: ActionTypes.listPlayList,
            trackId: trackId,
             section: section,

        });

    },

    ListPlayListTracks : function(trackId,sectionTracks,playId)
    {

       AppDispatcher.dispatch({
            actionType: ActionTypes.listPlayListTracks,
            trackId: trackId,
             section: sectionTracks,
             playId: playId

        });

    },

    showPlayLists :function(trackId,sectionTracks){
        AppDispatcher.dispatch({
             actionType: ActionTypes.showPlayList,
             trackId: trackId,
             section: sectionTracks,
        });
    },

    hidePlayLists :function(trackId,sectionTracks){
        AppDispatcher.dispatch({
             actionType: ActionTypes.hidePlayList,
             trackId: trackId,
             section: sectionTracks,
        });
    },


    getPlayListsUsers:function(userId)
    {
      AppDispatcher.dispatch({
           actionType: ActionTypes.playListsOfUser,
           trackId: userId,
      });

    },
    deletePlayList:function(playId,userId)
    {
      AppDispatcher.dispatch({
        actionType:ActionTypes.deletePlayList,
        playId:playId,
        userId:userId
      })
    }


}


module.exports=PlayListActions

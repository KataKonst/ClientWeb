/**
 * Created by katakonst on 3/16/16.
 */


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
    }


}
/**
 * Created by katakonst on 3/12/16.
 */

var AppDispatcher = require('../dispatcher/AppDispatcher');
var ActionTypes = require('./ActionTypes');

var SoundActions = {

    /**
     * @param  {string} text
     */


    match: function (text) {

        AppDispatcher.dispatch({
            actionType: "match2",
            text: text
        });
    },
    PlaySong:function(trackLink,trackName,id)
  {

            AppDispatcher.dispatch({
                actionType: ActionTypes.PlaySong,
                trackLink: trackLink,
                trackName: trackName,
                id:id

            });
  },
  addVis:function(trackId)
{


          AppDispatcher.dispatch({
              actionType: ActionTypes.AddVis,
              trackId: trackId

          });
},
getVis:function(trackId)
{


        AppDispatcher.dispatch({
            actionType: ActionTypes.GetVis,
            trackId: trackId

        });
},
searchTracks:function(searchText)
{
  alert("Action")
  AppDispatcher.dispatch({
      actionType: ActionTypes.searchTracks,
      searchText: searchText

  });

}








}
module.exports=SoundActions

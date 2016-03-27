/**
 * Created by katakonst on 3/12/16.
 */

var AppDispatcher = require('../dispatcher/AppDispatcher');
var ActionTypes = require('./ActionTypes');

var SoundActions = {




    match: function (text) {

        AppDispatcher.dispatch({
            actionType: "match2",
            text: text
        });
    },
    PlaySong:function(trackLink,trackName,id,orderId)
  {

            AppDispatcher.dispatch({
                actionType: ActionTypes.PlaySong,
                trackLink: trackLink,
                trackName: trackName,
                id:id,
                orderId:orderId

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
  AppDispatcher.dispatch({
      actionType: ActionTypes.searchTracks,
      searchText: searchText

  });

},

setSearchCriteria:function(searchCriteria)
{
  AppDispatcher.dispatch({
      actionType: ActionTypes.setSearchCriteria,
      searchCriteria: searchCriteria

  });


},
searchUser:function(searchText){

AppDispatcher.dispatch({
   actionType:ActionTypes.searchUsers,
   searchText:searchText
})

},
forward:function(){
AppDispatcher.dispatch({
   actionType:ActionTypes.forward,
})

},
backward:function(){
  console.log("ss")

AppDispatcher.dispatch({
   actionType:ActionTypes.backward,
})

},

setTracks:function(tracks){

  AppDispatcher.dispatch({
     actionType:ActionTypes.setTracks,
     tracks:tracks
   })

},

}
module.exports=SoundActions

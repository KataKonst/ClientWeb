/**
 * Created by katakonst on 3/16/16.
 */

var AppDispatcher = require('../dispatcher/AppDispatcher');
var ActionTypes = require('./ActionTypes');

var CommentActions={
    AddComment: function (text,user,trackId) {

        AppDispatcher.dispatch({
            actionType:ActionTypes.addComents,
            text: text,
            user :user,
            trackId: trackId
        });
    },

     ListComments: function (trackId,sec) {

         AppDispatcher.dispatch({
            actionType: ActionTypes.listComments,
            trackId: trackId,
             section: sec


        });
    },
    deleteComm:function(commId,trackId)
    {
      AppDispatcher.dispatch({
         actionType: ActionTypes.deleteComm,
         commId: commId,
         trackId: trackId

       });

    }



}

module.exports=CommentActions

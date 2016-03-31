var AppDispatcher = require('../dispatcher/AppDispatcher');
var ActionTypes = require('./ActionTypes');


var UserActions={

  getUserDetails: function (userId) {

      AppDispatcher.dispatch({
          actionType: ActionTypes.GetUserDetailsEvent,
          userId: userId
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

  }


}

module.exports=UserActions

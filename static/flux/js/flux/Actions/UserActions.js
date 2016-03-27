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

  }


}

module.exports=UserActions

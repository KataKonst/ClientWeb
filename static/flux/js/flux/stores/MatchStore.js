var $=require('jquery')



var EventEmitter = require('events').EventEmitter;
var CHANGE_EVENT = 'change';

var  tracks = {}

var $=require('jquery')
var ActionTypes=require('../Actions/ActionTypes')
var AppDispatcher = require('../dispatcher/AppDispatcher');
function match(text) {


    $.getJSON( "/jsonResults?nume="+encodeURIComponent(text), function( data ) {
        tracks=data;
        MatchStore.emitMatch();
    });

};





var Match_EVENT = 'match';

var MatchStore = Object.assign({}, EventEmitter.prototype, {



  emitMatch: function() {
    this.emit(Match_EVENT)
  },


  addMatchListener: function(callback) {
    this.addListener(Match_EVENT,callback);
  },


getAllTracks: function() {
    return tracks;
  },


  removeMatchListener: function(callback) {
    this.removeListener(Match_EVENT, callback);
  }
});






AppDispatcher.register(function(action) {
  var text;




  switch(action.actionType) {
    case "match2":
      text = action.text;

      if (text !== '') {
        match(text);
      }
      break;

      default:
  }
});

module.exports=MatchStore;

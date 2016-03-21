var CHANGE_EVENT = 'change';

var _todos = {};
var trackLink
var trackName
var viz;
var trackId






var EventEmitter = require('events').EventEmitter;
var ActionTypes=require('../Actions/ActionTypes')
var AppDispatcher = require('../dispatcher/AppDispatcher');
var CHANGE_EVENT = 'change';
var PLAY_EVENT = 'PLAY_EVENT';
var GET_VIZ_EVENT = 'GET_VIZ_EVENT';
var ADD_VIZ_EVENT = 'ADD_VIZ_EVENT';


var $=require('jquery')

function setPlaySong(strackName,strackId)
{
  trackLink=strackId;
  trackName=strackName;
  TrackStore.emitPlayEvent();
}


function addVis(id)
{
  $.getJSON( "/addVis?id="+encodeURIComponent(id), function( data ) {
      trackId=id;
      TrackStore.emitAddVisEvent();
    });
}

function getVis(id)
{

  $.getJSON( "/getVis?id="+encodeURIComponent(id), function( data ) {

      trackId=id;
      viz=data;
      TrackStore.emitGetVisEvent();
    });

}


var TrackStore = Object.assign({}, EventEmitter.prototype, {

  emitGetVisEvent: function() {
    this.emit(GET_VIZ_EVENT)
  },
  emitAddVisEvent: function() {
    this.emit(ADD_VIZ_EVENT)
  },
  emitPlayEvent: function() {
    this.emit(PLAY_EVENT)
  },
  emitChange: function() {
    this.emit(CHANGE_EVENT)
  },
  addChangeListener: function(callback) {
  },

addGetVisListener:function(callback)
{
  this.addListener(GET_VIZ_EVENT,callback)
},
removGetVisListener:function(callback)
{
  this.removeListener(GET_VIZ_EVENT,callback)
},

  addVisListener:function(callback)
  {
    this.addListener(ADD_VIZ_EVENT,callback)
  },
  removeAddVisListener:function(callback)
  {
    this.removeListener(ADD_VIZ_EVENT,callback)
  },
  addPLayListener:function(callback)
  {
   this.addListener(PLAY_EVENT,callback)
  },
  removePLayListener:function(callback)
  {
   this.removeListener(PLAY_EVENT,callback)
  },
  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },
  getTrackName: function() {
    return trackName
  },
  getTrackLink:function()
  {
    return trackLink
  },
  getTrackId:function()
  {
    return trackId
  },
  getViews:function()
  {
    return viz
  }
});

  AppDispatcher.register(function(action) {
      var text;
      switch(action.actionType) {
      case "match":
         text = action.text.trim();
         if (text !== '') {
             create(text);
             TrackStore.emitChange();
          }
          break;
       case ActionTypes.PlaySong:
        trackNme=action.trackName
        trackd=action.trackLink
        setPlaySong(trackNme,trackd)
        break;
        case ActionTypes.AddVis:
         trackd=action.trackId
         addVis(trackd)
         case ActionTypes.GetVis:
          trackd=action.trackId
          getVis(trackd)

        default:
  }
});

module.exports=TrackStore

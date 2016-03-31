var $=require('jquery')
var EventEmitter = require('events').EventEmitter;
var GET_HASH_TAG_EVENT="GET_HASH_TAG_EVENT"
var GET_HASH_ALL_TAG_EVENT="GET_HASH_ALL_TAG_EVENT"

var ActionTypes=require('../Actions/ActionTypes')

var AppDispatcher = require('../dispatcher/AppDispatcher');

var hashTags;
var id;
function  getHashTagsForTrack(trackId){

  $.getJSON( "/getHashOfTrack?trackId="+encodeURIComponent(trackId), function( data ) {
      id=trackId;
      hashTags=data
      HashTagStore.emitGetHashTagsEvent();
  });

}
function getAllHashTags()
{

       $.getJSON("/getAllHashs",function(data){
            hashTags=data
            HashTagStore.emitGetAllHashTagEvent()

       })
}



var HashTagStore=Object.assign({}, EventEmitter.prototype, {

emitGetAllHashTagEvent()
{
  this.emit(GET_HASH_ALL_TAG_EVENT)
},

emitGetHashTagsEvent:function()
{
  this.emit(GET_HASH_TAG_EVENT)
},
addGetHashTagsEventListener:function(callback)
{
    this.addListener(GET_HASH_TAG_EVENT,callback)
},
removeGetHashTagsEventListener:function(callback)
{
    this.removeListener(GET_HASH_TAG_EVENT,callback)

},
addGetAllHashTagEventListener:function(callback)
{
    this.addListener(GET_HASH_ALL_TAG_EVENT,callback)
},
removeGetAllHashTagEventListener:function(callback)
{
  this.removeListener(GET_HASH_ALL_TAG_EVENT,callback)
},
getTrackId:function()
{
  return id
},
getHashTagsForTrack:function()
{
  return hashTags
},
getHashTags:function()
{
  return hashTags
}




});


AppDispatcher.register(function(action) {
  var text;

    switch(action.actionType) {
    case ActionTypes.getHashTagsForTrack:
        var trackId = action.trackId;
        getHashTagsForTrack(trackId);
    break;
    case ActionTypes.getAllHashTag:
    getAllHashTags();
    default:
  }
});
module.exports=HashTagStore

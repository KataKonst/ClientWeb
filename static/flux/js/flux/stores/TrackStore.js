var CHANGE_EVENT = 'change';

var trackLink
var trackName
var viz;
var trackId
var searchText
var currentPosition=0






var EventEmitter = require('events').EventEmitter;
var ActionTypes=require('../Actions/ActionTypes')
var SoundActions=require('../Actions/SoundActions')

var AppDispatcher = require('../dispatcher/AppDispatcher');
var CHANGE_EVENT = 'change';
var PLAY_EVENT = 'PLAY_EVENT';
var GET_VIZ_EVENT = 'GET_VIZ_EVENT';
var ADD_VIZ_EVENT = 'ADD_VIZ_EVENT';
var SEARCH_TRACKS_EVENT = 'SEARCH_TRACKS_EVENT';
var SEARCH_TRACKS_BY_HASH_TAG_EVENT = 'SEARCH_TRACKS_BY_HASH_TAG_EVENT';
var GET_TRACKS_BY_USER_EVENT = 'GET_TRACKS_BY_USER_EVENT';
var DELETE_TRACK_EVENT = 'DELETE_TRACK_EVENT';




var divid
var trackId

var $=require('jquery')

var pOrderId=0;

function setPlaySong(strackName,strackId,_div,OrderId)
{
  trackLink=strackId;
  trackName=strackName;
  divid=_div;
  pOrderId=OrderId
  TrackStore.emitPlayEvent();
}

function searchByHashTag(trackId)
{
  $.getJSON("/search?searchText="+encodeURIComponent(searchText),function(data){
       trackSearchResults=data
       searchText=pSearchText
       TrackStore.emitSearchTextEvent()

  })

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
var trackSearchResults;

function searchTracks(pSearchText)
{
  console.log("searchTracks")

     $.getJSON("/search?searchText="+encodeURIComponent(searchText),function(data){
          trackSearchResults=data
          searchText=pSearchText
          TrackStore.emitSearchTextEvent()

     })

}

 function  getTracksFollowed(userId){


   $.getJSON("/getUserFollowingTracks?userId="+encodeURIComponent(userId),function(data){
        trackSearchResults=data
        TrackStore.emitSearchTextEvent()

   })


 }

function setTracks(tracks)
{
  trackSearchResults=tracks
}

function getAllHashTags()
{

       $.getJSON("/search?searchText="+encodeURIComponent(searchText),function(data){
            trackSearchResults=data
            searchText=pSearchText
            TrackStore.emitSearchTextEvent()

       })
}

function forwardSong(){
  if(pOrderId+1<trackSearchResults.length){
pOrderId=pOrderId+1
console.log(pOrderId)
trackLink=trackSearchResults[pOrderId]['link'];
trackName=trackSearchResults[pOrderId]['nume']
divid="t"+trackSearchResults[pOrderId]['id']
TrackStore.emitPlayEvent();
}





}

function backwardSong(){
  alert("Rele"+pOrderId)

  if(pOrderId-1>=0){
pOrderId=pOrderId-1
console.log(pOrderId)
trackLink=trackSearchResults[pOrderId]['link'];
trackName=trackSearchResults[pOrderId]['nume']
divid="t"+trackSearchResults[pOrderId]['id']
TrackStore.emitPlayEvent();
}
}

function  searchTracksByHashTags(hashId)
{
  $.getJSON("/getTracksOfHash?hashId="+encodeURIComponent(hashId),function(data){
       trackSearchResults=data
       searchText=hashId
       TrackStore.emitSearchTextEvent()

  })

}
function  getTracksUploadedByUser(userId)
{

  $.getJSON("/userUploadedTracks?userId="+encodeURIComponent(userId),function(data){
       trackSearchResults=data
       searchText=userId
       TrackStore.emitTracksSearchedByUse();

  })
}

function deleteTrack(trackId,userId)
{

    $.get("/deleteTrack?trackId="+encodeURIComponent(trackId),function(data){

         searchText="sada"
         SoundActions.getTracksUploadedByUser(userId)
         TrackStore.emitDeleteTrackEvent();

    })

}



var TrackStore = Object.assign({}, EventEmitter.prototype, {

emitDeleteTrackEvent:function()
{
  this.emit(DELETE_TRACK_EVENT)
},
  emitTracksSearchedByUse:function(){
      this.emit(GET_TRACKS_BY_USER_EVENT)
  },
  emitGetVisEvent: function() {
    this.emit(GET_VIZ_EVENT)
  },
  emitSearchTextEvent: function() {
    this.emit(SEARCH_TRACKS_EVENT)
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
 addSearchTracksEvent :function(callback)
 {
   this.addListener(SEARCH_TRACKS_EVENT,callback)
 },
 addDeleTrackListener:function(callback)
 {
   this.addListener(DELETE_TRACK_EVENT,callback)
 },
 removeDeleteTrackListener:function(callback)
 {
   this.removeListener(DELETE_TRACK_EVENT,callback)
 },
 addTracksSearchedByUserListener:function(callback)
 {
   this.addListener(GET_TRACKS_BY_USER_EVENT,callback)
 },
removeTracksSearchedByUserListener:function(callback)
 {
   this.removeListener(GET_TRACKS_BY_USER_EVENT,callback)
 },
removeSearchTracksEvent:function(callback){
  this.removeListener(SEARCH_TRACKS_EVENT,callback)
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
  },
  getDiv:function()
  {
    return divid;
  },
  getSearchResults:function()
  {
    return trackSearchResults
  },
  getSearchText:function()
  {
    return searchText
  },
  getTrackId:function()
  {
    return divid;
  },
  getViewTrackId:function()
  {
    return trackId;
  },
  getOrderId:function()
  {
    return pOrderId;
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
            divid=action.id
            orderId=action.orderId
            setPlaySong(trackNme,trackd,divid,orderId)
        break;

    case ActionTypes.AddVis:
           trackd=action.trackId
          addVis(trackd)
          break

    case ActionTypes.GetVis:
           trackd=action.trackId
           getVis(trackd)
          break

  case ActionTypes.searchTracks:

         text=action.searchText
         searchTracks(text);
         break
   case ActionTypes.forward:
       forwardSong();
       break
   case ActionTypes.backward:
       backwardSong()
       break
  case ActionTypes.setTracks:
    tracks=action.tracks
    setTracks(tracks)
  break

  case ActionTypes.checkUserLikedTrack:
  break
  case ActionTypes.getTracksByHashTags:
    hashId=action.hashId
   searchTracksByHashTags(hashId)
  break
  case ActionTypes.getTracksUploadedByUser:
    userId=action.userId
    getTracksUploadedByUser(userId)

    break
    case ActionTypes.deleteTrack:

    trackId=action.trackId;
    userId=action.userId;
    deleteTrack(trackId,userId)

    break;
    case ActionTypes.getTracksFollowed:
      var userId=action.userId

    getTracksFollowed(userId)


    default:
  }
});

module.exports=TrackStore

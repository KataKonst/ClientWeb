var $=require('jquery')
/**
 * Created by katakonst on 3/13/16.
 */
/**
 * Created by katakonst on 3/13/16.
 */
var EventEmitter = require('events').EventEmitter;
var CHANGE_EVENT = 'change';
var $=require('jquery')
var AppDispatcher = require('../dispatcher/AppDispatcher');
var ActionTypes=require('../Actions/ActionTypes')
var  comments = {}
var id=0;
var section;


function  addComment(text,user,trackId)
 {
     $.getJSON( "/addComment?text="+encodeURIComponent(text)+"&userid="+encodeURIComponent(user)+"&trackId="+encodeURIComponent(trackId), function( data ) {
         CommentStore.emitList();
     });
 };

function  listComments(trackId,sectionTracks)
{

     $.getJSON( "/getComments?trackId="+encodeURIComponent(trackId), function( data ) {
         id=trackId;

         section=sectionTracks;
         comments=data;
         CommentStore.emitList();
     });
}



var ADD_EVENT = 'addEvent';
var LIST_EVENT = 'listEvent';

var CommentStore = Object.assign({}, EventEmitter.prototype, {
    emitAdd: function() {
    this.emit(ADD_EVENT)
   },
    emitList: function() {
    this.emit(LIST_EVENT)
   },
    addAddCommentListener: function(callback) {
    this.addListener(ADD_EVENT,callback);
   },
    removeAddCommentListener: function(callback) {
    this.removeListener(ADD_EVENT, callback);
   },
    addListCommentsListener: function(callback) {
    this.addListener(LIST_EVENT,callback);
   },
    removeListCommentsListener: function(callback) {
    this.removeListener(LIST_EVENT, callback);
   },
    getComments: function() {
    return comments;
  },
    getId: function() {
    return id;
  },
    getSection: function() {
    return section;
  }
   });


AppDispatcher.register(function(action) {
  var text;

    switch(action.actionType) {
    case ActionTypes.addComents:
      text = action.text;
        var user = action.user;
        var trackId = action.trackId;
        if (text !== '') {
        addComment(text,user,trackId);
      }
      break;
       case ActionTypes.listComments:

           var trackId = action.trackId;
           if (trackId !== '') {
        listComments(trackId,action.section);
      }
      break;
        default:
  }
});
module.exports=CommentStore;

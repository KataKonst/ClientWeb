var ActionTypes=require('../Actions/ActionTypes')
var AppDispatcher = require('../dispatcher/AppDispatcher');
var $=require('jquery')
var searchCriteria;
var EventEmitter = require('events').EventEmitter;

var searchCriteria;

var SET_SEARCH_EVENT="SET_SEARCH_EVENT"

function setSearchCriteria(pSearchCriteria)
{
   searchCriteria=pSearchCriteria
   SearchStore.emitSetSearchCriteriaEvent();
}

var SearchStore=Object.assign({}, EventEmitter.prototype,{

emitSetSearchCriteriaEvent()
{
  this.emit(SET_SEARCH_EVENT)
},
addSearchCriteriaListener(callback)
{
  this.addListener(SET_SEARCH_EVENT,callback)
},
removeSearchCriteriaListener(callback)
{
  this.removeListener(SET_SEARCH_EVENT,callback)
},
getSearchCriteria()
{
  return searchCriteria;
}

});

AppDispatcher.register(function(action) {

  switch(action.actionType) {
      case ActionTypes.setSearchCriteria:
           var searchCriteria=action.searchCriteria
           setSearchCriteria(searchCriteria)
       break

      default:
    }
 });


module.exports=SearchStore

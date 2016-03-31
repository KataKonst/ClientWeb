var React = require('react');
var HashTagStore = require('../../stores/HashTagStore');
var HashTagsActions = require('../../Actions/HashTagsActions');
var HashTagsActions = require('../../Actions/HashTagsActions');
var HashTag=require('./HashTag')

var AllHashTags=React.createClass({

       getInitialState:function()
       {
         return(
           {
             showHashTags:false,
             hashTags:[]
           }
         )
       },
     componentDidMount:function()
     {
      HashTagStore.addGetAllHashTagEventListener(this.setAllHashTags)
      HashTagsActions.getAllHashTag()
     },
     componentWillUnmount:function()
     {
      HashTagStore.removeGetAllHashTagEventListener(this.setAllHashTags)
     },
     setAllHashTags:function()
     {
         this.setState({showHashTags:true,hashTags:HashTagStore.getHashTags()})
     },
     render:function()
     {
       hashTags=[];
       this.state.hashTags.forEach(function(e){
         hashTags.push(<HashTag hashId={e["id"]} hashName={e["description"]}/>)

       });
       return(
         <div>
         {hashTags}
         </div>


       )

     }



})

module.exports=AllHashTags

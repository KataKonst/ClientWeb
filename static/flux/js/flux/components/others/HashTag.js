var React = require('react');
var HashTagStore = require('../../stores/HashTagStore');
var HashTagsActions = require('../../Actions/HashTagsActions');
var HashTagsActions = require('../../Actions/HashTagsActions');


var HashTag=React.createClass({
    propTypes:{
         hashName:React.PropTypes.string.isRequired,
         hashId:React.PropTypes.string.isRequired

    },
    searchTracks:function()
    {
      console.log(this.props.hashId)
      HashTagsActions.searchTracksByHashTags(this.props.hashId)
    },

    render:function()
    {

       return(
           <div>
           <a value={this.props.hashName} onClick={this.searchTracks} className={"hashButton button button-primary button-rounded button-small"}>{this.props.hashName}</a>

           </div>

       )

    },






});
module.exports=HashTag

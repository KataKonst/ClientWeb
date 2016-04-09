var React = require('react');
var HashTagStore = require('../../stores/HashTagStore');
var HashTagsActions = require('../../Actions/HashTagsActions');
var HashTag=require("../others/HashTag")
var HashTagList=React.createClass({

propTypes:{
  trackId:React.PropTypes.string.isRequired
},
getInitialState:function()
{
  return({
  showHashTags:false,
  hashTags:[]
})
},
componentDidMount:function()
{
 HashTagStore.addGetHashTagsEventListener(this.getHashTags)
  HashTagsActions.getHashTagsForTrack(this.props.trackId)
},
componentWillUnmount:function()
{
  HashTagStore.removeGetHashTagsEventListener(this.getHashTags)
},
getHashTags:function()
{
     if(this.props.trackId==HashTagStore.getTrackId())
     {

            this.setState({showHashTags:true,hashTags:HashTagStore.getHashTagsForTrack()})
     }
},
render:function()
{
  var hashTags=[]
  this.state.hashTags.forEach(function(e){
    hashTags.push(<HashTag hashId={e["id"]} hashName={e["description"]}/>)
  })

  return(
    <div className="hashs">
    {hashTags}
    </div>


  )
}

})

module.exports=HashTagList

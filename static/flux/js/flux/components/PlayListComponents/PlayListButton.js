var React=require('react');
var PlayListActions=require('../../Actions/PlayListActions')


var PlayListButton=React.createClass({

propTypes:{

  playId:React.PropTypes.string.isRequired,
  playName:React.PropTypes.string.isRequired,
  userId:React.PropTypes.string.isRequired


},
clickPlayButton:function()
{
  PlayListActions.ListPlayListTracks(0,"s",this.props.playId)
},
deleteList:function()
{
  PlayListActions.deletePlayList(this.props.playId,this.props.userId)
},


render:function()
{

  return(
    <div>
     <input type={"button"} onClick={this.clickPlayButton}
     className={"button button-3d button-action button-pill playButton"}
     value={this.props.playName}/>
     <input type={"button"} onClick={this.deleteList}
     className={"button button-3d button-action button-pill playButton"}
     value={"close"}/>
     </div>


  )
}


})

module.exports=PlayListButton

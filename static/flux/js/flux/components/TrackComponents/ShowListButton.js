var React=require('react');
var PlayListActions=require('../../Actions/PlayListActions')
var PlayListStore=require('../../stores/PlayListStore')
var PlayListModal = require('../PlayListModal')
var TrackStore=require('../../stores/TrackStore')





var ShowListButton =React.createClass({

  propTypes:{
    userId:React.PropTypes.string.isRequired,
    trackId:React.PropTypes.string.isRequired,
    playLists:React.PropTypes.array.isRequired,
    sectionTracks:React.PropTypes.string.isRequired


  },
  getInitialState:function()
  {
    return({showPlayList: false})
  },
  componentDidMount:function(){
    PlayListActions.getPlayListsUsers(this.state.userId)
    PlayListStore.addHidePlayListListener(this.hidePlayList);
    PlayListStore.addShowPlayListsListener(this.listPLayLists)

  },
  listPLayLists: function(){
      if(PlayListStore.getId()==this.props.trackId)
      {

          this.setState({showPlayList: true})
      }
    },

  showLists:function(e){
      PlayListActions.showPlayLists(this.props.trackId, this.props.sectionTracks);

  },
  hidePlayList: function(){
      if(PlayListStore.getId()==this.props.trackId)
      {

          this.setState({showPlayList: false})
      }
    },
  render:function()
  {
    return(
      <div>
           <input type="button"  className={"button button-glow button-rounded button-caution"} onClick={this.showLists} value="addToLists"  />
           { this.state.showPlayList ? < PlayListModal playLists={this.props.playLists} trackId={this.props.trackId} sectionTracks={"s"} /> : null }

     </div>

)
  }



});
module.exports=ShowListButton

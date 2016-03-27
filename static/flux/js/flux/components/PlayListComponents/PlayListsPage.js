var React=require('react')
var PlayListActions=require('../../Actions/PlayListActions')
var PlayListStore=require('../../stores/PlayListStore')
var Boss=require('./Boss')
var CreatePlayListInput=require("./CreatePlayListInput")
var TrackList=require('../TrackComponents/TrackList')



var PlayListsPage=React.createClass({

  propTypes:{
    userId: React.PropTypes.string.isRequired
  },
  getInitialState:function()
  {
    return({
      showUsPlay:false,
      playLists:[],
      showTracks:false,
      tracks:[]
    })
  },
  componentDidMount:function(){
    PlayListStore.addGetUserPlayListListener(this.showUserPlayLists)
    PlayListStore.addListTracksListener(this.listTracks)
    PlayListActions.getPlayListsUsers(this.props.userId)



  },
  listTracks:function(){

      this.setState({tracks:PlayListStore.getTracks(),showTracks:true})

  },
  componentWillUnmount:function()
  {
    PlayListStore.removeGetUserPlayListListener(this.showUserPlayLists)
  },
  showUserPlayLists:function()
  {
      this.setState({showUsPlay:true,playLists:PlayListStore.getPlayLists()})
  },
  render:function()
  {


  return(

    <section id="playListPage">
    <CreatePlayListInput userId={this.props.userId}/>
      {this.state.showUsPlay? <Boss userId={this.props.userId} id={"userPLayList"} playLists={this.state.playLists}/> : null}
<section id={"playListTracks"}>
      {this.state.showTracks? <TrackList tracks={this.state.tracks} sectionTracks={"s"}  playLists={this.state.playLists} userId={this.props.userId}/> : null}
</section>
    </section>
  )
  }

})

module.exports=PlayListsPage

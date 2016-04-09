var React=require('react')
var PlayListActions=require('../../Actions/PlayListActions')
var PlayListStore=require('../../stores/PlayListStore')
var Boss=require('./Boss')
var CreatePlayListInput=require("./CreatePlayListInput")
var TrackList=require('../TrackComponents/TrackList')



var PlayListsPage=React.createClass({

  propTypes:{
    _query: React.PropTypes.object
  },
  getInitialState:function()
  {
    return({
      userId:this.props._query['userId'],
      showUsPlay:false,
      playLists:[],
      showTracks:false,
      tracks:[]
    })
  },
  componentDidMount:function(){
    PlayListStore.addGetUserPlayListListener(this.showUserPlayLists)
    PlayListStore.addListTracksListener(this.listTracks)
    PlayListActions.getPlayListsUsers(this.state.userId)



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
    <div className={"rightNav"}>

    <CreatePlayListInput userId={this.state.userId}/>
    {this.state.showUsPlay? <Boss userId={this.state.userId} id={"userPLayList"} playLists={this.state.playLists}/> : null}
       </div>
       <div className={"container"}>

<div className={"playListTracks"}>
      {this.state.showTracks? <TrackList tracks={this.state.tracks} sectionTracks={"s"}  playLists={this.state.playLists} userId={this.state.userId}/> : null}
</div>
</div>
    </section>
  )
  }

})

module.exports=PlayListsPage

/**
 * Created by katakonst on 3/13/16.
 */
var React = require('react');
var AddToPlayListButton=require('../PlayListComponents/AddToPlayListButton')
var PlayList=require('../PlayListComponents/PlayList')
var CommentStore=require('../../stores/CommentStore')
var PLayListStore=require('../../stores/PlayListStore')
var CommentList=require('../CommentComponents/CommentList')
var TrackStore=require('../../stores/TrackStore')
var PlayListActions=require('../../Actions/PlayListActions')
var LikesActions=require('../../Actions/LikesActions')
var CommentActions=require('../../Actions/CommentActions')
var SoundActions=require('../../Actions/SoundActions')

var ActionTypes=require('../../Actions/ActionTypes')

var AddToPlayLists=require('../PlayListComponents/AddToPlayLists')
var AudioPlayerBB = require('./AudioPlayerBB');
var PlayListModal = require('../PlayListModal')
var Router = require('react-router-component')
var Locations = Router.Locations
var Location = Router.Location
var Link = Router.Link
var Track =require("./Track")
var LikeTrackButton= require("./LikeTrackButton")
var $=require('jquery')
var ShowListButton=require('./ShowListButton')
var PlayButton=require('./PlayButton')
var HashTagList=require('./HashTagList')
var DeleteTrackButton=require('./DeleteTrackButton')

var AudioTrackPlayer = React.createClass({

  propTypes: {
      name: React.PropTypes.string.isRequired,
      link: React.PropTypes.string.isRequired,
      id: React.PropTypes.number.isRequired,
      sectionTracks :React.PropTypes.string.isRequired,
      userId:React.PropTypes.string.isRequired,
      photoLink:React.PropTypes.string.isRequired,
      orderId:React.PropTypes.string.isRequired,
      isProfile:React.PropTypes.bool.isRequired,
      uploaderId:React.PropTypes.string.isRequired
  },

    getInitialState: function() {

    return {
        name: this.props.name,
        link: this.props.link,
        id: this.props.id,
        show:false,
        showPlayList:false,
        playLists: [],
        sectionTracks:this.props.sectionTracks,
        userId:this.props.userId,
        photoLink:this.props.photoLink,
        views:"0",
        likesNr:"0",
        isPlay:false,
        playBut:"Play",

    }
    },


    handleClick: function (e) {

     SoundActions.match(this.props.name);

       this.getTodoState
     },



    onChange: function() {

    },
    componentDidMount: function() {
          TrackStore.addChangeListener(this._onChange);
          TrackStore.addGetVisListener(this.setViews);
          SoundActions.getVis(this.state.id);
          PLayListStore.addGetUserPlayListListener(this.showUserPlayLists)
          PlayListActions.getPlayListsUsers(this.state.userId)
    },

    componentWillUnmount: function() {
      TrackStore.removGetVisListener(this.setViews)
      PLayListStore.removeGetUserPlayListListener(this.showUserPlayLists)
    },
    showUserPlayLists:function()
    {
      this.setState({playLists: PLayListStore.getPlayLists()})

    },

    setLikesNr:function()
    {
      if(this.state.id==TrackStore.getViewTrackId())
          {
            this.setState({likesNr:TrackStore.getNrLikes()})
          }
    },

    setViews:function()
    {

             if(this.state.id==TrackStore.getViewTrackId())
                 {
                   this.setState({views:TrackStore.getViews()})
                 }
    },


    progressBar:function(e)
    {
      var fix=document.getElementById("FixedPlayer")
      var value_clicked = (e.nativeEvent.offsetX/160)*fix.duration;
     if(TrackStore.getTrackId().substring(1)==this.state.id){
        fix.currentTime=value_clicked;
    }
  },

    render: function() {
        var link=ActionTypes.ip+this.state.link ;
        var name=this.state.name;
        var id=this.state.id;
        var userId=0
        var clss="matchButton btnMatch"
        var plr="playe";
        var photoLink=ActionTypes.ip+this.state.photoLink
        var playlit =
          [{ url: link,
             displayText:name }]
             var id="t"+id;
       var lnk="/track/ss?id="+this.state.id+"&photoLink="+this.state.photoLink+"&trackLink="+this.state.link+"&trackName="+name+"&userId="+this.state.userId;
var profileLink="/profile?userId="+this.props.uploaderId+"&logged=false"
        return (
              <section className={"trackPlayer"}>


              <div className={"imgdiv"}>
                <img src={photoLink} height="122" width="122"/>

              </div>
              <div id={"buttonsPanel"}>
    <div className={"userPage"}>
    <HashTagList trackId={this.state.id}/>


       </div>
       <div className={"likelist"}>

       <div  className={"LikeTrackButton"}>
       <Link href= {lnk} className={"button button-3d button-action button-pill"}> TrackPage</Link>
      </div>
      <div  className={"ShowListButton"}>
      <Link href= {profileLink} className={"button button-3d button-action button-pill"}> UploaderPAge</Link>
     </div>
     </div>


     <p>{"views:"}{this.state.views}</p>
     <p>{this.state.name}</p>

              <div className={"likelist"}>
                  <div className={"ShowListButton"}>
                      <PlayButton  userId={this.state.userId} trackId={this.state.id} trackLink={this.state.link} trackName={this.state.name} orderId={this.props.orderId}/>
                  </div>
                  <div  className={"LikeTrackButton"}>
                           <progress  id={id} value={"0"} max={"1"}  onClick={this.progressBar}></progress>
                           {this.props.isProfile?<DeleteTrackButton trackId={this.state.id} userId={this.state.userId}/>:null}
                  </div>

              </div>
            <div className={"bottomTrack"}>
                 <div  className={"LikeTrackButton"}>
                    <LikeTrackButton className={"LikeTrackButton"} userId={this.state.userId} trackId={this.state.id} />
                </div>
                 <div className={"ShowListButton"}>

                   <ShowListButton userId={this.state.userId} trackId={this.state.id} playLists={this.state.playLists}  sectionTracks={this.state.sectionTracks}/>
                </div>
            </div>
                </div>
              </section>
        );
      }
   });
module.exports=AudioTrackPlayer

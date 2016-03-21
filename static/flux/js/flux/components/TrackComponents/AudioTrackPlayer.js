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
var CommentActions=require('../../Actions/CommentActions')
var SoundActions=require('../../Actions/SoundActions')
var AddToPlayLists=require('../PlayListComponents/AddToPlayLists')
var AudioPlayer = require('react-responsive-audio-player');
var PlayListModal = require('../PlayListModal')
var Router = require('react-router-component')
var Locations = Router.Locations
var Location = Router.Location
var Link = Router.Link
var Track =require("./Track")
var LikeTrackButton= require("./LikeTrackButton")






var AudioTrackPlayer = React.createClass({

  propTypes: {
    name: React.PropTypes.string.isRequired,
    link: React.PropTypes.string.isRequired,
      id: React.PropTypes.number.isRequired,
      sectionTracks :React.PropTypes.string.isRequired,
      userId:React.PropTypes.string.isRequired,
      photoLink:React.PropTypes.string.isRequired,
  },

    getInitialState: function() {

    return {
        name: this.props.name,
        link: this.props.link,
        id: this.props.id,
        show:false,
        showPlayList:false,
        playLists: this.props.playLists,
        sectionTracks:this.props.sectionTracks,
        userId:this.props.userId,
        photoLink:this.props.photoLink,
        views:"0",
        isPlay:false


    }
    },


    handleClick: function (e) {

     SoundActions.match(this.props.name);

       this.getTodoState
     },


    showComment: function (e) {
         if(this.state.show==false) {
             CommentActions.ListComments(this.state.id, this.state.sectionTracks);
         }
         else {
             this.setState({show: false});
         }

     },

    showLists : function(e){
        PlayListActions.showPlayLists(this.state.id, this.state.sectionTracks);

    },

    onChange: function() {

    },
    componentDidMount: function() {
          TrackStore.addChangeListener(this._onChange);
          CommentStore.addListCommentsListener(this.listCom)
          PLayListStore.addShowPlayListsListener(this.listPLayLists)
          PLayListStore.addHidePlayListListener(this.hidePlayList);
          TrackStore.addGetVisListener(this.setViews);
          SoundActions.getVis(this.state.id);

    },

    componentWillUnmount: function() {
    },
    setViews:function()
    {
             if(this.state.id==TrackStore.getTrackId())
                 {
                   this.setState({views:TrackStore.getViews()})
                 }
    },

    listCom:function () {
        if(CommentStore.getId()==this.state.id&&CommentStore.getSection()==this.state.sectionTracks) {
                    this.setState({show: true,comments:CommentStore.getComments()});
        }
    },
    listPLayLists: function(){
        if(PLayListStore.getId()==this.state.id&&PLayListStore.getSection()==this.state.sectionTracks)
        {

            this.setState({showPlayList: true})
        }

    },
    hidePlayList: function(){
        if(PLayListStore.getId()==this.state.id&&PLayListStore.getSection()==this.state.sectionTracks)
        {

            this.setState({showPlayList: false})
        }

    },
    playClick:function()
    {
      if(this.state.isPlay==false){
      SoundActions.addVis(this.state.id)
      SoundActions.PlaySong(this.state.link,this.state.name)
       }
    },

    render: function() {
        var link="http://127.0.0.1:2000/"+this.state.link ;
        var name=this.state.name;
        var id=this.state.id;
        var userId=0
        var clss="matchButton btnMatch"
        var plr="playe";
        var photoLink="http://127.0.0.1:2000/"+this.state.photoLink
        var playlit =
          [{ url: link,
             displayText:name }]



var lnk="/track/ss?id="+this.state.id+"&photoLink="+this.state.photoLink+"&trackLink="+this.state.link+"&trackName="+name+"&userId="+this.state.userId;
        return (
              <section id="player">
              <img src={photoLink} height="42" width="42"/>
<p>{this.state.views}</p>
              <Link href= {lnk}> user page</Link>.
            <div onClick={this.playClick}>  <AudioPlayer playlist={ playlit } hideBackSkip={ true }  /> </div>
                  <input type="button"  className={ clss } onClick={this.showComment} value="ShowComment"  />
                  <input type="button"  className={ clss } onClick={this.showLists} value="addToLists"  />
                  <LikeTrackButton userId={this.state.userId} trackId={this.state.id} />
                  { this.state.show ? <CommentList comments={this.state.comments} trackId={this.state.id} userId={this.state.userId} /> : null }
                  { this.state.showPlayList ? < PlayListModal playLists={this.state.playLists} trackId={this.state.id} sectionTracks={this.state.sectionTracks} /> : null }
              </section>
        );
      }
   });




module.exports=AudioTrackPlayer

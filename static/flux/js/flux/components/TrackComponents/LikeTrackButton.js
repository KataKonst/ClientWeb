var React=require('react')
var LikesActions=require('../../Actions/LikesActions')
var LikeStore=require('../../stores/LikeStore')


var LikeTrackButton = React.createClass({

  propTypes: {
    userId: React.PropTypes.string.isRequired,
    trackId: React.PropTypes.string.isRequired,
  },

  getInitialState:function()
  {
    return { likesNr:"0",
             isLiked:true
               }

},
  componentDidMount: function() {
    LikeStore.addGetNrLikesListener(this.showLikesNr)
    LikesActions.getTrackNrLikes(this.props.trackId)
    LikeStore.addCheckUserLikeListener(this.checkLikes)
    LikesActions.checkUserLikedTrack(this.props.trackId,this.props.userId)
  },
  componentWillUnmount: function() {
    LikeStore.removeGetNrLikesListener(this.showLikesNr)
  },
  unlike:function()
  {
LikesActions.unLike(this.props.trackId,this.props.userId)
  },

  checkLikes:function()
  {
if(this.props.trackId==LikeStore.getTrackId()){
           this.setState({isLiked:LikeStore.getLiked()})
}
},
  likeTrackClick:function()
  {
    LikesActions.likeTrack(this.props.userId,this.props.trackId);
    LikesActions.getTrackNrLikes(this.props.trackId)

  },
  showLikesNr:function(){
    if(this.props.trackId==LikeStore.getTrackId())
    {
      this.setState({likesNr:LikeStore.getNrLikes()});
    }
  },
  render:function()
  {
     return(

           <div>

           {this.state.isLiked ?  <input type={"button"} value={"ssss"} onClick={this.unlike}/>:
           <button className={"button button-glow button-circle button-action button-jumbo"}><i className={"fa fa-thumbs-up"} onClick={this.likeTrackClick}></i></button>
          }

           <p>{this.state.likesNr}</p>
           </div>

     )

  }
});

module.exports=LikeTrackButton

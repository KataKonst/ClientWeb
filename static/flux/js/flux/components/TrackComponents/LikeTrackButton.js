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
    return { likesNr:"0" }

},
  componentDidMount: function() {
    LikeStore.addLikeListener(this.likeTrack)
    LikeStore.addGetNrLikesListener(this.showLikesNr)
    LikesActions.getTrackNrLikes(this.props.trackId)
  },
  componentWillUnmount: function() {
    LikeStore.removeLikeListener(this.likeTrack)
    LikeStore.removeGetNrLikesListener(this.showLikesNr)
  },
  likeTrack:function()
  {

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

           <button className={"button button-glow button-circle button-action button-jumbo"}><i className={"fa fa-thumbs-up"} onClick={this.likeTrackClick}></i></button>
           <p>{this.state.likesNr}</p>
           </div>

     )

  }
});

module.exports=LikeTrackButton

var React=require("react");
var CommentList=require('../CommentComponents/CommentList')
var CommentActions=require('../../Actions/CommentActions')
var CommentStore=require('../../stores/CommentStore')
var LikeStore=require('../../stores/LikeStore')
var LikeActions=require('../../Actions/LikesActions')
var UsersWhoLikedTrack=require("./UsersWhoLikedTrack")


var TrackBar = React.createClass({

  componentDidMount: function() {
        CommentStore.addListCommentsListener(this.listCom)
        LikeStore.addUsersWhoLikedTrackListener(this.listLikes)
  },
  showComment: function (e) {
           if(this.state.showComment==false) {
               CommentActions.ListComments(this.state.trackId, "com");
           }
           else {
               this.setState({showComment: false});
           }
     },
  listCom:function () {


                     this.setState({ showComment: true,comments:CommentStore.getComments()});

     },
     listLikes:function()
     {
          this.setState({userLikes:LikeStore.getUsersWichLikedTrack(),showLikes:true})
     },
getInitialState: function() {

  return {
      trackId:this.props.trackId,
      userId:this.props.userId,
      _query:this.props._query,
      showComment:false,
      showLikes:false

  }
  },
  showLikes:function()
  {
    LikeActions.getUsersWhoLikedTrack(this.props.trackId)
  },

 render:function()
  {
    return(
<div>

    <input type="button"  className={ "NavButton hvr-float" }  onClick={this.showComment} value="Show Comment"  />
    <input type="button"  className={ "NavButton hvr-float" }  onClick={this.showLikes}  value="Show Likes"  />
    <input type="button"  className={ "NavButton hvr-float" }  value="Show Recomended"  />

    { this.state.showLikes ? <UsersWhoLikedTrack userLikes={this.state.userLikes} /> : null }
    { this.state.showComment ? <CommentList comments={this.state.comments} trackId={this.props.trackId} userId={this.props.userId} /> : null }



</div>
)
},


});
module.exports=TrackBar

var React=require("react");
var CommentList=require('../CommentComponents/CommentList')
var CommentActions=require('../../Actions/CommentActions')
var CommentStore=require('../../stores/CommentStore')
var LikeStore=require('../../stores/LikeStore')
var LikeActions=require('../../Actions/LikesActions')
var UsersList=require("../UserComponents/UserList")
var searchCriteria="user"


var TrackBar = React.createClass({

  getInitialState: function() {

       return {
trackId:this.props.trackId,
userId:this.props.userId,
_query:this.props._query,
showComment:false,
showLikes:false

}
},

  componentDidMount: function() {
        CommentStore.addListCommentsListener(this.listCom)
        LikeStore.addUsersWhoLikedTrackListener(this.listLikes)
   },
   componentWillUnmount:function(){
     CommentStore.removeListCommentsListener(this.listCom)
     LikeStore.removeUsersWhoLikedTrackListener(this.listLikes)

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
             this.setState({ showLikes:false,showComment: true,comments:CommentStore.getComments()});

           },

        listLikes:function()
        {
          this.setState({userLikes:LikeStore.getUsersWichLikedTrack(),showLikes:true,showComment:false})
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

    { this.state.showLikes ? <UsersList key="s" users={this.state.userLikes} userId={this.state.userId} /> : null }
    { this.state.showComment ? <CommentList key={this.state.comments.length} comments={this.state.comments} trackId={this.props.trackId} userId={this.props.userId} /> : null }



</div>
)
},


});
module.exports=TrackBar

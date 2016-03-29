var React = require('react');
var CommentActions=require("../../Actions/CommentActions")

var Comment=React.createClass({

propTypes:{

  commentId:React.PropTypes.string.isRequired
},

  getInitialState: function() {

        return( {
          userName:this.props.userName,
          commentText:this.props.commentText,
          photoLink:this.props.photoLink,

        })
      },
      deleteComm:function()
      {
               CommentActions.deleteComment(this.props.commentId)
      },


  render: function() {
      var clss="matchButton btnMatch"
      var photoLink="http://127.0.0.1:2000/"+this.props.photoLink

      return (

  <div>
           <ul className={"comments"}>
           <li className={"comment"}>
     <a href="#" title={"View this user profile"} className={"photo"}>
     <img src={photoLink} alt={""}  height="42" width="42"/></a>
     <div className={"meta"}>{this.state.userName}{"| 2012.07.24 14:58"} <a className={"delete"} onClick={this.deleteComm}>Reply</a></div>
     <div className={"body"}>{this.state.commentText}</div>
     </li>
     </ul>
  </div>
);



  },




})

module.exports=Comment

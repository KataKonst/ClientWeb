var React = require('react');
var CommentActions=require("../../Actions/CommentActions")
var ActionTypes=require('../../Actions/ActionTypes')
var Router = require('react-router-component')

var Locations = Router.Locations
var Location = Router.Location
var Link = Router.Link
var Comment=React.createClass({

propTypes:{
   trackId:React.PropTypes.string.isRequired,
  commentId:React.PropTypes.string.isRequired,
  userId:React.PropTypes.string.isRequired
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
               CommentActions.deleteComm(this.props.commentId,this.props.trackId)

      },


  render: function() {
      var clss="matchButton btnMatch"
      var photoLink=ActionTypes.ip+this.props.photoLink
      var profileLink="/profile?userId="+this.props.userId+"&logged=false"


      return (

  <div>
           <ul className={"comments"}>
           <li className={"comment"}>

           <Link href= {profileLink} className={"photo"}> <img src={photoLink} alt={""}  height="42" width="42"/></Link>


     <div className={"meta"}>{this.state.userName}{"| 2012.07.24 14:58"} <a className={"delete"} onClick={this.deleteComm}>Delete</a></div>
     <div className={"body"}>{this.state.commentText}</div>
     </li>
     </ul>
  </div>
);



  },




})

module.exports=Comment

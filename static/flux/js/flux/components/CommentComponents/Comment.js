var React = require('react');


var Comment=React.createClass({

  getInitialState: function() {

        return( {
          userName:this.props.userName,
          commentText:this.props.commentText
        })
      },


  render: function() {
      var clss="matchButton btnMatch"
         return (

<div>
           <ul className={"comments"}>
<li className={"comment"}>
<div className={"meta"}>{this.state.userName}{"| 2012.07.24 14:58"} <a className={"reply"}>Reply</a></div>
<div className={"body"}>{this.state.commentText}</div>
</li>
</ul>
</div>
);



  },




})

module.exports=Comment

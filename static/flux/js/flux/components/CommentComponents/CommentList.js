/**
 * Created by katakonst on 3/13/16.
 */
/**
 * Created by katakonst on 3/13/16.
 */
var React = require('react');
var CommentBox = require('./CommentBox');
var CommentStore = require('../../stores/CommentStore');
var Comment = require('./Comment');


function  getComments()
{
       return {
    comments: CommentStore.getComments()
     };
}

  var CommentList = React.createClass({



    getInitialState: function() {

        return {
        trackId: this.props.trackId,
        userId:this.props.userId,
        comments : this.props.comments
    }},
     componentDidMount: function() {
    },
      componentWillUnmount: function() {
    },
     handleChange:function(){
            this.setState({text: event.target.value});
    },
     render: function() {
       alert(this.state.comments.length)
        var clss="matchButton btnMatch"
        var coments=[]
        var coms=this.state.comments;

         for(var i in coms){
           console.log(coms[i]["Text"])
          coments.push(<Comment userName={commentId={coms[i]["id"]} coms[i]["authorName"]} commentText={coms[i]["Text"]} photoLink={coms[i]["photoLink"]}/>)



         }
         alert("s"+this.state.trackId)

         return (
      <section id="commentList">
         {coments}
          <CommentBox  trackId={this.state.trackId} userId={this.state.userId} />
      </section>);
    },

});
module.exports = CommentList;
window.CommentList = CommentList;

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
        var clss="matchButton btnMatch"
        var coments=[]
        var coms=this.state.comments;
        var trackId=this.state.trackId;

         for(var i in coms){
           console.log(coms[i]["Text"])
          coments.push(<Comment
            trackId={trackId}
            userName={coms[i]["authorName"]}
              commentId={coms[i]["id"]}
              userId={coms[i]["author_id"]}
             commentText={coms[i]["Text"]}
             photoLink={coms[i]["photoLink"]}/>)



         }

         return (
      <section id="commentList">
         {coments}
          <CommentBox  u trackId={this.state.trackId} userId={this.state.userId} />
      </section>);
    },

});
module.exports = CommentList;
window.CommentList = CommentList;

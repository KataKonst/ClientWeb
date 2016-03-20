/**
 * Created by katakonst on 3/13/16.
 */
/**
 * Created by katakonst on 3/13/16.
 */

var CommentBox = require('./CommentBox');
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
        user:this.props.user,
        comments : this.props.comments,
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

         for(var i in coms){
                 coments.push(coms[i]["Text"]+"<br>")


         }
         alert("s"+this.state.trackId)

         return (
      <section id="commentList">
         <p> {coments} </p>
          <CommentBox  trackId={this.state.trackId} user={this.state.user} />
      </section>);
    },

});

window.CommentList = CommentList;

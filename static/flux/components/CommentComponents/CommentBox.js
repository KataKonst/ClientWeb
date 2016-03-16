/**
 * Created by katakonst on 3/13/16.
 */



 var CommentBox = React.createClass({



     getInitialState: function() {

           return {
             trackId: this.props.trackId,
             user:this.props.user,
             text:"Add a comment"
           }
     },

    handleClick: function(e) {
         CommentActions.AddComment(this.state.text,this.state.user,this.state.trackId)
     },

    componentDidMount: function() {
          CommentStore.addAddCommentListener(this._onChange)
     },

    componentWillUnmount: function() {
           CommentStore.removeAddCommentListener(this._onChange);
     },
    _onChange: function() {

    },
    handleChange:function(event){
            this.setState({text: event.target.value});
    },

    render: function() {
        var clss="matchButton btnMatch"
           return (
                   <section id="commentAdd">
                   <textarea rows="4" cols="50" value={this.state.text} onChange={this.handleChange}/>
                       <input type="button"  className={ clss } onClick={this.handleClick} value="AddComment"/>
                   </section>);
    },

});

window.CommentBox = CommentBox;

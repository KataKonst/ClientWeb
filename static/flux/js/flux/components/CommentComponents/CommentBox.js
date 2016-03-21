/**
 * Created by katakonst on 3/13/16.
 */

var React = require('react');
var CommentStore = require('../../stores/CommentStore');
var CommentActions=require('../../Actions/CommentActions')

 var CommentBox = React.createClass({



     getInitialState: function() {

           return {
             trackId: this.props.trackId,
             userId:this.props.userId,
             text:"Add a comment"
           }
     },

    handleClick: function(e) {
         CommentActions.AddComment(this.state.text,this.state.userId,this.state.trackId)
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

module.exports = CommentBox;

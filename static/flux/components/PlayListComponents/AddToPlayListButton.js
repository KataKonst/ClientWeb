/**
 * Created by katakonst on 3/16/16.
 */
/**
 * Created by katakonst on 3/13/16.
 */

var React = require('react');

 var AddToPlayListButton = React.createClass({



                propTypes: {
                         trackId: React.PropTypes.array.isRequired,
                         sectionTracks : React.PropTypes.string.isRequired,
                         playId:React.PropTypes.array.isRequired
            },


    handleClick: function(e) {
         PlayListActions.AddToPlayList(this.props.trackId,this.props.sectionTracks,this.props.playId)
     },

    componentDidMount: function() {
     },

    componentWillUnmount: function() {
     },
    _onChange: function() {

    },
    handleChange:function(event){
    },

    render: function() {
        var clss="matchButton btnMatch"
           return (
                   <section id="addToPlayList">
                       <input type="button"  className={ clss } onClick={this.handleClick} value="add"/>
                   </section>);
    },

});

window.AddToPlayListButton = AddToPlayListButton;

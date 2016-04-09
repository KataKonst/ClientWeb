/**
 * Created by katakonst on 3/16/16.
 */
/**
 * Created by katakonst on 3/13/16.
 */

var React = require('react');
var PlayListActions=require('../../Actions/PlayListActions')
var TracksPlayListStore=require('../../stores/TracksPlayListStore')

 var AddToPlayListButton = React.createClass({



                propTypes: {
                         trackId: React.PropTypes.string.isRequired,
                         sectionTracks : React.PropTypes.string.isRequired,
                         playId:React.PropTypes.array.isRequired
            },
            getInitialState:function()
            {

              return({
                isTrackInList:false
              })
            },


    handleClick: function(e) {
         PlayListActions.AddToPlayList(this.props.trackId,this.props.sectionTracks,this.props.playId)
     },

    componentDidMount: function() {
      TracksPlayListStore.addCheckTrackInPlayListListener(this.checkTrackInList)

      PlayListActions.checkTrackInPlayList(this.props.playId,this.props.trackId)

     },
     checkTrackInList:function()
     {

          if(TracksPlayListStore.getPlayId()==this.props.playId)
          {


            this.setState({isTrackInList:TracksPlayListStore.isLiked()})
          }
     },

    componentWillUnmount: function() {
     },
    _onChange: function() {

    },
    handleChange:function(event){
    },
    deleteTrack:function(e)
    {
    PlayListActions.deleteTrackFromPlayList(this.props.playId,this.props.trackId)
  },

    render: function() {
        var clss="matchButton btnMatch"
           return (
                   <section id="addToPlayList">

                {this.state.isTrackInList ? <input type={"button"} value={"delete"} onClick={this.deleteTrack}/>:
                   <button className={"button button-circle button-tiny"} onClick={this.handleClick}><i className={"fa fa-plus"}></i></button>}
                   </section>);
    },

});
module.exports=AddToPlayListButton;

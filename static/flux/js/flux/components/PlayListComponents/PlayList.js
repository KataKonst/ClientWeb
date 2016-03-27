
var React = require('react');
var PlayListActions=require('../../Actions/PlayListActions')

var PlayListStore=require('../../stores/PlayListStore')
var TrackList=require('../TrackComponents/TrackList')



  var PlayList = React.createClass({
    getInitialState: function() {

          return {
                  tracks: this.props.tracks,
                  playId:this.props.playId,
                  playName:this.props.playName,
                  showTracks:false,
                  section:this.props.section,
                  playLists:this.props.PlayLists
                };
    },

    componentDidMount: function() {
        PlayListStore.addListTracksListener(this.listTracks)
    },

    componentWillUnmount: function() {
    },
    showTracks: function() {
        PlayListActions.ListPlayListTracks(this.state.tracks,this.state.section,this.state.playId)
    },

      render: function() {
        var trks = this.state.tracks;
          var sect="list";
          var clss="matchButton btnMatch"

          return (
                    <section id="playList">
                        <p>{this.state.playName}</p>
                        <input type="button"  className={ clss } onClick={this.showTracks} value={this.state.playName}/>
                        { this.state.showTracks ? <TrackList tracks={trks} sectionTracks={ sect } playLists={this.state.playLists} /> : null }
                    </section>
                );
    },
      listTracks: function() {

          this.setState({showTracks:true,tracks:PlayListStore.getTracks()});

      },
});

module.exports=PlayList

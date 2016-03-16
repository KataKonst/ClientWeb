 function  getComments()
 {
       return {
                 tracks: PlayListStore.getTracks()
              };
  }
  var PlayList = React.createClass({
    getInitialState: function() {

          return {
                  tracks: this.props.tracks,
                  playId:this.props.playId,
                  playName:this.props.playName,
                  showTracks:false,
                  section:this.props.section
                };
    },

    componentDidMount: function() {
        PlayListStore.addListTracksListener(this.listTracks)
    },

    componentWillUnmount: function() {
        PlayListStore.removeListTracksListener(this._onChange)
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
                        { this.state.show ? <TrackList tracks={trks} sectionTracks={ sect } /> : null }
                    </section>
                );
    },
      listTracks: function() {

          this.setState({show:true,tracks:PlayListStore.getTracks()});

      },
});

window.PlayList = PlayList;

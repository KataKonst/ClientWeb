/**
 * Created by katakonst on 3/13/16.
 */
var AudioPlayer = React.createClass({

  propTypes: {
    name: React.PropTypes.string.isRequired,
    link: React.PropTypes.string.isRequired,
      id: React.PropTypes.number.isRequired,
      sectionTracks :React.PropTypes.string.isRequired
  },

    getInitialState: function() {

    return {
        name: this.props.name,
        link: this.props.link,
        id: this.props.id,
        show:false,
        showPlayList:false,
        playLists: this.props.playLists,
        sectionTracks:this.props.sectionTracks
    }
    },


    handleClick: function (e) {

     SoundActions.match(this.props.name);

       this.getTodoState
     },


    showComment: function (e) {
         if(this.state.show==false) {
             CommentActions.ListComments(this.state.id, this.state.sectionTracks);
         }
         else {
             this.setState({show: false});
         }

     },

    showLists : function(e){
        PlayListActions.showPlayLists(this.state.id, this.state.sectionTracks);

    },

    onChange: function() {

    },
    componentDidMount: function() {
          TrackStore.addChangeListener(this._onChange);
          CommentStore.addListCommentsListener(this.listCom)
          PLayListStore.addShowPlayListsListener(this.listPLayLists)
    },

    componentWillUnmount: function() {
             TrackStore.removeChangeListener(this._onChange);
             PLayListStore.removeShowPlayListsListener(this.listPLayLists)
    },

    listCom:function () {
        if(CommentStore.getId()==this.state.id&&CommentStore.getSection()==this.state.sectionTracks) {
                    this.setState({show: true,comments:CommentStore.getComments()});
        }
    },
    listPLayLists: function(){
        if(PLayListStore.getId()==this.state.id&&PLayListStore.getSection()==this.state.sectionTracks)
        {
                    alert("ss")

            this.setState({showPlayList: true})
        }

    },
    render: function() {
        var link="http://127.0.0.1:2000/"+this.state.link ;
        var name=this.state.name;
        var id=this.state.id;
        var userId=0
        var clss="matchButton btnMatch"
        var plr="playe";
        return (
              <section id="player">
              <paper-audio-player   className={ plr } playStatus="false" id={ id } src={ link } title= {name} color="#F05C38"></paper-audio-player>
                  <input type="button"  className={ clss } onClick={this.showComment} value="ShowComment"  />
                  <input type="button"  className={ clss } onClick={this.showLists} value="addToLists"  />
                  { this.state.show ? <CommentList comments={this.state.comments} trackId={this.state.id} user={0} /> : null }
                  { this.state.showPlayList ? < AddToPlayLists playLists={this.state.playLists} trackId={this.state.id} /> : null }
              </section>
        );
      }
   });

window.AudioPlayer = AudioPlayer;

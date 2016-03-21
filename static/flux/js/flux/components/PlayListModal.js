var React = require('react');
var ReactDOM = require('react-dom');
var Modal = require('react-modal');
var PlayListActions=require('../Actions/PlayListActions')

var appElement = document.getElementById('modal');



const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};


var PlayListModal = React.createClass({


  propTypes: {
      playLists: React.PropTypes.array.isRequired,
      trackId: React.PropTypes.string.isRequired,
  },

  getInitialState: function() {
    return { modalIsOpen: true,
            playLists:this.props.playLists,
          trackId:this.props.trackId,
          sectionTracks:this.props.sectionTracks }
  },

  openModal: function() {
    this.setState({modalIsOpen: true});
  },

  closeModal: function() {
    this.setState({modalIsOpen: false});
      PlayListActions.hidePlayLists(this.state.trackId, this.state.sectionTracks);
  },

  render: function() {
    return (
      <div>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={customStyles} >
          <button onClick={this.closeModal}>close</button>

         < AddToPlayLists playLists={this.state.playLists} trackId={this.state.trackId} />
        </Modal>
      </div>
    );
  }
});

module.exports=PlayListModal

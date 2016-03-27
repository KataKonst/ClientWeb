var React=require('react')
var PlayListActions=require('../../Actions/PlayListActions')
var TrackStore=require('../../stores/TrackStore')
var SoundActions=require('../../Actions/SoundActions')



var PlayButton=React.createClass({
  propTypes:{
    userId:React.PropTypes.string.isRequired,
    trackId:React.PropTypes.string.isRequired,
    trackLink:React.PropTypes.string.isRequired,
    trackName:React.PropTypes.string.isRequired,
    orderId:React.PropTypes.string.isRequired


  },
  getInitialState:function()
  {
          return({
            playBut:"Play",
            isPlay:false
            })
  },
  componentDidMount:function()
  {
    TrackStore.addPLayListener(this.playLis)


  },
  componentWillUnmount:function(){
    TrackStore.removePLayListener(this.playLis)



  },



  playClick:function()
   {
     if(this.state.isPlay==false){

     SoundActions.addVis(this.props.trackId)
     var id="t"+this.props.trackId
     SoundActions.PlaySong(this.props.link,this.props.name,id,this.props.orderId)
     var fix=document.getElementById("FixedPlayer")
      fix.addEventListener('timeupdate',this.playListener )
      this.setState({playBut:"Pause",isPlay:true})
     }
     else if(this.state.playBut=="Pause") {
       var fix=document.getElementById("FixedPlayer")
       fix.pause()
       this.setState({playBut:"Play"})



     }
     else if(this.state.playBut=="Play") {
       var fix=document.getElementById("FixedPlayer")
       fix.play()
       this.setState({playBut:"Pause"})
     }
   },
   playListener:function(e)
   {
     var id="t"+this.state.id

     var fix=document.getElementById("FixedPlayer")
     document.getElementById(id).setAttribute("value", fix.currentTime / fix.duration);

   },

   playLis:function()
   {
     if(TrackStore.getTrackId().substring(1)!=this.props.trackId)
     {
       this.setState({playBut:"Play",isPlay:false})
       var fix=document.getElementById("FixedPlayer")
       fix.removeEventListener('timeupdate',this.playListener )
     }
     else {
        var fix=document.getElementById("FixedPlayer")
        fix.addEventListener('timeupdate',this.playListener )
        this.setState({playBut:"Pause",isPlay:true})

     }



   },
   render :function()
   {

     return(
       <div>
            <input type="button"  className={ "button button-glow button-border button-rounded button-primary" } onClick={this.playClick} value={this.state.playBut}  />
       </div>
     )
   }






});

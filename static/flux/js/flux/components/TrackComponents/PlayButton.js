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
            playBut:true,
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
     SoundActions.PlaySong(this.props.trackLink,this.props.trackName,id,this.props.orderId)
     var fix=document.getElementById("FixedPlayer")
      fix.addEventListener('timeupdate',this.playListener )
      this.setState({playBut:false,isPlay:true})
     }
     else if(this.state.playBut==false) {
       var fix=document.getElementById("FixedPlayer")
       fix.pause()
       this.setState({playBut:true})



     }
     else if(this.state.playBut==true) {
       var fix=document.getElementById("FixedPlayer")
       fix.play()
       this.setState({playBut:false})
     }
   },
   playListener:function(e)
   {
     var id="t"+this.props.trackId

     var fix=document.getElementById("FixedPlayer")
     document.getElementById(id).setAttribute("value", fix.currentTime / fix.duration);

   },

   playLis:function()
   {
     if(TrackStore.getTrackId().substring(1)!=this.props.trackId)
     {
       this.setState({playBut:true,isPlay:false})
       var fix=document.getElementById("FixedPlayer")
       fix.removeEventListener('timeupdate',this.playListener )
     }
     else {
        var fix=document.getElementById("FixedPlayer")
        fix.addEventListener('timeupdate',this.playListener )
        this.setState({playBut:false,isPlay:true})

     }



   },
   render :function()
   {
        var src=this.state.playBut? "/static/buttons/play.png":"/static/buttons/pause.png"
     return(
       <div>
       <img src={src} height="50" width="50" onClick={this.playClick} />

       </div>
     )
   }






});

module.exports=PlayButton

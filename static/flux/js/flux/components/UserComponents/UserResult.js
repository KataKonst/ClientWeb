
var React=require('react')


var UserResult=React.createClass({

 propTypes:{
   userName: React.PropTypes.array.isRequired,
   userId: React.PropTypes.string.isRequired,
   userImg:React.PropTypes.string.isRequired


 },

render:function(){
  var urlImg="http://127.0.0.1:2000/"+this.props.userImg
  return(

   <div> <img src={urlImg}/>
{this.props.userName}</div>






 )
 }

})

module.exports=UserResult

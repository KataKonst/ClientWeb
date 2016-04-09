var React=require('react')
var ActionTypes=require('../../Actions/ActionTypes')
var ProfileRightBar=require('./ProfileRightBar')

var ProfPhoto=React.createClass({
   propTypes:{
     userId:React.PropTypes.string.isRequired,
     user:React.PropTypes.string.isRequired
   },
   render:function()
   {
     return(
      <div id="uploadPhoto">
         <img src={ActionTypes.ip+this.props.user[0]["photoLink"]} width={"142"} height={"142"}/>
           <form action={ActionTypes.serverip+"addPhotoToUser"} method={"post"} encType={"multipart/form-data"}>
             <input type={"text"} name={"userId"} value={this.props.userId}/>
             <input type={"file"} name={"file[]"} id={"file"} className={"file"}/>
           <input type={"submit"} value={"Upload Photo"} name={"submit"} id={"file_upload"} className={"btn butonupload"}/></form>

     </div>
   )

   }


})

module.exports=ProfPhoto

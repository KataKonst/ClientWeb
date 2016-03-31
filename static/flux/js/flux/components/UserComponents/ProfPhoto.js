var React=require('react')

var ProfPhoto=React.createClass({
   propTypes:{
     userId:React.PropTypes.string.isRequired,
     user:React.PropTypes.string.isRequired
   },
   render:function()
   {
     return(
      <div id="uploadPhoto">
      <img src={"http://127.0.0.1:2000/"+this.props.user[0]["photoLink"]}/>
         <form action={"http://127.0.0.1:8080/addPhotoToUser "} method={"post"} encType={"multipart/form-data"}>
            <input type={"text"} name={"userId"} value={this.props.userId}/>
            <input type={"file"} name={"file[]"} id={"file"} className={"file"}/>
           <input type={"submit"} value={"Upload Photo"} name={"submit"} id={"file_upload"} className={"btn butonupload"}/></form>

     </div>
   )

   }


})

module.exports=ProfPhoto

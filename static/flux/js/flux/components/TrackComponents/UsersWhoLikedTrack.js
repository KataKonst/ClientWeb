var React=require("react");


var UsersWhoLikedTrack=React.createClass({
   propTypes: {
       userLikes:React.PropTypes.array.isRequired
     },
    render:function()
     {
        var userLikes=[];
        this.props.userLikes.forEach(function(eleme){
        userLikes.push(<p>{eleme["nume"]}</p>)
    });
      return(
              <div>
                 {userLikes}
              </div>
            );
       }
 })

 module.exports=UsersWhoLikedTrack

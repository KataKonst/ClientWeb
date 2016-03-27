
var React=require('react')
var UserResult=require('./UserResult')


var UserList=React.createClass({

 propTypes:{
   users: React.PropTypes.array.isRequired,
   userId: React.PropTypes.string.isRequired


 },
 componentDidMount() {


     },


render:function()
{
   var usersToDisplay=[]
   this.props.users.forEach(function(element){
         usersToDisplay.push(<div><UserResult userName={element["nume"]} userId={element["id"]} userImg={element["photoLink"]}/></div>)
    })

    return(
<div>
{usersToDisplay}
</div>

    )

}
})
module.exports=UserList

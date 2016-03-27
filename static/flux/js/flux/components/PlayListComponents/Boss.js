var React=require('react')
var PlayListActions=require('../../Actions/PlayListActions')
var PlayListStore=require('../../stores/PlayListStore')
var PlayListButton=require('./PlayListButton')

var Boss=React.createClass({

  propTypes:{

    playLists:React.PropTypes.array.isRequired,
    userId:React.PropTypes.string.isRequired

  },
clickPlayButton:function(e)
{
},
render:function(){

  var htmlPlay=[];
  var userId=this.props.userId

  this.props.playLists.forEach(function(e){
    htmlPlay.push(<li><PlayListButton userId={userId} playId={e["id"]} playName={e["nume"]}/></li>)
  })

  return (<div><ul>{htmlPlay}</ul></div>)
}

})

module.exports=Boss

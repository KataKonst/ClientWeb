var React = require('react');



var AudioPlayerBB=React.createClass({

propTypes:{

  trackUrl:React.PropTypes.string.isRequired
},

render:function()
{

  return(
<div>
    <audio controls>

         <source src={this.props.trackUrl}/>

       </audio>
    </div>

  )


}

})

module.exports=AudioPlayerBB;

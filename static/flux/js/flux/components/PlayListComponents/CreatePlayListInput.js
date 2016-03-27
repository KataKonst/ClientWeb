var React=require('react');
var PlayListActions=require('../../Actions/PlayListActions')



var CreatePlayListInput=React.createClass({
   propTypes:{
     userId: React.PropTypes.string.isRequired
   },
   getInitialState:function()
   {
     return({
       text:"ss"
     })
   },

  createList:function()
   {

     PlayListActions.CreatePlayList(0,"S",this.state.text,this.props.userId)
   },
   handleChange:function(event){
           this.setState({text: event.target.value});
   },

   render:function()
  {

    return(
       <div id={"createPlayInput"}>
       <input type="text" value={this.state.text}  onChange={this.handleChange}/>
       <input type="button"  className={"button button-glow button-rounded button-caution"} onClick={this.createList} value="createList"  />
       </div>
       )
    }
});

module.exports=CreatePlayListInput

var React =require('react')
var SoundActions=require('../../Actions/SoundActions')
var AllHashTags=require('./AllHashTags')



var RightMenu=React.createClass({

  componentDidMount:function()
  {

  },
  componentWillUnmount:function()
  {

  },
  setSearchClick:function()
  {
       SoundActions.setSearchCriteria("tracks")
  },
  setSearchUsers:function()
  {
    SoundActions.setSearchCriteria("users")

  },

  render:function()
  {
       return(
              <div className="rightNav">
                <a href="#" className={"button button-rounded button-royal"} onClick={this.setSearchClick}>{"Search Tracks"}</a><br></br>
                <a href="#" className={"button button-rounded button-royal searchUser userSearchBut"} onClick={this.setSearchUsers}>{"Search User"} </a>
                <AllHashTags />
              </div>


       )
  }


})

module.exports=RightMenu

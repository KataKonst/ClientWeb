var React = require('react');
var Router = require('react-router-component')
var Locations = Router.Locations
var Location = Router.Location
var Link = Router.Link
var SoundActions=require('../../Actions/SoundActions')



var TopBar=React.createClass({

    propTypes: {
         userId:React.PropTypes.string,
         photoLink:React.PropTypes.string
     },
    componentDidMount: function() {

    },
    showProfile:function()
    {

    },
    search:function()
    {
      var search=document.getElementById("search")
         SoundActions.searchTracks(search.value)
         
    },
    render:function()
    {

      return(


    <div id={'cssmenu'}>
            <ul>
                 <li className={'active'}><a href='.'><span>Home</span></a></li>
                 <li><a href={'/save'}><span>Upload</span></a></li>
                <li><a href={'/login'}><span>Login</span></a></li>
            <li>
              <div className={"box"}>
              <div className={"container-1"}>
              <input type={"search"} id={"search"} placeholder={"Search..."} />
              <span className={"icon"}><i className={"fa fa-search "} id={"searchBut"} onClick={this.search} ></i></span>
            <li>  <img src={"http://www.urban.ro/data/Image1/skrillex.jpg"} alt={""}  height="22" width="42" onClick={this.showProfile}/></li>
            <li>  <Link href= {"/profile/0"}> Profile</Link></li>

              </div>
              </div>
           </li>
        </ul>
  </div>

      )
    }


});

module.exports=TopBar

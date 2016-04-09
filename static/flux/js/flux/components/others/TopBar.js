var React = require('react');
var Router = require('react-router-component')
var Locations = Router.Locations
var Location = Router.Location
var Link = Router.Link
var SoundActions=require('../../Actions/SoundActions')
var searchCriteria;
var SearchStore=require('../../stores/SearchStore')



var TopBar=React.createClass({

    propTypes: {
         userId:React.PropTypes.string,
         photoLink:React.PropTypes.string
     },
    componentDidMount: function() {
      SearchStore.addSearchCriteriaListener(this.setSearchCriteria)

    },
    setSearchCriteria:function()
    {

      searchCriteria=SearchStore.getSearchCriteria();
    },
    showProfile:function()
    {

    },
    search:function()
    {
      var search=document.getElementById("search")

      if(searchCriteria=="users")
      {

        SoundActions.searchUser(search.value)

      }
      else{
         SoundActions.searchTracks(search.value)
       }

    },
    render:function()
    {
      var playListId="/playLists?userId="+this.props.userId
      var profileLink="/profile?userId="+this.props.userId+"&logged=true"
      var wallLink="/wall?userId="+this.props.userId
      var uploadLink="/Upload?userId="+this.props.userId
      return(


    <div id={'cssmenu'}>
            <ul>
                 <li className={'active'}>
                 <li>  <Link href= {"/"}> Home</Link></li>
</li>
                 <li> <Link href= {uploadLink}> Upload</Link></li>
                 <li><a href={'/login'}><span>Login</span></a></li>
                 <li>
                    <div className={"box"}>
                    <div className={"container-1"}>
                    <input type={"search"} id={"search"} placeholder={"Search..."} />
                      <span className={"icon"}><i className={"fa fa-search "} id={"searchBut"} onClick={this.search} ></i></span>
              <li>  <Link href= {profileLink}> Profile</Link></li>
              <li>  <Link href= {playListId}> PlayLists</Link></li>
               <li>  <Link href= {wallLink}> Wall</Link></li>
              </div>
              </div>
           </li>
        </ul>
  </div>

      )
    }


});

module.exports=TopBar

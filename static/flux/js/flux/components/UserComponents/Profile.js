var React=require('react')
var ProfPhoto=require('./ProfPhoto')
var UserStore=require('../../stores/UserStore')
var UserActions=require('../../Actions/UserActions')
var SoundActions=require('../../Actions/SoundActions')
var TrackStore=require('../../stores/TrackStore')
var TrackList=require('../TrackComponents/TrackList')
var ProfileRightBar=require('./ProfileRightBar')
var UserList=require('../UserComponents/UserList')





      var Profile = React.createClass({
            propTypes: {
                        _query: React.PropTypes.object

                      },
           getInitialState:function()
           {
             return({
               userId:this.props._query["userId"],
               user:[],
               show:false,
               tracks:[],
               showTracks:false,
               showLikedTracks:false,
               isLoggedUser:this.props._query["logged"],
               showUsers:false,
               users:[]

             })
           },
             componentDidMount:function() {
                 UserStore.addGetUserDetailsListener(this.setUser)
                 UserStore.addGetUserLikedTracksEventListener(this.showLikedTracks)
                 TrackStore.addTracksSearchedByUserListener(this.loadTracks)
                 SoundActions.getTracksUploadedByUser(this.state.userId)
                 UserStore.addSearchUserListener(this.showUsers)


                },
                componentWillUnmount:function(){
                  UserStore.removeGetUserLikedTracksEventListener(this.showLikedTracks)
                  UserStore.removeGetUserDetailsListener(this.setUser)
                  TrackStore.removeTracksSearchedByUserListener(this.loadTracks)
                  UserStore.removeSearchUserListener(this.showUsers)


                },
                showLikedTracks:function()
                {
                  this.setState({showUsers:false,showTracks:true,show:false,tracks:UserStore.getTracks()})
                },
                loadTracks:function()
                {

                       this.setState({showUsers:false,showTracks:true,show:false,tracks:TrackStore.getSearchResults()})
                },
                setUser:function()
                {
                   this.setState({user:UserStore.getUser(),show:true,showTracks:false,showUsers:false})
                },
                showUsers:function()
                {
                  this.setState({show:false,showTracks:false,showUsers:true,users:UserStore.getUserSearchResults()})
                },
            render: function() {

                 return (
                          <section id="profile">

                          <ProfileRightBar isLoggedUser={this.state.isLoggedUser} userId={this.state.userId}/>

                        {this.state.show?  <ProfPhoto key={this.state.show} userId={this.state.userId} user={this.state.user}/>:null}
                        { this.state.showTracks ? <TrackList  key={"user"}  tracks={this.state.tracks} sectionTracks={ "list" } isProfile={true} userId={this.state.userId}/> :null}
                        { this.state.showUsers ? <UserList key={UserStore.getSearchText()} users={this.state.users}  userId={"1"}/> :null}

                          </section>
                     );
              }
            });

module.exports=Profile;

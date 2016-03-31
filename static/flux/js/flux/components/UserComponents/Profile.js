var React=require('react')
var ProfPhoto=require('./ProfPhoto')
var UserStore=require('../../stores/UserStore')
var UserActions=require('../../Actions/UserActions')




      var Profile = React.createClass({
            propTypes: {
                        userId: React.PropTypes.string.isRequired
                      },
           getInitialState:function()
           {
             return({
               user:[],
               show:false

             })
           },
             componentDidMount:function() {
                 UserStore.addGetUserDetailsListener(this.setUser)
                 UserActions.getUserDetails(this.props.userId)

                },
                componentWillUnmount:function(){
                  UserStore.removeGetUserDetailsListener(this.setUser)

                },
                setUser:function()
                {
                   this.setState({user:UserStore.getUser(),show:true})
                },
            render: function() {

                 return (
                          <section id="profile">
                        {this.state.show?  <ProfPhoto userId={this.props.userId} user={this.state.user}/>:null}
                          </section>
                     );
              }
            });

module.exports=Profile;

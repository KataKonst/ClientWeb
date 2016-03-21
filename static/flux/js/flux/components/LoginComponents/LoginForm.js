var React = require('react');
var ReactDOM = require('react-dom');
var Modal = require('react-modal');
var RegisterForm=require('./RegisterForm')

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};


var LoginForm = React.createClass({

  getInitialState: function() {
    return { modalIsOpen: false };
  },

  openModal: function() {
    this.setState({modalIsOpen: true});
  },

  closeModal: function() {
    this.setState({modalIsOpen: false});
  },




    render: function() {

      // render Form as <div /> and transfer all props to it


      // return <form /> component with rendered form and a submit button
      return (
<div>
<Modal
         isOpen={this.state.modalIsOpen}
         onRequestClose={this.closeModal}
         style={customStyles} >
         <RegisterForm/>

       </Modal>
        <form className={"form"} method={"post"} action={""}>

        <p className={"field"}>
          <input type={"text"} name={"login"} placeholder={"Username or email"} />
          <i className={"fa fa-user"}></i>
        </p>
        <p className={"field"}>
          <input type={"password"} name={"password"} placeholder={"Password"} required/>
          <i className={"fa fa-lock"}></i>
        </p>

        <p className={"submit"}><input type={"submit"} name={"commit"} value={"Login"}/></p>
        <p className={"submit"}><input type={"button"} name={"commit"} value={"Register"} onClick={this.openModal}/></p>
        <p className={"remember"}>
          <input type={"checkbox"} id={"remember"} name={"remember"} />
          <label for={"remember"}><span></span>Remember Me</label>
        </p>

        <p className={"forgot"}>
          <a href={"#"}>Forgot Password?</a>
        </p>



      </form>


             </div>


      )
    },

    onSubmit: function(e) {
      e.preventDefault()

      // check if form is valid
      var validation = this.refs.form.value().validation
      if (ReactForms.validation.isFailure(validation)) {
        console.log('invalid form')
        return
      }

    }
});
module.exports=LoginForm

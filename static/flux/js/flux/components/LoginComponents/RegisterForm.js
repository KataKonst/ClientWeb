var React = require('react');


var LoginForm = React.createClass({

    render: function() {

      return (
        <form className={"form"} method={"get"} action={"/register"}>

        <p className={"field"}>
          <input type={"text"} name={"name"} placeholder={"Username or email"} />
          <i className={"fa fa-user"}></i>
        </p>

        <p className={"field"}>
          <input type={"password"} name={"password"} placeholder={"Password"} required/>
          <i className={"fa fa-lock"}></i>
        </p>

        <p className={"submit"}><input type={"submit"} name={"commit"} value={"Register"}/></p>

          </form>
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

      alert('form submitted!')
    }
});
module.exports=LoginForm

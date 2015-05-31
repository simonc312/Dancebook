var LoginBar = React.createClass({
		getInitialState: function() {
			return {active_user: false};
		},

		componentDidMount: function () {

			 window.fbAsyncInit = function() {
        FB.init({
          appId      : '817044031744170',
           cookie     : true,  // enable cookies to allow the server to access 
                        // the session
          xfbml      : true, //parse social plugins
          version    : 'v2.3'
        });

        FB.getLoginStatus(function(response) {
	      	this.statusChangeCallback(response);
	    	}.bind(this));
      }.bind(this);

      (function(d, s, id){
         var js, fjs = d.getElementsByTagName(s)[0];
         if (d.getElementById(id)) {return;}
         js = d.createElement(s); js.id = id;
         js.src = "//connect.facebook.net/en_US/sdk.js";
         fjs.parentNode.insertBefore(js, fjs);
       }(document, 'script', 'facebook-jssdk'));

		},

		updateButton : function(){
			FB.api('/me', function(response) {
					console.log(JSON.stringify(response));
					document.getElementById('logged-in-msg').innerHTML = 'Sup, ' + response.first_name + ' ';
					document.getElementById('profile-pic').setAttribute("src", "http://graph.facebook.com/" + response.id + "/picture");
					document.getElementById('profile-pic').style.display = "in-line";
			    document.getElementById('status').innerHTML = "Logout"
			});
			this.state.active_user = true;
		},

		statusChangeCallback: function (response) {
	    console.log('statusChangeCallback');
	    console.log(response);
	    // The response object is returned with a status field that lets the
	    // app know the current login status of the person.
	    // Full docs on the response object can be found in the documentation
	    // for FB.getLoginStatus().
	    if (response.status === 'connected') {
	      // Logged into your app and Facebook.
	     	this.updateButton();
	    } else if (response.status === 'not_authorized') {
	      // The person is logged into Facebook, but not your app.
	      document.getElementById('status').innerHTML = 'Login to this app';
	    } else {
	      // The person is not logged into Facebook, so we're not sure if
	      // they are logged into this app or not.
	      document.getElementById('status').innerHTML = 'Login with Facebook';
	    }
	  },

	  checkLoginState: function(){
	  		FB.getLoginStatus(function(response) {
	      	this.statusChangeCallback(response);
	      }.bind(this));
	  	},

	  handleClick : function(){
	  	if(this.state.active_user){
	  		console.log('attempt to logout');
	  		FB.logout(this.checkLoginState);
	  		document.getElementById('logged-in-msg').innerHTML = '';
	  		document.getElementById('profile-pic').style.display = "none";
	  		document.getElementById('profile-pic').setAttribute("src", "");
	  		this.state.active_user = false;
	  	}
	  	else {
	  		console.log('attempt to login');
	  		FB.login(this.checkLoginState);
	  	}
	  },

    render: function () {
        return (
        		<div>
	        		<span
							  className="fb-like"
							  data-send="true"
							  data-width="400"
							  data-show-faces="true">
							</span>
							<span id="logged-in-msg"></span>
							<img id="profile-pic"></img>
	        		<a id="status" className= "btn btn-primary" href="#" onClick={this.handleClick}>
	        			Login with Facebook
		        	</a>
	        	</div>
        );
    }
});
window.LoginBar = LoginBar;
module.exports = LoginBar;
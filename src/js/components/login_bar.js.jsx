var LoginBar = React.createClass({
		getInitialState: function() {
			return {active_user: false};
		},

		componentDidMount: function () {
				var prodFB_ID = '497341860414071';
				var devFB_ID = '817044031744170';
				// Initialize Parse AP ID, JS ID
  			Parse.initialize("7cV5msyBWxaktixwnKJI6FH9UM88oDCqD4QqnyTo", "qqebJnzSOPhTaSmR8E8L99VAnHFOBzQbMgrYowMY");

			 window.fbAsyncInit = function() {
        Parse.FacebookUtils.init({
          appId      : devFB_ID,
           status     : true,  // check Facebook Login status
      		 cookie     : true,  // enable cookies to allow Parse to access the session
      		 xfbml      : true,  // initialize Facebook social plugins on the page
      		 version    : 'v2.3' // point to the latest Facebook Graph API version
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
					document.getElementById('profile-pic').style.display = "inline";
			    document.getElementById('status').innerHTML = "Logout"
			});
			this.state.active_user = true;
		},

		statusChangeCallback: function (response) {

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
	  		Parse.User.logOut();
	  		document.getElementById('status').innerHTML = 'Login with Facebook';
	  		document.getElementById('logged-in-msg').innerHTML = '';
	  		document.getElementById('profile-pic').style.display = "none";
	  		document.getElementById('profile-pic').setAttribute("src", "");
	  		this.state.active_user = false;
	  	}
	  	else {
	  		console.log('attempt to login');
	  		var permissions = "public_profile,";
	  		Parse.FacebookUtils.logIn(permissions, {
			  success: function(user) {
			    // Handle successful login
			      if (!user.existed()) {
					    alert("User signed up and logged in through Facebook!");
					  } else {
					    alert("User logged in through Facebook!");
					  }
			    this.updateButton();
			  }.bind(this),
			  error: function(user, error) {
			    // Handle errors and cancellation
			    document.getElementById('status').innerHTML = 'Login to this app';
			  }
			});
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
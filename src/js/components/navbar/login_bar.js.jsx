var LoginBar = React.createClass({
    getInitialState: function() {
        return {
            activeUser: false,
        };
    },

    componentDidMount: function () {
        var prodFB_ID = '497341860414071';
        var devFB_ID = '817044031744170';
        // Initialize Parse AP ID, JS ID
        Parse.initialize("7cV5msyBWxaktixwnKJI6FH9UM88oDCqD4QqnyTo", "qqebJnzSOPhTaSmR8E8L99VAnHFOBzQbMgrYowMY");

        window.fbAsyncInit = function() {
            Parse.FacebookUtils.init({
                appId      : prodFB_ID,
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
            if (d.getElementById(id)) {
                return;
            }
            js = d.createElement(s); js.id = id;
            js.src = "//connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
            }(document, 'script', 'facebook-jssdk'));
		},

		updateButton : function(){
			FB.api('/me', function(response) {
					console.log(JSON.stringify(response));
                    var user = Parse.User.current();
                    this.setState({firstName: response.first_name, responseID: response.id});
                    if(user){
                        user.set("facebookUserId", response.id);
                        user.save();
                    }
			}.bind(this));
			this.setState({activeUser: true});
		},

		statusChangeCallback: function (response) {

	    if (response.status === 'connected') {
	      // Logged into your app and Facebook.
            window.fbLoggedIn = true;
	     	this.updateButton();
	     	
	    } else if (response.status === 'not_authorized') {
	      // The person is logged into Facebook, but not your app.
	    } else {
	      // The person is not logged into Facebook, so we're not sure if
	      // they are logged into this app or not.
	    }
	  },

	  checkLoginState: function(){
	  		FB.getLoginStatus(function(response) {
	      	this.statusChangeCallback(response);
	      }.bind(this));
	  	},

	  handleClick : function(){
	  	if(this.state.activeUser){
	  		console.log('attempt to logout');
	  		Parse.User.logOut();
			this.setState({activeUser: false, firstName: '', responseID: ''});
	  	}
	  	else {
	  		console.log('attempt to login');
	  		var permissions = "public_profile, user_events";
	  		Parse.FacebookUtils.logIn(permissions, {
                success: function(user) {
                    // Handle successful login
			        if (!user.existed()) {
                        // User signed up and logged in through Facebook
                    } else {
                        // User logged in through Facebook
                    }
                    this.updateButton();
                }.bind(this),
			    error: function(user, error) {
                    // Handle errors and cancellation
                    alert("Error logging in");
			    }
            });
        }
    },

    render: function () {
        var loginGreeting = '';
        var loginButtonMessage = '';
        var profilePic = null;
        if (this.state.activeUser) {
            loginGreeting = 'Sup, ' + this.state.firstName;
            loginButtonMessage = 'Logout';
            profilePic = <img src={'http://graph.facebook.com/' + this.state.responseID + '/picture'} />;
        } else {
            loginButtonMessage = 'Login with Facebook';
        }
        return (
            <div>
                <span>{loginGreeting}</span>
                {profilePic}
                <a id="status" className= "btn btn-primary" href="#" onClick={this.handleClick}>
                    {loginButtonMessage}
                </a>
            </div>
        );
    }
});
window.LoginBar = LoginBar;
module.exports = LoginBar;

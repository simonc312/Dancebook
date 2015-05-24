var LoginBar = React.createClass({
    render: function () {
        return (
        		<button className= "btn btn-primary" href={this.props.linkPath}>
	        		Log in with Facebook
	        	</button>
        );
    }
});
window.LoginBar = LoginBar;
module.exports = LoginBar;
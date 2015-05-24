var MainNavBarList = require("./main_navbar_navlist.js.jsx");
var BrandLogo = require("./brand_logo.js.jsx");
var LoginBar = require("./login_bar.js.jsx");
var NavBar = React.createClass({

	render: function(){
		
		return (
			<nav className= "navbar navbar-default navbar-fixed-top" id="dancebar">
				<BrandLogo alt="Brand Image" linkPath="#home" src="" classes="navbar-brand"/>
				<MainNavBarList />
				<LoginBar linkPath="#login"/>
			</nav>
		)

	}
});

window.NavBar = NavBar;
module.exports = NavBar;
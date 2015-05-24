
var MainNavBarList = require("./main_navbar_navlist");
var BrandLogo = require("./brand_logo");
var LoginBar = require("./login_bar");
var NavBar = React.createClass({

	render: function(){
		
		return (
			<nav className= "navbar dancebar">
				<BrandLogo alt="Brand Image" linkPath="#home" src="" classes="navbar-brand"/>
				<MainNavBarList />
				<LoginBar linkPath="#login"/>
			</nav>
		)

	}
});

window.NavBar = NavBar;
module.exports = NavBar;
var MainNavBarList = require("./main_navbar_navlist.js.jsx");
var BrandLogo = require("./brand_logo.js.jsx");
var LoginBar = require("./login_bar.js.jsx");
var NavBar = React.createClass({

	render: function(){
		
		return (
			<div className="navbar-fixed">
				<nav className= "navbar" id="dancebar">
					<div className= "container-fluid">
						<BrandLogo alt="Brand Image" linkPath="#home" src="" classes="brand-logo"/>
						<ul className="right hide-on-med-and-down">
							<LoginBar />
						</ul>
						<MainNavBarList />
					</div>
				</nav>	
			</div>
		)

	}
});

window.NavBar = NavBar;
module.exports = NavBar;
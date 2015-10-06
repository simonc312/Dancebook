var NavBarNavList = require("./navbar_navlist.js.jsx");
var NavListLink = require("./navlistlink.js.jsx");
var NavBarList = React.createClass({

	render: function(){
		
		return (
			<NavBarNavList>
				<NavListLink text= "Events" linkPath= "/events" />
				<NavListLink text= "Teams" linkPath= "/teams" />
				<NavListLink text= "Create Form" linkPath= "/create-form" />
			</NavBarNavList>
		)

	}
});

window.NavBarList = NavBarList;
module.exports = NavBarList;
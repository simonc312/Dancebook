var NavBarNavList = require("./navbar_navlist.js.jsx");
var NavListLink = require("./navlistlink.js.jsx");
var NavBarList = React.createClass({

	render: function(){
		
		return (
			<NavBarNavList>
				<NavListLink text= "Events" linkPath= "#" />
				<NavListLink text= "Teams" linkPath= "#" />
				<NavListLink text= "About" linkPath= "#" /> 
			</NavBarNavList>
		)

	}
});

window.NavBarList = NavBarList;
module.exports = NavBarList;
var NavBarNavList = require("./navbar_navlist");
var NavListLink = require("./navlistlink");
var NavBarList = React.createClass({

	render: function(){
		
		return (
			<NavBarNavList>
				<NavListLink text= "Events" linkPath= "#" classes= "active" />
				<NavListLink text= "Teams" linkPath= "#" />
				<NavListLink text= "About" linkPath= "#" /> 
			</NavBarNavList>
		)

	}
});

window.NavBarList = NavBarList;
module.exports = NavBarList;
var NavListLink = require("./navlistlink");

var NavBarList = React.createClass({

	render: function(){
		
		return (
			<ul className="nav navbar-nav">
					{this.props.children}
			</ul>
		)

	}
});

window.NavBarList = NavBarList;
module.exports = NavBarList;
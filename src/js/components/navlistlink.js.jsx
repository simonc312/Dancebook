
var NavListLink = React.createClass({
		getInitialState: function() {
			return {classes: "inactive"}
		},
		handleClick: function(){
			this.setState({classes: "active"});
		},
    render: function () {
        return (
	        		<li className={this.states.classes}>
	        			<a href={this.props.linkPath} onClick={this.handleClick}>{this.props.text}</a>
	        		</li>
        );
    }
});
window.NavListLink = NavListLink;
module.exports = NavListLink;
var NavListLink = require("./navlistlink.js.jsx");

var NavBarList = React.createClass({
  getInitialState: function(){
    return {sideNavVisible: false}
  },
  componentDidMount: function(){
    // Initialize collapse button
    $(".button-collapse").sideNav();
    // Initialize collapsible (uncomment the line below if you use the dropdown variation)
    $('.collapsible').collapsible();
  },
  _showSideNav: function(){
    var visible = this.state.sideNavVisible;
    console.log('here');
    if(visible)
      $(".button-collapse").sideNav("hide");
    else
      $(".button-collapse").sideNav("show");
    this.setState({sideNavVisible: !visible});
  },
	render: function(){
		
		return (
      <div>
  			<ul className="right hide-on-med-and-down">
  					{this.props.children}
  			</ul>
        <ul className="side-nav">
            {this.props.children}
        </ul>
        <a 
          href="#"
          className="right button-collapse" 
          onClick={this._showSideNav} 
        >
          <i className="material-icons">menu</i>
        </a>
      </div> 
		)

	}
});

window.NavBarList = NavBarList;
module.exports = NavBarList;
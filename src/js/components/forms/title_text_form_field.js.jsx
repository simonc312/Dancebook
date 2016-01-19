var TextFormField = require('./text_form_field.js.jsx');

var TitleFormField = React.createClass({
    getInitialState: function(){
      var initialStyle = {border: "none", "font-size": "3em", height: "2em"};
      return {style : initialStyle}
    },
    _onMouseOver: function(event){
      //modify state of style to include css class which matches input type text?
      var newStyle = {"font-size": "3em", height: "2em"};
      this.setState({
        style: newStyle
      });
    },
    _onMouseOut: function(event){
      //modify state of style to remove css class
      this.setState(
        this.getInitialState()
        ); 
    },
    render: function () {
        return (
              <TextFormField 
                value={this.props.value}
                style={this.state.style}
                onMouseOver={this._onMouseOver}
                onMouseOut={this._onMouseOut} />
        );
    }
});
window.TitleFormField = TitleFormField;
module.exports = TitleFormField;
var FormField = require('./form_field.js.jsx');

var TextFormField = React.createClass({
    render: function () {
        return (
              <FormField 
                type="text"
                id={this.props.title}
                labelText={this.props.title}
                disabled={this.props.disabled}
                value={this.props.value}
                style={this.props.style}  
                {...this.props}   
              />
        );
    }
});
window.TextFormField = TextFormField;
module.exports = TextFormField;
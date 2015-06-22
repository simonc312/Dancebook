var FormField = require('./form_field.js.jsx');

var TextFormField = React.createClass({
    render: function () {
        return (
              <FormField 
                type="text"
                id={this.props.title}
                labelText={this.props.title}
                disabled={this.props.disabled}   
              />
        );
    }
});
window.TextFormField = TextFormField;
module.exports = TextFormField;
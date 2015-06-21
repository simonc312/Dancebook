var FormField = require('./form_field.js.jsx');

var TextFormField = React.createClass({
    render: function () {
        return (
              <FormField type="text" id={this.props.title} labelText={this.props.title} />
        );
    }
});
window.TextFormField = TextFormField;
module.exports = TextFormField;
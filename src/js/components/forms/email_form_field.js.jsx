var FormField = require('./form_field.js.jsx');

var EmailFormField = React.createClass({
    render: function () {
        return (
              <FormField 
                type="email"
                id={this.props.title}
                labelText={this.props.title}
                disabled={this.props.disabled} 
              />
        );
    }
});
window.EmailFormField = EmailFormField;
module.exports = EmailFormField;
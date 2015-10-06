var FormField = require('./form_field.js.jsx');

var ParagraphTextFormField = React.createClass({
    render: function () {
        return (
              <FormField type="textarea" 
                id={this.props.title} 
                labelText={this.props.title}
                disabled={this.props.disabled}
                style={{height:7+'em', width:35+'em'}}
              />
        );
    }
});
window.ParagraphTextFormField = ParagraphTextFormField;
module.exports = ParagraphTextFormField;
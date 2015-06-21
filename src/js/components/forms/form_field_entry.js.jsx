var TextFormField = require('./text_form_field.js.jsx');
var ParagraphTextFormField = require('./paragraph_text_form_field.js.jsx');
var EmailFormField = require('./email_form_field.js.jsx');
var FormFieldPicker = require('./form_field_picker.js.jsx');
var FormFieldEntry = React.createClass({
    getInitialState: function() {
      return {}
    },
    _handleClick: function(){
    },
    render: function () {
        return (
            <div className="formFieldEntry">
                <span className="pull-right">
                    <a><i className="fa fa-edit fa-3x"></i></a>
                    <a><i className="fa fa-copy fa-3x"></i></a>
                    <a><i className="fa fa-trash fa-3x"></i></a>
                </span>
                <TextFormField title="Question Title" />
                <TextFormField title="Help Text" />
                <ParagraphTextFormField title="message" />
                <FormFieldPicker />
            </div>
        );
    }
});
window.FormFieldEntry = FormFieldEntry;
module.exports = FormFieldEntry;
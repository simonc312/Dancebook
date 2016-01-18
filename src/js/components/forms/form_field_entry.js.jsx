var TextFormField = require('./text_form_field.js.jsx');
var ParagraphTextFormField = require('./paragraph_text_form_field.js.jsx');
var FormFieldPicker = require('./form_field_picker.js.jsx');
var FormFieldEntry = React.createClass({
    _handleClick: function(event){
    },
    render: function () {
        return (
            <div className="formFieldEntry panel panel-default">
                <div className="panel-heading">
                    <TextFormField title="Question Title" />
                </div>
                <div className="panel-body">
                    <TextFormField title="Help Text" />
                    <FormFieldPicker />
                </div>
            </div>
        );
    }
});
window.FormFieldEntry = FormFieldEntry;
module.exports = FormFieldEntry;
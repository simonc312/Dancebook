var TextFormField = require('./text_form_field.js.jsx');
var ParagraphTextFormField = require('./paragraph_text_form_field.js.jsx');
var FormFieldPicker = require('./form_field_picker.js.jsx');
var FormFieldEntry = React.createClass({
  propTypes: {
      onClickHandler: React.PropTypes.func,
      isSelected: React.PropTypes.bool,
    },
   _onClickHandler: function(event){
    this.props.onClickHandler();
  },
  render: function () {
    var formTypePicker = <FormFieldPicker isSelected={this.props.isSelected} />

      return (
        <div className="formFieldEntry panel panel-default" onClick={this._onClickHandler}>
          <div className="panel-heading">
            <TextFormField title="Question Title" />
          </div>
          <div className="panel-body">
            <TextFormField title="Help Text" />
            {formTypePicker}
          </div>
        </div>
      );
  }
});
window.FormFieldEntry = FormFieldEntry;
module.exports = FormFieldEntry;
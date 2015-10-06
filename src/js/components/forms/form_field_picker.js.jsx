var TextFormField = require('./text_form_field.js.jsx');
var ParagraphTextFormField = require('./paragraph_text_form_field.js.jsx');
var EmailFormField = require('./email_form_field.js.jsx');
var FormFieldPicker = React.createClass({
    propTypes: {
      options: React.PropTypes.array
    }, 
    getInitialState: function(){
      return {options: ['Text','Paragraph Text','Email'], fieldType: 'Text'}
    },
    componentDidMount: function(){
      if(this.props.options)
        this.setState({options: this.props.options});
    },
    _dict: {
      'Text' : <TextFormField title= "Their Response" disabled={true}/>,
      'Paragraph Text' : <ParagraphTextFormField title= "Their Response" disabled={true}/>,
      'Email' : <EmailFormField title= "Their Email" disabled={true}/>,
    },
    _handleChange: function(event){
      this.setState({options: this.state.options, fieldType: event.target.value});
    },
    render: function () {
        var options=[];
        var field;
        if(this.state.options){
          this.state.options.forEach(function(opt){
            options.push(<option key={opt} value={opt}>{opt}</option>);
          });
        }
        if(this.state.fieldType){
          field = this._dict[this.state.fieldType];
        }
        return (
              <div className="fieldPicker">
                  <label>Choose Type</label>
                  <select onChange={this._handleChange}>
                    {options}
                  </select>
                  {field}
              </div>
        );
    }
});
window.FormFieldPicker = FormFieldPicker;
module.exports = FormFieldPicker;


var FormFieldPicker = React.createClass({
    propTypes: {
      options: React.PropTypes.array
    },
    getInitialState: function(){
      return {options: ['Text','Paragraph Text','Email']}
    },
    componentDidMount: function(){
      if(this.props.options)
        this.setState({options: this.props.options});
    },
    render: function () {
        var options=[];
        if(this.state.options){
          this.state.options.forEach(function(opt){
            options.push(<option value={opt}>{opt}</option>);
          });
        }
        return (
              <div className="fieldPicker">
                  <label>Choose Type</label>
                  <select>
                    {options}
                  </select>
              </div>
        );
    }
});
window.FormFieldPicker = FormFieldPicker;
module.exports = FormFieldPicker;
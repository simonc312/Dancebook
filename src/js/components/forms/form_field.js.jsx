var FormField = React.createClass({
    propTypes: {
      id: React.PropTypes.string,
      labelText: React.PropTypes.string,
      required: React.PropTypes.bool,
      style: React.PropTypes.object,
      type: React.PropTypes.string,
      value: React.PropTypes.string
      
    },
    getInitialState : function(){
      return {}
    },
    onComponentDidMount : function(){
      this.setState({value: this.props.value});
    },
    _handleOnChange : function(event){
      this.setState({value:event.target.value});
    },
    render: function () {
        var required, value;
        if(this.props.required == true)
          required = '*required';
        if(this.state.value)
          value = this.state.value;
        return (
              <div className="form-group">
                  <label for={this.props.id}>{this.props.labelText}</label>
                  {required}
                  <input 
                    className="form-control"
                    type={this.props.type}
                    id={this.props.id}
                    style={this.props.style}
                    value={value}
                    onChange={this._handleOnChange}
                  />
              </div>
        );
    }
});
window.FormField = FormField;
module.exports = FormField;
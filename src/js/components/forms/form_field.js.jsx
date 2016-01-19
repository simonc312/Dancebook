var FormField = React.createClass({
    propTypes: {
      id: React.PropTypes.string,
      disabled: React.PropTypes.bool,
      labelText: React.PropTypes.string,
      required: React.PropTypes.bool,
      style: React.PropTypes.object,
      type: React.PropTypes.string,
      value: React.PropTypes.string,
      onMouseOver: React.PropTypes.func,
      onMouseOut: React.PropTypes.func
      
    },
    getInitialState : function(){
      return {value: this.props.value}
    },
    onComponentDidMount : function(){
      this.setState({value: this.props.value});
    },
    _handleOnChange : function(event){
      this.setState({value:event.target.value});
    },
    _handleOnMouseOver : function(event){
      if(this.props.onMouseOver) this.props.onMouseOver();
    },
    _handleOnMouseOut : function(event){
      if(this.props.onMouseOut) this.props.onMouseOut();
    },
    render: function () {
        var required, requiredText,value, disabled;
        var labelText = this.props.labelText;
        if(this.props.required == true){
          required = true;
          requiredText = "*Required"
        }
        if(this.state.value)
          value = this.state.value;
        if(this.props.disabled == true){
          disabled = true;
          value = this.props.labelText;
          labelText = '';
        }
        
        return (
              <div className="form-group">
                  <label for={this.props.id}>{labelText}</label>
                  {requiredText}
                  <input 
                    className="form-control"
                    id={this.props.id}
                    disabled={disabled}
                    required={required}
                    style={this.props.style}
                    type={this.props.type}
                    value={value}
                    onChange={this._handleOnChange}
                    onMouseOver={this._handleOnMouseOver}
                    onMouseOut={this._handleOnMouseOut}
                  />
              </div>
        );
    }
});
window.FormField = FormField;
module.exports = FormField;
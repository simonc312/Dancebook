var FormFieldHandlers = React.createClass({
    propTypes: {
      
    },
    getInitialState: function(){
      return {}
    },
    componentDidMount: function(){
      
    },
    _handleEditClick: function(){
    },
    _handleDuplicateClick: function(){
    },
    _handleDeleteClick: function(){
        this.setState({show:false});
    },
    render: function () {
        return (
              <span className="fieldHandler pull-right">
                <a onClick={this._handleEditClick} title="edit entry"><i className="fa fa-edit fa-3x"></i></a>
                <a onClick={this._handleDuplicateClick} title="duplicate entry"><i className="fa fa-copy fa-3x"></i></a>
                <a onClick={this._handleDeleteClick} title="delete entry"><i className="fa fa-trash fa-3x"></i></a>
              </span>
        );
    }
});
window.FormFieldHandlers = FormFieldHandlers;
module.exports = FormFieldHandlers;




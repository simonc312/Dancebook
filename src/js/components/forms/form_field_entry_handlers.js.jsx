var FormFieldHandlers = React.createClass({
    propTypes: {
      
    },
    _handleEditClick: function(event){
      alert("EDIT CLICKED");
    },
    _handleDuplicateClick: function(event){
    },
    _handleDeleteClick: function(event){
      alert("FIRE");
    },
    render: function () {
        var handler = this.props.onDeleteHandler;
        return (
              <div className="fieldHandler pull-right">
                <a onClick={this._handleEditClick} title="edit entry"><i className="fa fa-edit fa-3x"></i></a>
                <a onClick={this._handleDuplicateClick} title="duplicate entry"><i className="fa fa-copy fa-3x"></i></a>
                <a onClick={this.props.onDeleteHandler} title="delete entry"><i className="fa fa-trash fa-3x"></i></a>
              </div>
        );
    }
});
window.FormFieldHandlers = FormFieldHandlers;
module.exports = FormFieldHandlers;




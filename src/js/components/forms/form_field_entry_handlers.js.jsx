var FormFieldHandlers = React.createClass({
    propTypes: {
      onDeleteHandler: React.PropTypes.func,
      onDuplicateHandler: React.PropTypes.func
    },
    _handleEditClick: function(event){
      console.log("EDIT CLICKED");
    },
    _handleDuplicateClick: function(event){
      console.log("DUPLICATE CLICKED");
      this.props.onDuplicateHandler();
    },
    _handleDeleteClick: function(event){
      console.log("DELETE CLICKED");
      this.props.onDeleteHandler();
    },
    render: function () {
      var handler = this.props.onDeleteHandler;
      return (
        <div className="fieldHandler pull-right">
          <a onClick={this._handleEditClick} title="edit entry"><i className="fa fa-edit fa-3x"></i></a>
          <a onClick={this._handleDuplicateClick} title="duplicate entry"><i className="fa fa-copy fa-3x"></i></a>
          <a onClick={this._handleDeleteClick} title="delete entry"><i className="fa fa-trash fa-3x"></i></a>
        </div>
      );
    }
});
window.FormFieldHandlers = FormFieldHandlers;
module.exports = FormFieldHandlers;




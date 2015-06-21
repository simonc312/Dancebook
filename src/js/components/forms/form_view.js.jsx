var FormFieldEntry = require('./form_field_entry.js.jsx');
var FormView = React.createClass({
    getInitialState: function() {
      return {entries:[]}
    },
    _addFieldEntry: function(){
        var newEntry = <FormFieldEntry />
        this.setState({entries: this.state.entries.concat(newEntry)})
    },
    render: function () {
        var entries;
        if(this.state.entries)
            entries = this.state.entries;
        return (
            <div className="container">
                <h3>New Application</h3>
                <h5> Application Description </h5>
                <form action="/my-handling-form-page" method="post">
                    <FormFieldEntry />
                    {this.state.entries}
                    <br></br>
                    <span>
                        <a className="btn btn-primary pull-left" onClick={this._addFieldEntry}>Add Field</a>
                        <input className="btn btn-success" type="submit" value="Submit Application"/>
                    </span>
                </form>
            </div>
        );
    }
});
window.FormView = FormView;
module.exports = FormView;



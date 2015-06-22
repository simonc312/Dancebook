var FormFieldEntry = require('./form_field_entry.js.jsx');
var FormFieldEntryHandlers = require('./form_field_entry_handlers.js.jsx');
var FormView = React.createClass({
    getInitialState: function() {
      return {entries:[]}
    },
    _addFieldEntry: function(){
        var newEntry = {id: this.state.entries.length};
        this.setState({entries: this.state.entries.concat(newEntry), selectedEntry: newEntry});
    },
    _deleteFieldEntry: function(index){
        var updatedEntries = this.state.entries.filter(function(entry, i) {
          return index !== i;
        });
        //if(this.state.selectedEntry.id == index) 
        alert(updatedEntries);
        this.setState({entries: updatedEntries});
    },
    _duplicateFieldEntry: function(index){

    },
    render: function () {
        var entries;
        if(this.state.entries)
            entries = this.state.entries.map(function(entry,index){
                return <EntryWrapper key={entry.id} onDeleteHandler={this._deleteFieldEntry.bind(this,index)} />
            },this);
        return (
            <div className="container">
                <h3>New Application</h3>
                <h5> Application Description </h5>
                <form action="/my-handling-form-page" method="post">
                    <FormFieldEntry />
                    {entries}
                    <br></br>
                    <span>
                        <a 
                            className="btn btn-primary" 
                            onClick={this._addFieldEntry}
                            role="button"
                        >
                            Add Field
                        </a>
                        <input className="btn btn-success" type="submit" value="Submit Application"/>
                    </span>
                </form>
            </div>
        );
    }
});

var EntryWrapper = React.createClass({
    render: function(){
        return (
                <div className="entryWrapper">
                    <FormFieldEntryHandlers onDeleteHandler={this.props.onDeleteHandler}/>
                    <FormFieldEntry />
                </div>
                )
    }
});

window.FormView = FormView;
module.exports = FormView;



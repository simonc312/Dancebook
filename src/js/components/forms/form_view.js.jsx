var FormFieldEntry = require('./form_field_entry.js.jsx');
var FormFieldEntryHandlers = require('./form_field_entry_handlers.js.jsx');
var FormView = React.createClass({
    getInitialState: function() {
      return {entries:[{id: 0}]}
    },
    _addFieldEntry: function(){
        var newEntry = {id: Math.random()+Date.now()}; //unique id generated for entries
        console.log("created id : "+newEntry.id);
        this.setState({entries: this.state.entries.concat(newEntry), selectedEntry: newEntry});
    },
    _deleteFieldEntry: function(id){
        var updatedEntries = this.state.entries.filter(function(entry, i) {
          if(entry.id == id)
            console.log("deleted id : "+entry.id);
          return id !== entry.id;
        });
        //if(this.state.selectedEntry.id == index) 
        this.setState({entries: updatedEntries});
    },
    _duplicateFieldEntry: function(index){

    },
    _makeRequired: function(){

    },
    render: function () {
        var entries;
        if(this.state.entries)
            entries = this.state.entries.map(function(entry,index){
                return <EntryWrapper key={entry.id} onDeleteHandler={this._deleteFieldEntry.bind(this,entry.id)} />
            },this);
        return (
            <div className="container">
                <h3>New Application</h3>
                <h5> Application Description </h5>
                <form action="/my-handling-form-page" method="post">
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

                        <input type="checkbox" onChange={this._makeRequired}>Required Question</input>

                    </span>

                    <br></br>
                    <input className="btn btn-lg btn-success" type="submit" value="Submit Application"/>
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



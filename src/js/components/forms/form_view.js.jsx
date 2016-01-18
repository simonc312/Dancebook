var FormFieldEntry = require('./form_field_entry.js.jsx');
var FormFieldEntryHandlers = require('./form_field_entry_handlers.js.jsx');
var FormView = React.createClass({
  getInitialState: function() {
    var initialEntry = {id: 2};
    return {
            title: "New Application",
            description: "Describe what this application will be used for.",
            entries:[initialEntry],
            selectedEntry: initialEntry
          }
  },
  _addFieldEntry: function(){
    var newEntry = {id: Math.random()+Date.now()}; //unique id generated for entries
    console.log("created id : "+newEntry.id);
    this.setState({
        entries: this.state.entries.concat(newEntry),
        selectedEntry: newEntry
     });
  },
  _deleteFieldEntry: function(id){
    var updatedEntries = this.state.entries.filter(function(entry, i) {
      if(entry.id == id)
        console.log("deleted id : "+entry.id);
      else 
        console.log("id mismatch : "+entry.id+" id filter : "+id);
      return id !== entry.id;
    });
    this.setState({entries: updatedEntries});
  },
  _duplicateFieldEntry: function(id,index){
    var newEntry = {id: Math.random()+Date.now(), duplicateOf: id}; //unique id generated for entries
    console.log("created id : "+newEntry.id);
    this.state.entries.splice(index+1,0,newEntry);
    this.setState({
        // add newEntry right after original entry
        entries: this.state.entries,
        selectedEntry: newEntry
     });
  },
  _onSubmitHandler: function(e){
    //This will do some form validation checks on the client side 
    // And if no errors create and save the Parse Form to db
    var AppForm = Parse.Object.extend("ApplicationForm");
    var test = new AppForm();
    test.save({
          owner: Parse.User.current()
      },
      {
          success: function(gameScore) {
          // The object was saved successfully.
              alert("Saved!");
          },
          error: function(gameScore, error) {
              // The save failed.
              // error is a Parse.Error with an error code and message.
              alert(error);
          }
      }
    );
  e.preventDefault();
  },
  render: function () {
    var entries;
    if(this.state.entries)
        entries = this.state.entries.map(
          function(entry,index){
            if(entry.duplicateOf !== undefined){
              console.log("rendered duplicate of  "+entry.duplicateOf);
              //need to get props of duplicate react element
              return 
            }

            return <EntryWrapper 
                      key={entry.id} 
                      onDeleteHandler={this._deleteFieldEntry.bind(this,entry.id)}
                      onDuplicateHandler={this._duplicateFieldEntry.bind(this,entry.id,index)}/>
          }, this
        );
    return (
        <div className="container">
            <h3>{this.state.title}</h3>
            <h5>{this.state.description}</h5>
            <form onSubmit={this._onSubmitHandler}>
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

                </span>

                <br></br>
                <input className="btn btn-lg btn-success" type="submit" value="Submit Application"/>
            </form>
        </div>
    );
  }
});

var EntryWrapper = React.createClass({
  getInitialState: function() {
    return {isRequired: false}
  },
  _setRequired: function(){
    var required = !this.state.isRequired;
    this.setState({
      isRequired: required
    });
  },
  render: function(){
    return (
            <div className="entryWrapper">
                <FormFieldEntryHandlers 
                  onDeleteHandler={this.props.onDeleteHandler}
                  onDuplicateHandler={this.props.onDuplicateHandler}/>

                <FormFieldEntry />

                <input type="checkbox" onChange={this._setRequired}>
                  Required Question
                </input>
            </div>
            )
  }
});

window.FormView = FormView;
module.exports = FormView;



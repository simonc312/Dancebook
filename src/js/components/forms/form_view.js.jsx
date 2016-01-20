var TitleFormField = require('./title_text_form_field.js.jsx');
var TextFormField = require('./text_form_field.js.jsx');
var FormFieldEntry = require('./form_field_entry.js.jsx');
var FormFieldEntryHandlers = require('./form_field_entry_handlers.js.jsx');
var FormView = React.createClass({
  getInitialState: function() {
    var initialEntry = {id: 0};
    return {
            title: "New Application",
            description: "Describe what this application will be used for.",
            entries:[initialEntry],
            selectedEntry: initialEntry
          }
  },
  _setSelectedEntry: function(index) {
    var entry = this.state.entries[index];
    //avoid extra state render if same entry
    if(entry !== this.state.selectedEntry)
      this.setState({ selectedEntry: entry});
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
  _renderEntryWrapper: function(entry,index){
    if(entry.duplicateOf !== undefined){
      console.log("rendered duplicate of entry with id "+entry.duplicateOf);
      //need to get props of duplicate react element
      entry.duplicateOf = undefined;
      return 
    }

    var deleteFunction = this._deleteFieldEntry.bind(this,entry.id);
    var duplicateFunction = this._duplicateFieldEntry.bind(this,entry.id,index);
    var onClickFunction = this._setSelectedEntry.bind(this,index);
    return <EntryWrapper 
              key={entry.id} 
              isSelected= {this.state.selectedEntry == entry}
              onDeleteHandler= {deleteFunction}
              onDuplicateHandler={duplicateFunction}
              onClickHandler={onClickFunction}/>
  },
  render: function () {
    var entries;
    if(this.state.entries){
        entries = this.state.entries.map(
                    this._renderEntryWrapper, this
                  );
    }
    return (
        <div className="container">
            <TitleFormField title="App Title" value={this.state.title}/>
            <h5><TextFormField title="App Description" value={this.state.description}/></h5>
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

    var clickHandlers, requiredCheckbox;

    if(this.props.isSelected){
      clickHandlers = <FormFieldEntryHandlers 
                  onDeleteHandler={this.props.onDeleteHandler}
                  onDuplicateHandler={this.props.onDuplicateHandler}/>

      requiredCheckbox =
                <div> 
                  <input type="checkbox" onChange={this._setRequired} />
                  Required Question
                </div>
    }
       
    return (
            <div className="entryWrapper">
                {clickHandlers}

                <FormFieldEntry 
                  onClickHandler={this.props.onClickHandler}
                  isSelected={this.props.isSelected} />

                {requiredCheckbox}
            </div>
            )
  }
});

window.FormView = FormView;
module.exports = FormView;



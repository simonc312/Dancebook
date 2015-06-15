var Event = React.createClass({
  getInitialState: function() {
    return {description: "Event Description Missing",rsvp: "unsure"}
  },
  componentDidMount: function(){
    if(this.props.id){ //event-id
      FB.api(
        "/"+this.props.id+"?fields=cover,name,description,ticket_uri,owner",
        function(response){
          console.log(response);
          if(response.error != null)
            return;
          console.log(response.cover.source); //cover image object can't be storedin state.
          this.setState({ cover: response.cover.source, description: response.description, rsvp: this.props.rsvp});
        }.bind(this)
      );
    }
  },
  render: function () {
      var event_name = <h2>{this.props.name}</h2>
      var event_cover;
      if(this.state.cover)
        event_cover = <img src={this.state.cover}/> //need to adjust with offsets from cover.offset_x, cover.offset_y
      var event_info = <h5>{this.state.description}</h5>
      var event_button;
      if(this.state.rsvp == "attending")
        event_button = <btn className="btn btn-primary btn-disabled">Already Going</btn>
      else
        event_button = <btn className="btn btn-success">Join Event</btn>
      return (
            <div className="col-4-md">
              {event_cover}
              {event_name}
              {event_button}
              {event_info}    
            </div>
      );
  }
});

window.Event = Event;
module.exports = Event;
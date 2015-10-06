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
      var event_name = <a href="">{this.props.name}</a>
      var event_cover;
      if(this.state.cover)
        event_cover = <img class="img-responsive" src={this.state.cover}/> //need to adjust with offsets from cover.offset_x, cover.offset_y
      var event_info = <p>{this.state.description}</p>
      var event_button;
      if(this.state.rsvp == "attending")
        event_button = <btn className="btn btn-primary disabled" style={{marginLeft: 20 +'px'}}>Already Going</btn>
      else
        event_button = <btn className="btn btn-success" style={{marginLeft: 20 +'px'}}>Join Event</btn>
      return (
            <div className="col-4-md">
              {event_cover}
              <h2>
                {event_name}
                {event_button}
              </h2>
              {event_info}    
            </div>
      );
  }
});

window.Event = Event;
module.exports = Event;
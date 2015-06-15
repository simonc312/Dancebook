var Event = require("./event.js.jsx");
var EventManager = React.createClass({
    getInitialState: function(){
      return {
        events:[], events_not_replied:[]
      };
    },
    fbEnsureInit: function(callback) {
        if(!window.fbLoggedIn) {
            setTimeout(function() {this.fbEnsureInit(callback);}.bind(this), 50);
        } else {
            if(callback) {
                callback();
            }
        }
    },
    fetchEvents: function(user_id,queryString,callback){
      FB.api(
          "/"+user_id+queryString, // add /not_replied to include those kind of events
          function (response) {
            if (response && !response.error) {
              /* handle the result */
              callback(response.data);
              //console.log(response);
            }else{
              console.log(response);
            }
          }.bind(this)
      );
    },
    addEventRows: function(eventArray){
      var rows = [];
      if(eventArray){
          eventArray.forEach(function(e){
            rows.push(<Event name={e.name} rsvp={e.rsvp_status} id={e.id} key={e.id} />)
          });
        }
      return rows;
    },
    componentDidMount: function() {
      /* make the API call */
      var facebook_user_id = "me"; //replace with Parse.User.facebookUserId later
      var replied_events_query = "/events";
      var unreplied_events_query = "/events/not_replied";
      var events = [];
      var events_not_replied = [];
      var eventCallback = function(data){events = data; console.log(events);};
      var eventNRCallback = function(data){events_not_replied = data; console.log(events_not_replied);};
      this.fbEnsureInit(function(){
        this.fetchEvents(facebook_user_id,replied_events_query,eventCallback);
        this.fetchEvents(facebook_user_id,unreplied_events_query,eventNRCallback);
      }.bind(this));

      setTimeout(function() {
        this.setState({
          events: events, events_not_replied: events_not_replied
        });
        console.log('events updated');
      }.bind(this), 3000); 
    },
    render: function () {
        var event_manager_info = <h5>Event Listing Info</h5>
        var rows = this.addEventRows(this.state.events);
        var no_reply_rows = this.addEventRows(this.state.events_not_replied);
        return (
              <div className="container">
                <div class="row">
                  {event_manager_info}
                  <h1>Attending Events</h1>
                  {rows}
                  <h1>Event Invites</h1>
                  {no_reply_rows}
                </div>
              </div>
        );
    }
});
window.EventManager = EventManager;
module.exports = EventManager;

var Event = require("./event.js.jsx");
var EventManager = React.createClass({
    getInitialState: function(){
      return {
        events:{},
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
    fetchEvents: function(user_id){
      FB.api(
          "/"+user_id+"/events",
          function (response) {
            if (response && !response.error) {
              /* handle the result */
              //this.setState({events: response.data});
              console.log(response);
            }else{
              console.log(response);
            }
          }
      );
    },
    componentDidMount: function() {
      /* make the API call */
      var facebook_user_id = "me"; //replace with Parse.User.facebookUserId later
      this.fbEnsureInit(function(){this.fetchEvents(facebook_user_id)}.bind(this));;
    },
    getInitialState: function() {
      return {classes: "inactive",link: "#event_manager-link"}
    },
    render: function () {
        var event_manager_info = <h5>Event Manager Info</h5>
        var rows = [];
        if(this.state.events){
          this.state.events.forEach(function(e){
            console.log(e);
            //rows.push(<Event id= e.id />)
          });
        }
        return (
              <div className="col-6-md">
                {event_manager_info}
                {rows}
              </div>
        );
    }
});
window.EventManager = EventManager;
module.exports = EventManager;

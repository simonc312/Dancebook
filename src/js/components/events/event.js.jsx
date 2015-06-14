var Event = React.createClass({
    componentDidMount: function(){
      if(this.props.id){
        FB.api(
          "/{this.props.id}",
          function(response){
            console.log(response);
        });
      }
    },
    getInitialState: function() {
      return {classes: "inactive",link: "#event-link"}
    },
    handleClick: function(){
      this.setState({classes: "active"});
    },
    render: function () {
        var event_cover = <img src={this.state.link} />
        var event_info = <h5>Event Info</h5>
        return (
              <div className="col-6-md">
                {event_cover}
                {event_info}
              </div>
        );
    }
});
window.Event = Event;
module.exports = Event;
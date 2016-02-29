var React = require('react');
var TrekStore = require('../../stores/trek_store');
var ApiActions = require('../../actions/api_actions');

var TrekDetail = React.createClass({
  getInitialState: function () {
    return { trek: TrekStore.find(parseInt(this.props.params.trekId)) };
  },

  _onChange: function () {
    this.setState(this.getStateFromStore());
  },

  getStateFromStore: function functionName() {
    return this.getStateFromStore();
  },

  componentWillReceiveProps: function (newProps) {
    ApiUtil.requestTreksById(parseInt(newProps.params.trekId));
  },

  componentDidMount: function() {
    this.listenerToken = TrekStore.addListener(this._onChange);
    TrekActions.requestTreksById(this.props.params.trekId);
  },

  componentWillUnmount: function () {
    this.listenerToken.remove();
  },

  _onChange: function () {
    this.setState({trek: this.getStateFromStore()});
  },

  render: function () {
      if(this.state.trek === undefined) { return <div></div>; }

      return(
        <div>
          <div className="trek-detail-pane">
            <div className="detail">
              // <img src={this.state.trek.image_url} />
              {['title', 'description', 'start_elv', 'peak_elv', 'elv_measure', 'duration', 'length', 'length_measure'].map(function (attr) {
                return <p key={attr}>{attr}: {this.state.trek[attr]}</p>;
              }.bind(this))}
            </div>
          </div>

          {this.props.children}

        </div>
      );
    }
  });

module.exports = TrekDetail;

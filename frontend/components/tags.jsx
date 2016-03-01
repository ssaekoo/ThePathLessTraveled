var React = require('react');
var ApiUtil = require('../util/apiUtil.js');
var LinkedStateMixin = require('react-addons-linked-state-mixin');

module.exports = React.createClass({
  mixins: [LinkedStateMixin],

  getInitialState: function(){
    return {
      tag: this.props.tag.tag_name,
      filter: false,
    };
  },

  handleEdit: function(){
    if (this.state.editing) {
      this.setState({
        display: this.props.goal.title,
        editing: false
      })

    } else {
      this.setState({
        display: (
          <div>
            
          </div>
        ),
        editing: true
      })
    }
  },

  render: function() {
    var that = this;
    var button2Class = this.state.editing ? 'button icon remove' : 'button icon edit';
    var button3Callback = this.state.editing ? that.confirmChanges : that.handleComplete;
    var button2Text = this.state.editing ? 'Cancel' : 'Edit';
    var button3Text = this.state.editing ? 'Confirm' : 'Complete';

    return (<div>
      {this.state.display}
        <div>
        <button className= 'button icon trash' onClick={that.handleDestroy}>Delete</button>
        <button className= {button2Class} onClick={that.handleEdit}>{button2Text}</button>
        <button className= "button icon approve" onClick={button3Callback}>{button3Text}</button>
        </div>
      </div>)
    }
});

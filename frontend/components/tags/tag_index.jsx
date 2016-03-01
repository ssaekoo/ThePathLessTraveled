var React = require('react');
var ApiUtil = require('../util/apiUtil.js');
var LinkedStateMixin = require('react-addons-linked-state-mixin');

module.exports = React.createClass({
  mixins: [LinkedStateMixin],

  getInitialState: function(){
    var myTagObjs = {};

    this.props.treks.forEach(function (trek) {
      trek.tags.forEach (function (tag) {
        myTagObjs[tag.id] = tag.tag_name;
      });
    });

    return {
      tag: myTagObjs,
      filter: false,
    };
  },

  handleFilter: function(){
    if (this.state.filter) {
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
    var button2Class = this.state.filter ? 'button icon remove' : 'button icon filter';

    return (<div>
      {this.state.display}
        <div>
        <button className= {button2Class} onClick={that.handleFilter}>{button2Text}</button>
        <button className= "button icon approve" onClick={button3Callback}>{button3Text}</button>
        </div>
      </div>)
    }
});

// var React = require('react');
// var TrekStore = require('../../stores/trek_store');
// var ApiUtil = require('../../util/api_util');
// var TrekIndexItem = require('./trek_item');
//
// module.exports = React.createClass({
//   getInitialState: function () {
//     return { treks: TrekStore.all() };
//   },
//
//   _onChange: function () {
//     this.setState({ treks: TrekStore.all() });
//   },
//
//   componentDidMount: function () {
//     this.trekListener = TrekStore.addListener(this._onChange);
//     ApiUtil.fetchAllTreks();
//   },
//
//   compomentWillUnmount: function () {
//     this.trekListener.remove();
//   },
//
//   render: function () {
//     return(
//       <div>
//         {this.state.treks.map(function (trek, index) {
//           return <TrekIndexItem key={index} trek={trek} />;
//         })}
//       </div>
//     );
//   }
// });

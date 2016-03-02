var React = require('react');

var TrekUtils = React.createClass({

  carouselInner: function(pictures){
    return pictures.map (function (picture){
      return (<div className="item active">
          <img src="img/" + {picture.url}>
      </div>)
    })
  };
});

module.exports = TrekUtils;

var React = require('react');
var PropTypes = React.PropTypes;

var CarouselItem = React.createClass({
  render: function() {
    var that = this;
    var carouselIndicators = []
    var carouselInner = this.props.trek.trek_pics.map (function (picture, idx){
        var pictureClass = "item";

        if (idx === 0){
          carouselIndicators.push (<li key={picture.id} data-target="#slider" data-slide-to="0" className="active"></li>);
          pictureClass = "item active";
        } else {
          carouselIndicators.push (<li key={picture.id} data-target="#slider" data-slide-to={idx}></li>);
        }

        return (
            <div key={that.props.trek.title + picture.id} className={pictureClass}>
                <img src={"http://res.cloudinary.com/stephensaekoo/image/upload/" + picture.url} />
            </div>
        );
    })

    return(
      <div>{carouselInner}</div>
    )
  }

});

window.CarouselItem = CarouselItem;
module.exports = CarouselItem;

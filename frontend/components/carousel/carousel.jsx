var React = require('react');
var PropTypes = React.PropTypes;

var Carousel = React.createClass({
  showDetail: function (id) {
    this.history.pushState(null, '/treks/' + id);
  },

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
      <section id={this.props.trek.id} className="carousel slide search-page-image" data-interval="false">
        <div onClick={this.showDetail.bind(null, this.props.trek.id)} className="carousel-inner">
          {carouselInner}
        </div>

        <a id="carousel-controller" className="left carousel-control" href={'#' + this.props.trek.id} role="button" data-slide="prev">
            <span className="glyphicon glyphicon-chevron-left"></span>
        </a>
        <a id="carousel-controller" className="right carousel-control" href={'#' + this.props.trek.id} role="button" data-slide="next">
            <span className="glyphicon glyphicon-chevron-right"></span>
        </a>
      </section>
    );
  }

});

module.exports = Carousel;

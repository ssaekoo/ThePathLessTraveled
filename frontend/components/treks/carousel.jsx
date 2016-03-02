var React = require('react');

var TrekUtil = React.createClass({
    createSlider: function() {
      var carouselIndicators = [];

      var carouselInner = [];
      if (this.props.trek.trek_pics !== undefined){
        carouselInner = this.props.trek_pics.map (function (picture, idx){
            var pictureClass = "item";

            if (idx === 0){
              carouselIndicators.push (<li data-target="#slider" data-slide-to="0" className="active"></li>);
              var pictureClass = "item active";
            } else {
              carouselIndicators.push (<li data-target="#slider" data-slide-to={idx}></li>);
            }

            return (
                <div className={pictureClass}>
                    <img src={"/assets/" + picture.url} />
                </div>
            )
        })
      };

      return (
        <section id="slider" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            {carouselInner}
          </div>

          <a className="left carousel-control" href="#slider" role="button" data-slide="prev">
              <span className="glyphicon glyphicon-chevron-left"></span>
          </a>
          <a className="right carousel-control" href="#slider" role="button" data-slide="next">
              <span className="glyphicon glyphicon-chevron-right"></span>
          </a>
        </section>
      )
    },

  render: function(){
    {createSlider}
  }
});


// <ol className="carousel-indicators">
//   {carouselIndicators}
// </ol>

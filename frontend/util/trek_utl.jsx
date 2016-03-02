var TrekUtil = React.createClass({
    createSlider: function(trek) {

      if (this.state.trek.trek_pics !== undefined){
        carouselInner = this.state.trek.trek_pics.map (function (picture, idx){
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

          <ol className="carousel-indicators">
            {carouselIndicators}
          </ol>
        </section>
      )
    }
});

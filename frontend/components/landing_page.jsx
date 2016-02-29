var React = require('react');

var LandingPage = React.createClass({

  render: function() {
    return (
      <div>
        <section id="parallax" className="parallax welcome-page">
          <div className="row">

            <div className="container container-custom text-center landing-welcome">
              <h1 className="welcome logo">The Path Less Traveled</h1>
              <h4 className="welcome tagline">Wander. Explore. Discover.</h4>
            </div>
          </div>
        </section>
        <section id="slider-landing" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">

                <div className="item active">
                    <img src={"/assets/slider_0.jpg"}/>
                </div>

                <div className="item">
                    <img src={"/assets/slider_1.jpg"}/>
                </div>

                <div className="item">
                    <img src={"/assets/slider_2.jpg"}/>
                </div>

                <div className="item">
                    <img src={"/assets/slider_3.jpg"}/>
                </div>

            </div>


            <a className="left carousel-control" href="#slider" role="button" data-slide="prev">
                <span className="glyphicon glyphicon-chevron-left"></span>
            </a>
            <a className="right carousel-control" href="#slider" role="button" data-slide="next">
                <span className="glyphicon glyphicon-chevron-right"></span>
            </a>

            <ol className="carousel-indicators">
                <li data-target="#slider" data-slide-to="0" className="active"></li>
                <li data-target="#slider" data-slide-to="1"></li>
                <li data-target="#slider" data-slide-to="2"></li>
                <li data-target="#slider" data-slide-to="3"></li>
            </ol>

        </section>
      </div>
    );
  }
});

module.exports = LandingPage;

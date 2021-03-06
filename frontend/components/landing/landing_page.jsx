var React = require('react');
var TrekModal = require('../treks/trek_modal');

module.exports = React.createClass({
  componentWillMount: function() {
    document.body.style.backgroundImage = "url('http://res.cloudinary.com/stephensaekoo/image/upload/west-coast-trail.jpg')";
    var selection = document.getElementById("nav");
    selection.style.backgroundColor = 'transparent';
    selection.style.borderBottom = 'none';
  },

  componentWillUnmount: function() {
    document.body.style.backgroundImage = null;
    document.body.style.backgroundColor = 'white';
    var selection = document.getElementById("nav");
    selection.style.backgroundColor = '#F5F5F5';
    selection.style.borderBottom = '1px solid black';
  },

  render: function() {
    return (
      <div className="landing-page">
        <section id="parallax" className="parallax welcome-page">
          <div className="row">
            <div className="container container-custom text-center landing-welcome">
              <h1 className="welcome logo">The Path Less Traveled</h1>
              <h4 className="welcome tagline">Wander. Explore. Discover.</h4>
              <a className="btn btn-danger search-btn" href="/#/search">Begin Exploring</a>
            </div>
          </div>
        </section>
        {TrekModal}
      </div>
    );
  }
});

var React = require('react');



var LandingPage = React.createClass({

  render: function() {
    // var headerStyle={
    //   margin: '0 auto',
    //   width: '100%',
    //   backgroundImage: "url(https://a2.muscache.com/airbnb/static/landing_pages/pretzel/stills/croatia-887a17b9994536f0d95bfd3f43ed664c.jpg)"
    // };

    // debugger;
    return (
      <section id="intro">
        <div className="content-wrapper">
          <div className="welcome logo"> <center>The Path Less Traveled</center>
          </div>
          <div className="welcome tagline"><center>Wander. Explore. Discover.</center>
          </div>
        </div>
      </section>
    );
  }
});

module.exports = LandingPage;



// <div className="jumbotron jumbotron-landing" id="landing-page">
//   {/iPad|iPhone|iPod/.test(navigator.platform) ? "" : backgroundVideoDiv }
//   <div className="container container-custom text-center">
//     <h1>WELCOME HOME</h1>
//     <h4>Rent unique places to stay from local hosts in 190+ countries.</h4>
//   </div>
//   <LandingSearchBar history={this.props.history}/>
// </div>

var React = require('react');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var Modal = require('react-modal');
var ApiActions = require('../../actions/api_actions');

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

var ReviewModal = React.createClass({

  getInitialState: function() {
    return { modalIsOpen: false,
            trekId: undefined,
            rating: 0
    };
  },

  componentWillReceiveProps: function(newProps){
    this.setState({modalIsOpen: newProps.show,
      trekId: newProps.trekId
    });
  },

  closeModal: function() {
    this.setState({modalIsOpen: false});
  },

  setRating: function(num) {
    this.setState({rating: num})
  },

  render: function() {
    return (
      <div>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={customStyles} >
          <div className="trek-create-container">
            <h3 className="text-center">Create a Review</h3>
            <form className="form-horizontal" role="form">
              <div className="form-group">
                <div className="col-sm-10">
                  <input type="text" className="form-control"
                    id="trekTitle" placeholder="Title"/>
                </div>
              </div>

              <div className="form-group">
                <div className="col-sm-10">
                  <input type="text" className="form-control"
                    id="trekRating" placeholder="Rating 1-5"/>
                </div>
              </div>

              <div className="form-group">
                <div className="col-sm-10">
                    <textarea className="form-control"
                        id="trekDescription" placeholder="Description"/>
                </div>
              </div>

              <div className="form-group">
                <div className="col-sm-offset-2 col-sm-10">
                  <button type="submit" className="btn btn-primary">create</button>
                  <button onClick={this.closeModal} className="btn btn-danger">cancel</button>
                </div>
              </div>
            </form>
          </div>
        </Modal>
      </div>
    );
  }
});

module.exports = ReviewModal;


// <form id="ratingsForm">
//   <div className="stars">
//       <input type="radio" name="star" className="star-1" id="star-1" />
//       <label className="star-1" for="star-1">1</label>
//       <input type="radio" name="star" className="star-2" id="star-2" />
//       <label className="star-2" for="star-2">2</label>
//       <input type="radio" name="star" className="star-3" id="star-3" />
//       <label className="star-3" for="star-3">3</label>
//       <input type="radio" name="star" className="star-4" id="star-4" />
//       <label className="star-4" for="star-4">4</label>
//       <input type="radio" name="star" className="star-5" id="star-5" />
//       <label className="star-5" for="star-5">5</label>
//       <span></span>
//   </div>
// </form>

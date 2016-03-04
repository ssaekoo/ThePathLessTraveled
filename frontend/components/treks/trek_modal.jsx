var React = require('react');
var Modal = require('react-modal');

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


var TrekModal = React.createClass({

  getInitialState: function() {
    return { modalIsOpen: false };
  },

  componentWillReceiveProps: function(newProps){
    this.setState({modalIsOpen: newProps.show});
  },

  closeModal: function() {
    this.setState({modalIsOpen: false});
  },

  render: function() {
    return (
      <div>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={customStyles} >

          <form className="form-horizontal" role="form">
            <div className="form-group">
              <label  className="col-sm-2 control-label"
                        for="inputEmail3">Email</label>
              <div className="col-sm-10">
                  <input type="email" className="form-control"
                  id="inputEmail3" placeholder="Email"/>
              </div>
            </div>
            <div className="form-group">
              <label className="col-sm-2 control-label"
                    for="inputPassword3" >Password</label>
              <div className="col-sm-10">
                  <input type="password" className="form-control"
                      id="inputPassword3" placeholder="Password"/>
              </div>
            </div>
            <div className="form-group">
              <div className="col-sm-offset-2 col-sm-10">
                <div className="checkbox">
                  <label>
                      <input type="checkbox"/> Remember me
                  </label>
                </div>
              </div>
            </div>
            <div className="form-group">
              <div className="col-sm-offset-2 col-sm-10">
                <button type="submit" className="btn btn-default">Sign in</button>
              </div>
            </div>
          </form>
          <button onClick={this.closeModal}>close</button>
        </Modal>
      </div>
    );
  }
});

module.exports = TrekModal;

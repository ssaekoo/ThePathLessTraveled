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


var TrekModal = React.createClass({

  getInitialState: function() {
    return { modalIsOpen: false, trekId: undefined
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

  render: function() {
    return (
      <div>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={customStyles} >
          <div className="trek-create-container">
            <h3 className="text-center">Create new Trek</h3>
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
                        id="trekDescription" placeholder="Description"/>
                </div>
              </div>

              <div className="form-group">
                <div className="col-sm-10">
                    <label className="col-sm-2 control-label"
                              for="trekLatLng">LatLng</label>
                    <input type="text" className="form-control"
                        id="trekLatitude" placeholder={this.state.modalLat}/>
                    <input type="text" className="form-control"
                        id="trekLongitude" placeholder={this.state.modalLng}/>
                </div>
              </div>

              <div className="form-group">
                <div className="col-sm-10">
                    <label className="col-sm-2 control-label"
                              for="trekAttributes">Attributes</label>
                    <input type="text" className="form-control"
                        id="trekStartElevation" placeholder="Start Elevation"/>
                    <input type="text" className="form-control"
                        id="trekPeakElevation" placeholder="Peak Elevation"/>
                    <input type="text" className="form-control"
                        id="trekElevationMeasure" placeholder="Elevation Measure"/>
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

module.exports = TrekModal;

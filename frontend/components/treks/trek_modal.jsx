var React = require('react');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var Modal = require('react-modal');
var ApiActions = require('../../actions/api_actions');
var MapTrekCreate = require('../maps/map_trek_create');

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
  }
};


var TrekModal = React.createClass({

  getInitialState: function() {
    return { modalIsOpen: false, modalLat: 0.0, modalLng: 0.0
    };
  },

  componentWillReceiveProps: function(newProps){
    this.setState({modalIsOpen: newProps.show,
      modalLng: newProps.modalLng,
      modalLat: newProps.modalLat
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
            <h3 className="trek-title">Create new Trek</h3>
            <form className="form-horizontal" role="form">
              <div className="form-group">
                    <input type="text" className="form-control trek-title"
                    placeholder="Title"/>
              </div>

              <div className="form-group">
                  <textarea className="form-control create-description" placeholder="Description"/>
              </div>

              <div className="form-group">
                <label className="control-label">Coordinates</label>
                <input type="text" className="form-control lat-lng"
                    id="trekLatitude" placeholder={this.state.modalLat} disabled/>
                <input type="text" className="form-control lat-lng"
                    id="trekLongitude" placeholder={this.state.modalLng} disabled/>
              </div>

              <div className="form-group">
                <label className="control-label">Elevation</label>
                <input type="text" className="form-control attributes"
                    id="trekStartElevation" placeholder="Start Elevation"/>
                <input type="text" className="form-control attributes"
                    id="trekPeakElevation" placeholder="Peak Elevation"/>
                <input type="text" className="form-control attributes"
                    id="trekElevationMeasure" placeholder="Elevation Measure"/>
              </div>

              <div className="form-group">
                <label className="control-label">Duration</label>
                <input type="text" className="form-control attributes"
                    id="trekStartElevation" placeholder="Duration"/>
                <input type="text" className="form-control attributes"
                    id="trekPeakElevation" placeholder="Duration Measure"/>
              </div>

              <div className="form-group">
                <label className="control-label">Length</label>
                <input type="text" className="form-control attributes"
                    id="trekElevationMeasure" placeholder="Distance"/>
                <input type="text" className="form-control attributes"
                    id="trekElevationMeasure" placeholder="Distance Measure"/>
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
// to readd back in <MapTrekCreate latitude={this.state.modalLat} longitude={this.state.modalLng}/>
module.exports = TrekModal;

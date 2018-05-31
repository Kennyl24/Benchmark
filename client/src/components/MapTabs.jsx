import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import MapContainer from './MapContainer.jsx';
// import MapTabs from './MapTabs.jsx';
// import DirectionsModal from './DirectionsModal.jsx';
import StreetViewPanormaWithAnOverlayView from './Test.jsx'

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
};

class MapTabs extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 'a',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange (value) {
    this.setState({
      value: value,
    });
  };

  render() {
    return (
      <Tabs
        value={this.state.value}
        onChange={this.handleChange}
      >
        <Tab label="Business Location" value="a">
          <div>
          <MapContainer/>
          </div>
        </Tab>
        <Tab label="Street View" value="b">
          <div>
         <StreetViewPanormaWithAnOverlayView/>
          </div>
        </Tab>
        <Tab label="Directions" value="c">
          <div>
          </div>
        </Tab>
      </Tabs>
    );
  }
}

export default MapTabs;
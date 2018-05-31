import React from 'react';
// import { GoogleApiWrapper } from 'google-maps-react';
// import Map from './Map.jsx';
import config from '../../../config.js';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import StreetViewPanormaWithAnOverlayView from './Test.jsx'

class MapContainer extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      showInfoWindow: false,
      activeMarker: {},
      lat: null,
      lng: null,
    }
    this.onMarkerClicked = this.onMarkerClicked.bind(this);
    this.id = 0;
    this.testLocation = this.testLocation.bind(this);
    this.testError = this.testError.bind(this);
  }
  componentDidMount() {
    const options = {
      enableHighAccuracy: false,
      timeout: 8000,
      maximumAge: 0,
    };
    this.id = navigator.geolocation.getCurrentPosition(this.testLocation, this.testError , options);
  }
  testLocation(pos){
    console.log('hello');
    const crd = pos.coords;
    this.setState({
      lat: crd.latitude,
      lng: crd.longitude,
    })
    const thisLat = crd.latitude;
    const thisLon = crd.longitude;
    console.log(crd)
  }
  testError(){
    console.log('goodbye')
  }

  onMarkerClicked(props, marker, e){
    this.setState({
      showInfoWindow: true,
      activeMarker: marker,
    });
  }
  render() {
    return (
    <div>
       <Map
       style={{
        width: '100%',
        height: '65vh',
       }}
          google={this.props.google}
          // style={style}
          initialCenter={{
            lat: 38.295,
            lng: -122.286865
          }}
          zoom={15}
          // onClick={this.onMapClicked}
       >
       <Marker
    title={'Napa Valley Transmissions'}
    name={'NVT'}
    onClick={this.onMarkerClicked}
    // onMouseover={this.onMarkerClicked}
    position={{lat: 38.293446, lng:-122.27837}} />
    <InfoWindow
    onClick={this.onMarkerClicked}
    visible={this.state.showInfoWindow}
      marker={this.state.activeMarker}>
            <div style={{textAlign:'center'}}>
            <h2>
              Napa Valley Transmissions
             </h2> 
              <br/>
              536 Soscol Avenue #3
              <br/>
              Napa, Ca 94559
              <br/>
              707-224-5898
            </div>
    </InfoWindow>
    <Marker 
        name={'Current location'} 
        position={{lat: `${this.state.lat}`, lng: `${this.state.lng}`}}/>
    </Map>
    </div>
  );
}
};
// view location of business, get directions 
// if get directions, change options 
// options = enter address or get directions from current location
export default GoogleApiWrapper({
  apiKey: config.GOOGLE_MAPS_API_KEY,
})(MapContainer);
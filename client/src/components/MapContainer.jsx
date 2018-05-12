import React from 'react';
import { GoogleApiWrapper } from 'google-maps-react';
import Map from './Map.jsx';
import config from '../../../config.js';

const MapContainer = (props) => {
  return (
    <div>
      <Map
      initialCenter={{
        lat: 40.854885,
        lng: -88.081807
      }}
        google={props.google}
        // initialCenter={props.initialLocation}
        zoom={13}
      />
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: config.GOOGLE_MAPS_API_KEY,
  libraries: ['places'],
})(MapContainer);
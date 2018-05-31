import React from "react";
import { compose, withProps } from "recompose";

import { withScriptjs, withGoogleMap, GoogleMap, StreetViewPanorama} from "react-google-maps";

const StreetViewPanormaWithAnOverlayView = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `600px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
    center: { lat: 38.293440, lng: -122.2781 },
  }),
  withScriptjs,
  withGoogleMap
)(props =>
  <GoogleMap defaultZoom={6} defaultCenter={props.center}>
    <StreetViewPanorama defaultPosition={props.center} visible>
    </StreetViewPanorama>
  </GoogleMap>
);

<StreetViewPanormaWithAnOverlayView />

export default StreetViewPanormaWithAnOverlayView;
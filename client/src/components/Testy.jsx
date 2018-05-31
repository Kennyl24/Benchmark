// import React from "react";
// import { compose, withProps } from "recompose";
// import { withScriptjs, withGoogleMap, DirectionsRenderer, GoogleMap, Marker, InfoWindow } from "react-google-maps";

// const MyMapComponent = compose(
//   withProps({
//     googleMapURL: "https://maps.googleapis.com/maps/api/js?AIzaSyCT-c14I-711ZPQcD5bHOU4Rzbfb9MfWkwv=3.exp&libraries=geometry,drawing,places",
//     loadingElement: <div style={{ height: `100%` }} />,
//     containerElement: <div style={{ height: `400px` }} />,
//     mapElement: <div style={{ height: `100%` }} />,
//   }),
//   withScriptjs,
//   withGoogleMap
// )((props) =>
//   <GoogleMap
//     defaultZoom={15}
//     defaultCenter={{ lat: 38.293446, lng:-122.27837 }}
//   >
//     {props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} onClick={props.onMarkerClick} />}
//     <Marker
//   position={{lat: 38.293446, lng:-122.27837}}
//   onClick={props.onToggleOpen}
// >
// <InfoWindow onCloseClick={props.onToggleOpen}>
//         <div>
//           Napa Valley Transmissions
//         </div>
//       </InfoWindow>
// </Marker>
//   </GoogleMap>
// )

// class MyFancyComponent extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isMarkerShown:false
//     }
//     this.delayedShowMarker=this.delayedShowMarker.bind(this);
//     this.handleMarkerClick=this.handleMarkerClick.bind(this);
//   }

//   componentDidMount() {
//     this.delayedShowMarker();
//   }

//   delayedShowMarker () {
//     setTimeout(() => {
//       this.setState({ isMarkerShown: true })
//     }, 3000)
//   }

//   handleMarkerClick () {
//     this.setState({ isMarkerShown: false })
//     this.delayedShowMarker()
//   }

//   render() {
//     return (
//       <MyMapComponent
//         isMarkerShown={this.state.isMarkerShown}
//         onMarkerClick={this.handleMarkerClick}
//       />
//     )
//   }
// }



// export default MyMapComponent;

// const { compose, withProps, lifecycle } = require("recompose");
// const {
//   withScriptjs,
//   withGoogleMap,
//   GoogleMap,
//   DirectionsRenderer,
//   TrafficLayer,
// } = require("react-google-maps");

// const MapWithADirectionsRenderer = compose(
//   withProps({
//     googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyCT-c14I-711ZPQcD5bHOU4Rzbfb9MfWkw&v=3.exp&libraries=geometry,drawing,places",
//     loadingElement: <div style={{ height: `100%` }} />,
//     containerElement: <div style={{ height: `400px` }} />,
//     mapElement: <div style={{ height: `100%` }} />,
//   }),
//   withScriptjs,
//   withGoogleMap,
//   lifecycle({
//     componentDidMount() {
//       const DirectionsService = new google.maps.DirectionsService();

//       DirectionsService.route({
//         origin: new google.maps.LatLng(38.326003, -122.330725),
//         destination: new google.maps.LatLng(38.293446, -122.27837),
//         travelMode: google.maps.TravelMode.DRIVING,
//       }, (result, status) => {
//         if (status === google.maps.DirectionsStatus.OK) {
//           this.setState({
//             directions: result,
//           });
//         } else {
//           console.error(`error fetching directions ${result}`);
//         }
//       });
//     }
//   })
// )(props =>
//   <GoogleMap
//     defaultZoom={7}
//     defaultCenter={new google.maps.LatLng(41.8507300, -87.6512600)}
    
//   >
//   <TrafficLayer autoUpdate />
//     {props.directions && <DirectionsRenderer directions={props.directions} />}
//   </GoogleMap>
// );

// <MapWithADirectionsRenderer />

// export default MapWithADirectionsRenderer;

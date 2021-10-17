import React from "react";
import { GoogleMap, withScriptjs,withGoogleMap } from "react-google-maps";

const MapApi = ()=>{
  return(
    <GoogleMap defaultZoom={10} defaultCenter={{lat:27.2046 ,lng: 77.4977}}/>
  )
}
const WrappedMap = withScriptjs(withGoogleMap(MapApi))
export default function MapApI(){

  return(
   
    <WrappedMap googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyCs0MKVq7ZJyaA1nM1MoDpxxWVWiCZZPA4`}
    loadingElement={<div style={{height:'100%'}}></div>} 
    containerElement={<div style={{height:'100%'}}></div>} 
    mapElement={<div style={{height:'100%'}}></div>} 
    
    />

  )
};
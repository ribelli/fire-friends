// this file have 2 parts of code: first for SVG maps, second for google maps (non-active)
//{"arcs":[[-96,-513,575,-518,576,-510,-428,-509,-327,-555,-497]],
//           "type":"Polygon",
//           "properties":{
//             "NAME":"Ukraine",
// first part
import React, { memo } from "react";
import { ComposableMap, Geographies, Geography, ZoomableGroup, Marker } from "react-simple-maps";
import * as ruMap from '../../data/world-map/ru/world-map.json';
import * as enMap from '../../data/world-map/en/world-map.json';
import './index.scss';
// const geoUrl =
//     "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const MARKERS = [
    { markerOffset: -15, name: "Moscow", coordinates: [41.3816, 56.6037]},
    { markerOffset: -15, name: "Buenos Aires", coordinates: [-58.3816, -34.6037]},
    { markerOffset: 25, name: "Brasilia", coordinates: [-47.8825, -15.7942] },
    { markerOffset: -15, name: "Caracas", coordinates: [-66.9036, 10.4806] }
];

const WorldMap = ({ currentLanguage, setTooltipContent }) => {
    let map = (currentLanguage === 'ru') ? ruMap : enMap; // it's not good practice, please, fix that
    let geo3 = map.default;
    return (
        <>
            <ComposableMap data-tip=""
                           className="common-map"
                           projectionConfig={{ scale: 230 }}>
                <ZoomableGroup zoom={1}>
                    <Geographies geography={geo3}>
                        {({ geographies }) =>
                            geographies.map(geo =>
                                <Geography key={geo.rsmKey}
                                           geography={geo}
                                           onMouseEnter={() => {
                                               const { NAME } = geo.properties;
                                               setTooltipContent(`${NAME}`);
                                           }}
                                           onMouseLeave={() => {
                                               setTooltipContent("");
                                           }}
                                           style={{
                                               default: {
                                                   fill: "#D6D6DA",
                                                   outline: "none"
                                               },
                                               hover: {
                                                   fill: "#00e3a6",
                                                   outline: "none"
                                               },
                                               pressed: {
                                                   fill: "#00a377",
                                                   outline: "none"
                                               }
                                           }}/>
                                           )}
                    </Geographies>
                    {MARKERS.map(({ name, coordinates, markerOffset }) => (
                        <Marker key={name} className="marker" coordinates={coordinates} onClick={() => {
                            console.log(name);
                        }}>
                            <circle r={8} fill="rgb(132, 94, 194)" stroke="#fff" strokeWidth={2} />
                            <text textAnchor="middle"
                                y={markerOffset}
                                style={{ fill: "#5D5A6D"}}>
                                {name}
                            </text>
                        </Marker>
                    ))}
                </ZoomableGroup>
            </ComposableMap>
        </>
    )
};

export default memo(WorldMap);


// second part

// import React, { Component } from 'react';
// import GoogleMapReact from 'google-map-react';
//
// const AnyReactComponent = ({ text }) => <div>{text}</div>;
// // google maps
// class UsersMap extends Component {
//     static defaultProps = {
//         center: {
//             lat: 59.95,
//             lng: 30.33
//         },
//         zoom: 11
//     };
//
//     render() {
//         return (
//             // Important! Always set the container height explicitly
//             <div style={{ height: '100vh', width: '100%' }}>
//                 <GoogleMapReact
//                     defaultCenter={this.props.center}
//                     defaultZoom={this.props.zoom}
//                 >
//                     <AnyReactComponent
//                         lat={59.955413}
//                         lng={30.337844}
//                         text="My Marker"
//                     />
//                 </GoogleMapReact>
//             </div>
//         );
//     }
// }
//
// export default UsersMap;

import React from "react";
import {
	ComposableMap,
	Geographies,
	Geography,
	Annotation
} from "react-simple-maps";

const Map = () => {
	return (
		<ComposableMap
			projection="geoAzimuthalEqualArea"
			projectionConfig={{
				rotate: [-10.0, -52.0, 0],
				center: [-5, -7], 
				scale: 950
			}}
			style={{width:"100%", height:"100%"}}
		>
			<Geographies
				geography="/features.json"
				fill="#ad06df"
				stroke="#FFFFFF"
				strokeWidth={0.5}
			>
				{({ geographies }) =>
					geographies.map((geo) => (
						<Geography key={geo.rsmKey} geography={geo} />
					))
				}
			</Geographies>
			<Annotation
				subject={[30.5238, 50.4501]} 
				dx={-90}
				dy={-30}
				connectorProps={{
					stroke: "white",
					strokeWidth: 2,
					strokeLinecap: "round"
				}}
			>
				<text x="-8" textAnchor="end" alignmentBaseline="middle" fill="white">
					{"Kyiv"} 
				</text>
			</Annotation>
		</ComposableMap>
	);
};

export default Map;

import Tooltip from '@mui/material/Tooltip';
import { useState } from 'react';
import { ComposableMap, Geographies, Geography, ZoomableGroup, Marker } from "react-simple-maps";
import MapData from "./maps.json"

const Map = () => {

    const [content, setContent] = useState("")
    const [zoom, setZoom] = useState(1)

    // The Map file with natural earth data
    // const geoUrl = "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";

    const handleZoomIn = () => {
        !(zoom === 5) ? setZoom(prev => prev + 1): setZoom(zoom)
    }
    const handleZoomOut = () => {
        !(zoom === 1) ? setZoom(prev => prev - 1) : setZoom(zoom)
    }

    const markers = [
        
        {
            markerOffset: -15,
            name: "Nigeria",
            coords: [9.081999, 8.675277]
        },
        { markerOffset: -15, name: "La Paz", coords: [-68.1193, -16.4897] },
        { markerOffset: 25, name: "Brasilia", coords: [-47.8825, -15.7942] },
        { markerOffset: 25, name: "Santiago", coords: [-70.6693, -33.4489] },
    ]

    const handleTooltip = (name: string) => {
        setContent(name)
        console.log(content);
        
    }

    return (
        <div className="relative">
            <div className="absolute left-5 bottom-1/2 flex flex-col items-center gap-3">
                <button className='text-white font-semibold bg-black px-1 text-xl' onClick={handleZoomIn}>+</button>
                <button className='text-white font-semibold bg-black px-1.5 text-xl' onClick={handleZoomOut}>-</button>
            </div>
            <ComposableMap>
                <ZoomableGroup center={[0, 0]} zoom={zoom}>
                    <Geographies geography={MapData}>
                        {({ geographies }) =>
                            geographies.map((geo) => (
                                <Tooltip key={geo.rsmKey} title={content}>
                                    <Geography geography={geo} onMouseOver={() => handleTooltip(geo.properties.name)} className="fill-gray-600 h-10 hover:fill-red-300" />
                                </Tooltip>
                            ))
                        }
                    </Geographies>
                    {
                        markers.map(({ name, coords }) => (
                            <Marker key={name} coordinates={coords}>
                                <Tooltip title={name} placement='top'>
                                    <circle r={10} fill="#FF6363" stroke="#fff" strokeWidth={1.5} />
                                </Tooltip>
                            </Marker>
                        ))
                    }
                </ZoomableGroup>
            </ComposableMap>
        </div>
    )
}

export default Map


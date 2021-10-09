import { useState , useEffect } from 'react';
import ReactMapGL , { Marker , Popup } from 'react-map-gl';
import { logFile } from '../API/Api';
import RoomTwoToneIcon from '@mui/icons-material/RoomTwoTone';

function Map() {
    const [logs,setLogs] = useState([])
    const [viewport, setViewport] = useState({
        width : 800,
        height : 500,
        latitude: 37.7577,
        longitude: -122.4376,
        zoom: 8
    });

    useEffect(() => {
        (async ()=>{
            const all_logs = await logFile()
            setLogs(all_logs)
            console.log(all_logs)
        })();
    }, [])

    return (
        <ReactMapGL
            {...viewport}
            mapStyle = "mapbox://styles/prime-mapbox/ckujht6pq8t6518qj19vbxfcb"
            mapboxApiAccessToken = {"pk.eyJ1IjoicHJpbWUtbWFwYm94IiwiYSI6ImNrdWpmZGl5MDBpeXgydnA2eDd6MDN4ejAifQ.QCRlFOLxQgxtH0TyX_2mfg"}
            onViewportChange={(viewport) => setViewport(viewport)}
        >
        {
            logs.map(log =>(
                <div>
                <Marker
                    key = {log._id} 
                    latitude={log.latitude} longitude={log.longitude} offsetLeft={-20} offsetTop={-10}>
                    <RoomTwoToneIcon style={{fontSize : viewport.zoom*5 , color : "red"}}/>
                </Marker>
                <Popup
                    key = {log._id} 
                    key = {log._id}
                    latitude={log.latitude}
                    longitude = {log.longitude}
                    closeButton={true}
                    closeOnClick={false}
                    anchor = "left"
                >
                    <div>
                        <p>Here comes the Info</p>
                    </div>
                </Popup></div>
            ))
        }

        </ReactMapGL>
    );

    // return (<div><h1>Hello</h1></div>)
}

export default Map
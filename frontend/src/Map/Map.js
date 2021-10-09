import { useState , useEffect } from 'react';
import ReactMapGL , { Marker , Popup } from 'react-map-gl';
import { logFile } from '../API/Api';
import RoomTwoToneIcon from '@mui/icons-material/RoomTwoTone';
import "./css/Map.css"


function Map() {
    const [tracking,setTracking] = useState(true)
    const [loggedInUser,setLoggedInUser] = useState("")
    const [load,setLoad] = useState(true)
    const [selectedId,setSelectedId] = useState(null)
    const [currPosition,setCurrPosition] = useState({})
    const [logs,setLogs] = useState([])
    const [viewport, setViewport] = useState({
        width : 800,
        height : 500,
        latitude: 21,
        longitude: 32,
        zoom: 8
    });
    useEffect(() => {
        (async ()=>{
            const all_logs = await logFile()
            setLogs(all_logs)
            console.log(all_logs)
            
        })();
    }, [])

    function caller(){
        var id

        const success = (position) =>{
            console.log(position)
            if(tracking==true)
                {setCurrPosition({
                    latitude : position.coords.latitude,
                    longitude : position.coords.longitude,
                })}
            else    {navigator.geolocation.clearWatch(id);}
            console.log(position.coords.latitude)
            console.log("#############################3")
        }

        const error = (err) =>{
            console.log(err)
        }
        
        id = navigator.geolocation.watchPosition(success,error,{
            enableHighAccuracy : true,
            timeout: 5000,
            maximumAge: 0
        })
    }

    const handleSelected = (post_id) =>{
        setSelectedId(post_id)
    }

    const clickHandler = () => {
        setTracking(false)
    }
    
    return (
        <>
        <ReactMapGL
            {...viewport}
            mapStyle = "mapbox://styles/prime-mapbox/ckujht6pq8t6518qj19vbxfcb"
            mapboxApiAccessToken = {"pk.eyJ1IjoicHJpbWUtbWFwYm94IiwiYSI6ImNrdWpmZGl5MDBpeXgydnA2eDd6MDN4ejAifQ.QCRlFOLxQgxtH0TyX_2mfg"}
            onViewportChange={(viewport) => setViewport(viewport)}
        >
        {
            logs.map((log,index) =>(
                <div>
                <Marker
                    key = {index} 
                    latitude={log.latitude} longitude={log.longitude} offsetLeft={-20} offsetTop={-10}>
                    <RoomTwoToneIcon
                    onClick = {()=>handleSelected(log._id)} 
                    style={{fontSize : viewport.zoom*5 , color : log.username == loggedInUser ? "blue" : "red"}}/>
                </Marker>
                { log._id === selectedId && 
                <Popup
                    // key = {index}
                    // key = {log._id} 
                    latitude={log.latitude}
                    longitude = {log.longitude}
                    closeButton={true}
                    closeOnClick={false}
                    anchor = "left"
                    onClose = {()=>{setSelectedId(null)}}
                >
                    <div className="card">
                        <label>Title : </label>
                        <h4>{log.title}</h4>
                        <label>Description : </label>
                        <p>{log.description}</p>
                        <label>Story</label>
                        <div></div>
                        <label>Visit Date</label>
                        <p>{log.visitDate}</p>
                        <label>Posted By </label>
                        <p>{log.username}</p>
                    </div>
                </Popup>
                }
                </div>
            ))
        }
        

        </ReactMapGL>
        <button className="btn" onClick={()=>caller()}>Curr Location</button>
        <button className="btn" onClick={()=>clickHandler}>Click Here To Stop Tracking</button>
        {
            <div className="location-cor">
                <p>{currPosition.latitude}</p>
                <p>{currPosition.longitude}</p>
            </div>
        }
        </>
    );

    // return (<div><h1>Hello</h1></div>)
}

export default Map
import React, {useEffect, useState} from 'react';
// import droneIcon from '@/icons/drone.png'
const DroneMap = () => {
    const [longitude,setLongitude] = useState(116.611279);
    const [latitude,setLatitude] = useState(40.113257);
    const [map,setMap] = useState()
    useEffect(() => {
        setMap(() => {
            return new AMap.Map('container', {
                resizeEnable: true,
                zoom: 13,
                center: [116.611279,40.113257]
            })
        })
    },[])
    const addMarker = ()=> {
        let marker = new AMap.Marker({
            // icon: droneIcon,
            position: [119.296315,26.088775],
            offset: new AMap.Pixel(-13, -30)
        });
        marker.setMap(map);
    }

    return (
        <div>
            <div id={'container'} style={styles}/>
        </div>
    );
};
const styles = {
    height:'95vh',
    width:'100vw',
    top:'6vh',
    right:'1px',
    position:'fixed',
    zIndex:'-1',
}
export default DroneMap;

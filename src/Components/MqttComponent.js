import React, { useEffect, useState } from 'react'
import mqtt from 'mqtt';
import { CheckCircleOutlined } from '@ant-design/icons';

const url = 'ws://47.113.150.172:8083/mqtt'
const options = {
  clean: true,
  connectTimeout: 300,
  clientId: `react_mqtt_client_${new Date().getTime()}`,
  username: '',
  password: '',
}
export default function MqttComponent() {
  const [client, setClient] = useState(null);
  const [droneStatus, setDroneStatus] = useState({
    battery_life:'',
    velocity_x:'',
    velocity_y:'',
    velocity_z:'',
  })
  useEffect(()=>{
    const client = mqtt.connect(url,options);
    
  })
  return (
    <div>
  
    </div>
  )
}

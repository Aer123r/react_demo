import React, { useEffect, useState } from 'react'
import mqtt from 'mqtt';
import { CheckCircleOutlined } from '@ant-design/icons';
import { Button } from 'antd';
// const url = 'ws://broker.emqx.io:8083/mqtt'
const url = 'ws://192.168.43.241:8083/mqtt'
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
    battery_life: '',
    velocity_x:"",
    velocity_y:"",
    velocity_z:"",
  })
  useEffect(() => {
    const client = mqtt.connect(url, options);

    client.on('connect', function () {
      console.log('Connected')

      client.subscribe('battery_life', function (err) {
        if (!err) {}
      })

      client.subscribe('velocity_x', function (err) {
        if (!err) {}
      })
      client.subscribe('velocity_y', function (err) {
        if (!err) {}
      })
      client.subscribe('velocity_z', function (err) {
        if (!err) {}
      })
    });
    client.on('message', (topic, message) => {
      console.log(`Received ${message.toString()} on ${topic}`);
      if (topic === 'battery_life') {
        setDroneStatus(prevStatus => ({
          ...prevStatus,
          battery_life: message.toString()
        }))
      } else if (topic === 'velocity_x') {
        setDroneStatus(prevStatus => ({
          ...prevStatus,
          velocity_x: message.toString()
        }))
      } else if (topic === 'velocity_y') {
        setDroneStatus(prevStatus => ({
          ...prevStatus,
          velocity_y: message.toString()
        }))
      
      } else if (topic === 'velocity_z') {
        setDroneStatus(prevStatus => ({
          ...prevStatus,
          velocity_z  : message.toString()
        }))
      }
    });

    setClient(client);
    return () => {
      if (client) {
        client.end(true);
      }
    };
  }, [])
  const publishMessage = () => {
    if (mqttClient) {
      mqttClient.publish('my_topic', 'Hello from React!');
    }
  };
  return (
    <div>
      <div>无人机状态</div>
      <div>battery life:{droneStatus.battery_life}</div>
      <div>velocity x:{droneStatus.velocity_x}</div>
      <div>velocity y:{droneStatus.velocity_y}</div>
      <div>velocity z:{droneStatus.velocity_z}</div>
      <Button>aa</Button>
    </div>
  )
}

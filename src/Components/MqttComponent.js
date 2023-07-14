import React, { useEffect, useState } from 'react'
import mqtt from 'mqtt';
import { CheckCircleOutlined } from '@ant-design/icons';

// const url = 'ws://broker.emqx.io:8083/mqtt'
const url = 'ws://47.113.150.172:8083/mqtt'
const options = {
  clean: true,
  connectTimeout: 300,
  clientId: `react_mqtt_client_${new Date().getTime()}`,
  username: 'admin',
  password: '123456',
}
export default function MqttComponent() {
  const [client, setClient] = useState(null);
  const [img,setImg] = useState('');
  const [status,setStatus] = useState('---------')
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const client = mqtt.connect(url, options);

    client.on('connect', function () {
      console.log('Connected')

      client.subscribe('VR', function (err) {
        if (!err) {
          client.publish('VR', 'Hello mqtt')
        }
      })
      client.subscribe('Img', function (err) {
        if (!err) {
          console.log(err)
        }
      })
      client.subscribe('zhy', function (err) {
        if (!err) {
          console.log(err)
        }
      })
    })
    client.on('message', (topic, message) => {
      // console.log(`Received ${message.toString()} on ${topic}`);
      if(topic == 'zhy'){
        console.log("zhy topic!!!")
        setStatus(message.toString())
        // setOpen(true)
      }
      if(topic === 'Img'){
        // let base64img = message['base64Image'];

        // console.log(message)
        setImg(message);
        setOpen(true);
      }
      
    });
    setClient(client);
    return () => {
      if (client) {
        client.end(true);
      }
    };
  }, [])
  // useEffect(()=> {
  //   setTimeout(()=>{
  //     setOpen(false);
  //   },2000)
  // },[open])
  const base64EncodedVideoData = 'data:video/mp4;base64,'+img;
  return (
    <div>
      <img src={base64EncodedVideoData} alt="Base64 encoded image" style={{position:'fixed',width:'100vw',height:'80vh',fontSize:'100px',top:'100px',left:'-0px'}}/>
      {open && 
      <div style={{position:'absolute',width:'40vw',height:'120vh',fontSize:'100px',top:'200px'}}>
        {/* Open the Door!!!! */}
      </div>
      }
    </div>
  )
}

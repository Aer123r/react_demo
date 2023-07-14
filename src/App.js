import { Route, Routes, useNavigate } from 'react-router-dom'
import About from "./Pages/About";
import DroneMap from "./Pages/DroneMap";
import './App.css'
import React, { useState } from "react";
import { Button, Menu } from "antd";
import { MenuOutlined } from '@ant-design/icons'

import Esp32Cam from './Pages/Esp32Cam';
function App() {
  const navigate = useNavigate()
  const [visible, setVisible] = useState(false);
  const handleClick = (E) => {
    setVisible(!visible);
  };

  return (
    <div className={'app'}>
    
    <div style={{ paddingBottom: '30px' }}>
        <div className={'mainTitle'}>无人机平台</div>
      </div>
      <div className={'switch'}>
        <Button
          type="default"
          shape="default"
          icon={<MenuOutlined />}
          onClick={handleClick}
        />

        <Menu
          mode="inline"
          theme="light"
          style={{
            width: visible ? "130px" : 0,
            height: '95vh',
            overflow: "hidden",
            transition: "width 0.2s ease-in-out",
          }}
        >

          <Menu.Item key="1" onClick={() => {
            navigate('/')
            handleClick()
          }}>
            无人机地图
          </Menu.Item>
          <Menu.Item key="2" onClick={() => {
            navigate('/about')
            handleClick()
          }}>
            无人机列表
          </Menu.Item>
          <Menu.Item key="3" onClick={() => {
            navigate('/espvideo')
            handleClick()
          }}>
            Monitor
          </Menu.Item>
        </Menu>

      </div>

      <div className={'safeArea'} style={{ paddingLeft: '20vw' }}>
        <Routes>
          <Route path={'/'} element={<DroneMap />}></Route>
          <Route path={'/about'} element={<About />}></Route>
          <Route path={'/espvideo'} element={<Esp32Cam />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;

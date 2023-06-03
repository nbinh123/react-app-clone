import logo from './logo.svg';
import './App.css';

import Header from './layout/header/Header';
import Body from "./layout/body/Body"
import Footer from './layout/footer/Footer';

import Tippy from "tippy.js"
import { BrowserRouter as Router } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import Toast from './layout/toast/Toast';

import io from "socket.io-client"


// đây là port của server
const socket = io.connect("http://localhost:2222")

function App() {

  const s = useRef(0)

  useEffect(() => {
    socket.on("message", (data) => {
      console.log(data)
    })
  },[])

  useEffect(() => {
    console.clear()
  },[])
  

  const [toastType, setToastType] = useState("info")
  const [toastMessage, setToastMessage] = useState("Chào mừng bạn đã quay trở lại!")
  const [toast, setToast] = useState(false)

  const showToast = (type, message) => {
    setToastType((type ? type : "success"))
    setToastMessage((message ? message : "MSG mặc định"))
    setToast(!toast)
  }

  return (
    <Router>
      <div className="App">
        <Toast type={toastType} message={toastMessage} reShow={toast} />
        <Header toast={(type, message) => showToast(type, message)} socket={socket} />
        <Body toast={(type, message) => showToast(type, message)} socket={socket}/>
        <Footer socket={socket} />
      </div>
    </Router>
  );
}

export default App;
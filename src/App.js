import logo from './logo.svg';
import './App.css';
import axios from 'axios';

import Header from './layout/header/Header';
import Body from "./layout/body/Body"
import Footer from './layout/footer/Footer';

import Tippy from "tippy.js"
import { BrowserRouter as Router } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import Toast from './layout/toast/Toast';

import io from "socket.io-client"
import { GlobalProvider } from './globalContext/GlobalContext';

// đây là port của server
// const socket = io.connect("http://localhost:2222")

function App() {

  const [userID, setUserID] = useState("")
  const s = useRef(0)
  async function getAPI(port = 5000, url, id = "", paramCondition) {
    const fullUrl = `http://localhost:${port}${url}${id ? `/${id}` : ""}`;
    
    try {
      const response = await axios.get(fullUrl, {
        params: paramCondition,
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return response.data;
    } catch (error) {
      console.error(error); // Sử dụng console.error để log lỗi rõ ràng hơn
      throw error; // Có thể throw để xử lý tiếp tục bên ngoài nếu cần
    }
  }

  async function postAPI(port = 5000, url, id, data = {}) {
    const fullUrl = `http://localhost:${port}${url}${id ? `/${id}` : ""}`;
    
    const response = await axios.post(fullUrl, data)
    return response.data;
  }
  const newAxios = {
    get: getAPI,
    post: postAPI
  }
  useEffect(() => {
    console.log(userID);
  }, [userID])

  useEffect(() => {
    const id = localStorage.getItem("accessToken")
    if(id != null) setUserID(id)    
  },[])

  return (
    <Router>
      <GlobalProvider
        value={{
          newAxios, userID, setUserID
        }}
      >
        <div className="App">
          <Header />
          <Body />
          <Footer/>
        </div>
      </GlobalProvider>
    </Router>
  );
}

export default App;
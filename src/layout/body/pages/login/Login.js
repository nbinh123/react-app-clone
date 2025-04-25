import React, { useEffect, useRef, useState, useContext } from "react";
import styles from "./login.module.scss"
import { Link, useNavigate, useLocation } from "react-router-dom";
import { GlobalContext } from "../../../../globalContext/GlobalContext";

function Login() {

    const navigate = useNavigate()
    // const data = location.state

    const { newAxios, setUserID } = useContext(GlobalContext)
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const check = async () => {
              
        const response = await newAxios.post(5000, "/user/login", null,{
            username: username,
            password: password
        })
        
        console.log(response);
        
        if(response?.status === 200){
            localStorage.setItem("accessToken", response?.id)
            navigate("/")
            setUserID(response?.id)
        }

        
    }

    return (
        <div className={styles.container}>
            <div className={styles.contain}>
                <h3>Đăng nhập</h3>
                <input onChange={(e) => setUsername(e.target.value)} placeholder={"Tên đăng nhập"} className={styles.input}></input>
                <br></br>
                <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder={"Mật khẩu"} className={styles.input}></input>
                <br></br>
                <div className={styles.btn}>
                    <button onClick={() => check()}>Đăng nhập</button>
                </div>
                <div className={styles.problem}>
                    <p className={styles.forget}>Bạn quên mật khẩu?</p>
                    <p>Bạn chưa có tài khoản?  <Link to={"/sign-in"}>Đăng kí ngay</Link></p>
                </div>
                <div className={styles.more}>
                    <div className={styles.fb}>
                        <p>Facebook</p>
                    </div>
                    <div className={styles.ggp}>
                        <p>Google</p>
                    </div>
                    <div className={styles.zalo}>
                        <p>Zalo</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;
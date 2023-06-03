import React, { useEffect, useRef, useState } from "react";
import styles from "./login.module.scss"
import { Link, useNavigate, useLocation } from "react-router-dom";

function Login({ toast }) {

    const navigate = useNavigate()
    const location = useLocation()
    const data = location.state

    const [user, setUser] = useState(false)
    const [pass, setPass] = useState(false)
    const form = useRef({
        user: user,
        pass: pass
    })

    function Input({ placeholder, isTrue, type }) {
        const [inpValue, setInpValue] = useState("")

        useEffect(() => {
            if (inpValue.trim() == isTrue) {
                type(true)
            }
        }, [inpValue])

        return (
            <input onChange={(e) => setInpValue(e.target.value)} placeholder={placeholder} className={styles.input}></input>
        )
    }

    const check = () => {
        form.current.user = user
        form.current.pass = pass
        if (form.current.pass === true && form.current.user === true) {
            toast("success", "Đăng nhập thành công")
            localStorage.setItem("accessToken", true)
            // chuyển hướng về trang cũ
            navigate((data ? data.path : "/"))
        }

    }

    return (
        <div>
            {!localStorage.getItem("accessToken")
                ?
                (<div className={styles.container}>
                    <div className={styles.contain}>
                        <h1>Đăng nhập</h1>
                        <Input placeholder={"Tên đăng nhập"} type={setUser} isTrue={"binh"} />
                        <br></br>
                        <Input placeholder={"Mật khẩu"} type={setPass} isTrue={"linh"} />
                        <br></br>
                        <div className={styles.btn}>
                            <button onClick={check}>Đăng nhập</button>
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
                </div>)
                : (
                    <div className={styles.container}>
                        <div className={styles.contain}>
                            <h2>Bạn đã đăng nhập rồi ^^</h2>
                            <Link to={"/"} className={styles.return}>
                                <button>Quay lại trang chủ</button>
                            </Link>
                        </div>
                    </div>
                )}
        </div>
    );
}

export default Login;
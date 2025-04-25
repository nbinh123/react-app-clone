import React, { useContext } from "react";
import styles from "./signIn.module.scss"
import { useRef, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faX, faSpinner, faBreadSlice } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom"
import clsx from "clsx"
import { GlobalContext } from "../../../../globalContext/GlobalContext";

function LoginInput({ placeholder, trueAnswer = [], autoTrue, checkTrue, checkFalse, mode = "main", setString = () => {}, rule, type }) {

    const inputRef = useRef()
    const [isTrue, setIsTrue] = useState(false)
    const [loading, setLoading] = useState(false)
    const [timerId, setTimerId] = useState(null)
    const [inpValue, setInpValue] = useState("")

    const check = () => {
        if (type === "") {
            for (let i = 0; i < trueAnswer.length; i++) {
                if (inpValue.trim().toLowerCase() == trueAnswer[i]) {
                    return true
                }
                if (inpValue.trim().toLowerCase() != trueAnswer[i]) {
                    return false
                }
            }
        }
    }

    const okok = () => {
        if (check() || autoTrue) {
            if (inpValue !== "") {
                setIsTrue(true)
            } else {
                setIsTrue(false)
            }
        } else {
            setIsTrue(false)
        }
        if (timerId) {
            clearTimeout(timerId)
            setLoading(true)
        }
        const newtimerId = setTimeout(() => {
            setLoading(false)
        }, 200)
        setTimerId(newtimerId)
    }

    useEffect(() => {
        if (mode === "main") {
            setString(inpValue)
        }

    }, [inpValue])

    useEffect(() => {
        okok()
    }, [inpValue])

    useEffect(() => {
        if (isTrue) {
            checkTrue()
        } else {
            checkFalse()
        }
    }, [isTrue])

    return (
        <div className={styles.client}>
            {!inpValue
                ? ""
                : loading
                    ?
                    <FontAwesomeIcon className={clsx(styles.spinnerIcon)} icon={faSpinner} />
                    :
                    ((!isTrue)
                        ?
                        <FontAwesomeIcon className={clsx(styles.icon, styles.incorrect)} icon={faX} />
                        :
                        <FontAwesomeIcon className={clsx(styles.icon, styles.correct)} icon={faCheck} />)
            }
            <input onChange={e => {
                setInpValue(e.target.value)
            }} ref={inputRef} placeholder={placeholder}></input>
        </div>
    );
}

function SignIn() {

    const navigate = useNavigate()

    const { newAxios } = useContext(GlobalContext)
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [location, setLocation] = useState("")
    const [email, setEmail] = useState("")
    const [nickname, setNickname] = useState("")
    const [password, setPassword] = useState("")
    const [submitPass, setSubmitPass] = useState(false)
    const [securityCode, setSecurityCode] = useState(false)

    const onSignIn = async () => {
        const res = await newAxios.post(5000, "/user/sign_in" , null, {
            username: nickname,
            password: password
        })
        if(res?.status === 200) navigate("/")     
    }
    return (
        <div className={styles.container}>

            <div className={styles.contain}>
                <div className={styles.title}>
                    <h1>Đăng kí</h1>
                </div>
                <div>
                    <LoginInput
                        checkFalse={() => { }}
                        checkTrue={() => { }}
                        placeholder={"Họ và tên"}
                        autoTrue={true}
                    />
                    <LoginInput
                        checkFalse={() => { }}
                        checkTrue={() => { }}
                        placeholder={"Tên truy cập"}
                        autoTrue={true}
                        setString={setNickname}
                    />
                    <LoginInput
                        checkFalse={() => { }}
                        checkTrue={() => { }}
                        placeholder={"Điện thoại"}
                        autoTrue={true}
                    />
                    <LoginInput
                        checkFalse={() => { }}
                        checkTrue={() => { }}
                        placeholder={"Mật khẩu"}
                        autoTrue={true}
                        setString={setPassword}
                    />
                    <LoginInput
                        checkFalse={() => { }}
                        checkTrue={() => { }}
                        placeholder={"Địa chỉ"}
                        autoTrue={true}
                    />
                    <LoginInput
                        checkFalse={() => { }}
                        checkTrue={() => { }}
                        placeholder={"Xác nhận mật khẩu"}
                        autoTrue={true}
                    />
                    <LoginInput
                        checkFalse={() => { }}
                        checkTrue={() => { }}
                        placeholder={"Email"}
                        autoTrue={true}
                    />
                    <LoginInput
                        checkFalse={() => { }}
                        checkTrue={() => { }}
                        placeholder={"Mã bảo mật"}
                    />
                </div>
                <div className={styles.more}>
                    <p>Bạn đã có tài khoản? <Link to={"/login"}>Đăng nhập</Link></p>
                    <div className={styles.tools}>
                        <button onClick={onSignIn} className={styles.submit}>Đăng kí</button>
                        <button className={styles.rewrite}>Làm lại</button>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default SignIn;
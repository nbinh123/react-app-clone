import React, { useEffect, useRef, useState } from "react";
import styles from "./admin.module.scss"
import { Link, useNavigate, useLocation } from "react-router-dom";

import getAPI from "../../../../server/axios/getAPI";
import postAPI from "../../../../server/axios/postAPI";
import putAPI from "../../../../server/axios/putAPI";
import deleteAPI from "../../../../server/axios/deleteAPI";
import patchAPI from "../../../../server/axios/patchAPI";
import axios from "axios";

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
function Admin({ toast }) {

    const navigate = useNavigate()
    const [change, setChange] = useState(false)
    const [user, setUser] = useState(false)
    const [pass, setPass] = useState(false)
    const [admin, setAdmin] = useState("")
    const [adminPass, setAdminPass] = useState("")
    const formRef = useRef({
        user: user,
        pass: pass
    })
    const [require, setRequire] = useState({
        nickname: null,
        password: null
    })
    useEffect(() => {
        getAPI("/admin", "", {}, setRequire)
    }, [])
    useEffect(() => {
        setAdmin(require.nickname)
        setAdminPass(require.password)
    }, [require])

    const check = () => {
        if (user && pass) {
            localStorage.setItem("adminToken", true)
            console.log("admin")
            navigate("/admin")
            toast("success", "Đăng nhập vào admin thành công!!!")
        }
    }

    function AdminLogin() {
        return (<div className={styles.container}>
            <div className={styles.contain}>
                <h1>Admin</h1>
                <Input placeholder={"Tên đăng nhập"} type={setUser} isTrue={admin} />
                <br></br>
                <Input placeholder={"Mật khẩu"} type={setPass} isTrue={adminPass} />
                <br></br>
                <div className={styles.btn}>
                    <button onClick={check}>Vào trang quản trị</button>
                </div>
            </div>
        </div>)
    }

    return (
        <div>
            {!localStorage.getItem("adminToken") ? <AdminLogin /> : <MainAdmin />}
        </div>
    );
}

function MainAdmin() {

    const [changedData, setChangedData] = useState([])
    const data = useRef([
        {
            name: "Chuối sấy",
            img: "https://chungkhoantaichinh.vn/wp-content/uploads/2022/12/hinh-meo-cute-chibi-10.jpg",
            status: true,
            price: "23.000"
        }, {
            name: "Khoai lang tím sấy",
            img: "https://chungkhoantaichinh.vn/wp-content/uploads/2022/12/hinh-meo-cute-chibi-10.jpg",
            status: true,
            price: "23.000"
        }, {
            name: "Dâu tây sấy",
            img: "https://chungkhoantaichinh.vn/wp-content/uploads/2022/12/hinh-meo-cute-chibi-10.jpg",
            status: true,
            price: "23.000"
        }, {
            name: "Cải bó xôi Ardo 450g",
            img: "https://chungkhoantaichinh.vn/wp-content/uploads/2022/12/hinh-meo-cute-chibi-10.jpg",
            status: true,
            price: "23.000"
        }, {
            name: "Dưa leo",
            img: "https://chungkhoantaichinh.vn/wp-content/uploads/2022/12/hinh-meo-cute-chibi-10.jpg",
            status: true,
            price: "23.000"
        }, {
            name: "Bầu",
            img: "https://chungkhoantaichinh.vn/wp-content/uploads/2022/12/hinh-meo-cute-chibi-10.jpg",
            status: true,
            price: "23.000"
        }, {
            name: "Khoai lang Nhật tím",
            img: "https://chungkhoantaichinh.vn/wp-content/uploads/2022/12/hinh-meo-cute-chibi-10.jpg",
            status: true,
            price: "23.000"
        }, {
            name: "Cà tím",
            img: "https://chungkhoantaichinh.vn/wp-content/uploads/2022/12/hinh-meo-cute-chibi-10.jpg",
            status: true,
            price: "23.000"
        }
    ])
    const postRef = useRef()

    //bây giờ chúng ta sẽ tương tác với id mặc định là 3

    const getByAxios = () => { }
    const postByAxios = () => {

        console.log("post")

        axios.get(`http://localhost:3001/products/api/add`, {
            params: {
                name: "Combo sashimi 6B",
                price: 585000/23000,
                img: ""
            },
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(response => {
                return response.data
            })
            .catch(error => {
                console.log(error);
            });
    }
    const patchByAxios = () => {

    }
    const deleteByAxios = () => {

    }
    const putByAxios = () => {

    }

    useEffect(() => { }, [])

    return (
        <div className={styles.container}>
            <div className={styles.contain}>
                <h2>Admin</h2>
                <Link to={"/"} className={styles.return}>
                    <button onClick={() => localStorage.removeItem("accessAdmin")}>Quay lại trang chủ</button>
                </Link>
                <div className={styles.btn}>
                    <div>
                        <button onClick={getByAxios} className={[styles.test, styles.get].join(" ")}>get</button>
                    </div>
                    <div>
                        <button ref={postRef} onClick={postByAxios} className={[styles.test, styles.post].join(" ")}>post</button>
                    </div>
                    <div>
                        <button onClick={patchByAxios} className={[styles.test, styles.patch].join(" ")}>patch</button>
                    </div>
                    <div>
                        <button onClick={deleteByAxios} className={[styles.test, styles.delete].join(" ")}>delete</button>
                    </div>
                    <div>
                        <button onClick={putByAxios} className={[styles.test, styles.put].join(" ")}>put</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Admin;
import React, { useEffect, useRef, useState } from "react";
import styles from "./chat.module.scss"
import clsx from "clsx";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faL, faStar } from "@fortawesome/free-solid-svg-icons";

function Chat({ socket }) {

    const y = useRef(0)

    // state quản lí form đăng nhập
    const inpRef = useRef()
    //  state quản lí số người đang online
    const [onlineMembers, setOnlineMembers] = useState([])
    //  state quản lí xem có người đăng nhập hay chưa
    const [submit, setSubmit] = useState(false)
    //  state quản lí socket.id của người dùng
    const [socketId, setSocketId] = useState(null)
    //  state quản lí người bạn mà người dùng muốn gửi tin nhắn
    //  nếu null là gửi đến tất cả, còn nếu có là lấy cái id của người đó ra
    const [friend, setFriend] = useState(null)
    const [nameSocket, setNameSocket] = useState("")
    function MemberTag({ name, id, icon }) {

        const [change, setChange] = useState(false)
        const [select, setSelect] = useState(false)

        return (
            <div className={clsx(styles.memberTag, {
                [styles.select]: select
            })} onClick={() => {
                setSelect(true)
                pickFriendID(id)
                setFriend(name)
            }}>
                <p>{name}<span>{icon ? <FontAwesomeIcon className={styles.myIcon} icon={faStar} /> : ""}</span></p>
            </div>
        )
    }
    socket.on("Client-send-connection", (data) => {
        setOnlineMembers(data)
    })
    if (y.current === 0) {
        socket.emit("Client-send-connection")
        y.current++
    }
    useEffect(() => {
        socket.emit("Server-send-id", 123)
        socket.on("Server-send-id", (id) => {
            setSocketId(id)
        })
    }, [])
    useEffect(() => {
        socket.on("Client-send-name", (data) => {

        })
    }, [])
    socket.on("Server-send-onlineMembers", (data) => {
        setOnlineMembers(data)
    })
    socket.on("Server-send-error", (message) => {
        console.log(message)
    })
    const sendName = () => {
        let index = onlineMembers.findIndex((user) => {
            return user.name === inpRef.current.value.trim()
        })
        if (inpRef.current.value !== "" && index === -1) {
            socket.emit("Client-send-name", {
                id: socketId,
                name: inpRef.current.value
            })
            setNameSocket(inpRef.current.value)
            setSubmit(true)
        } else {
            console.log("đã có tên này")
            inpRef.current.focus()
        }
        inpRef.current.value = ""
    }
    const pickFriendID = (id) => {
        if (id !== socketId) {
            console.log(id)
            setFriend(id)
        } else {
            alert("Đây là bạn")
        }
    }
    function FormChat() {

        const [conversation, setConversation] = useState([])
        const [message, setMessage] = useState()
        const boardRef = useRef()
        useEffect(() => {
            socket.on("Server-send-message-all", (data) => {
                setConversation([...conversation, data])
            })
        },[])
        useEffect(() => {
            console.log(conversation)
        },[conversation])
        

        function Tool() {
            const [timer, setTimer] = useState(null)
            const [inpValue, setInpValue] = useState("")
            const buttonRef = useRef()
            const inpRef = useRef()
            const pickValue = (e) => {
                if (timer) {
                    clearTimeout(timer)
                    buttonRef.current.style.pointerEvents = "none"
                }
                let newTimer = setTimeout(() => {
                    setInpValue(e.target.value)
                    buttonRef.current.style.pointerEvents = "auto"
                }, 300)
                setTimer(newTimer)
            }
            useEffect(() => {

            }, [inpValue])
            const sendMessage = () => {
                socket.emit("Client-send-message-all", {
                    name: nameSocket,
                    message: inpValue
                })
                inpRef.current.value = ""
            }
            return (
                <div className={styles.tool}>
                    <input ref={inpRef} onChange={(e) => pickValue(e)} placeholder="Gửi gắm lời yêu thương ❤️"></input>
                    <button ref={buttonRef} onClick={sendMessage}>Gửi</button>
                </div>
            )
        }
        function Message({ name, message, me }) {
            return (
                <div className={clsx(styles.message, {
                    [styles.me]: me
                })}>
                    <div>
                        <small>{name ? name : "Vô danh"}</small>
                        <p>{message ? message : ""}</p>
                    </div>
                </div>
            )
        }
        return (
            <div className={styles.chatForm}>
                <div className={styles.form}>
                    <div ref={boardRef} className={styles.board}>
                        {conversation.map((message, index) => {
                            return <Message 
                                name={message.name}
                                message={message.message}
                                me={message.name === nameSocket}
                                key={index}
                            />
                        })}
                    </div>
                    <Tool />
                </div>
            </div>
        )
    }
    function Info() {
        return (
            <div className={styles.info}>
                <div className={styles.members}>
                    <FontAwesomeIcon className={styles.icon} icon={faChevronDown} />
                    <p>Số người trực tuyến: {onlineMembers.length}</p>
                    {onlineMembers.map((member, index) => {
                        return (
                            <MemberTag
                                name={member.name}
                                id={member.id}
                                key={index}
                                icon={member.id === socketId}
                            />
                        )
                    })}
                </div>
            </div>
        )
    }
    function Validate() {
        return (
            <div className={styles.chatForm}>
                <div className={styles.pickName}>
                    <p className={styles.label}>Nhập tên của bạn</p>
                    <input ref={inpRef} placeholder="Tên của bạn là"></input>
                    <button onClick={sendName}>Vào chat</button>
                </div>
            </div>
        )
    }

    return (
        <div className={styles.container}>
            <Info />
            {submit
                ? <FormChat />
                : <Validate />}
        </div>
    );
}

export default Chat;
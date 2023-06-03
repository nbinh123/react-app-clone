import React, { useRef } from "react";
import styles from "./footer.module.scss"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faEnvelope, faFaceSmile, faLocationDot, faPaperPlane, faPhone } from "@fortawesome/free-solid-svg-icons"

function Footer({socket}) {

    const inpRef = useRef()
    const sendEmail = () => {
        socket.emit("client-send-email", inpRef.current.value)
        inpRef.current.value = ""
    }

    return (
        <div className={styles.container}>
            <div className={styles.info}>
                <div className={styles.logo}></div>
                <div className={styles.location}>
                    <p><FontAwesomeIcon icon={faLocationDot} />123 Nguyễn Hữu Thọ</p>
                </div>
                <div className={styles.phone}>
                    <p><FontAwesomeIcon icon={faPhone} />0123456789</p>
                </div>
                <div className={styles.emailContact}>
                    <p><FontAwesomeIcon icon={faEnvelope} />nbinh0301.dn@gmail.com</p>
                </div>
                <div className={styles.workTime}>
                    <p><FontAwesomeIcon icon={faClock} />Mở cửa hằng ngày 8:00 đến 20:00</p>
                </div>
                <div className={styles.network}>
                    <div className={[styles.networkItem, styles.fb].join("")}>
                        <FontAwesomeIcon icon={faFaceSmile} />
                    </div>
                    <div className={[styles.networkItem, styles.twit].join("")}>
                        <FontAwesomeIcon icon={faFaceSmile} />
                    </div>
                    <div className={[styles.networkItem, styles.youtube].join("")}>
                        <FontAwesomeIcon icon={faFaceSmile} />
                    </div>
                    <div className={[styles.networkItem, styles.pinterest].join("")}>
                        <FontAwesomeIcon icon={faFaceSmile} />
                    </div>
                </div>
            </div>
            <div className={styles.help}>
                <p>Hỗ trợ khách hàng</p>
                <div className={styles.client}>Hỗ trợ khách hàng</div>
                <div className={styles.more}>Dịch vụ khác</div>
            </div>
            <div className={styles.menu}>
                <p className={styles.title}>Menu</p>
                <div className={[styles.tool, styles.homepage].join("")}>
                    <p>Trang chủ</p>
                </div>
                <div className={[styles.tool, styles.introduce].join("")}>
                    <p>Giới thiệu</p>
                </div>
                <div className={[styles.tool, styles.product].join("")}>
                    <p>Sản phẩm</p>
                </div>
                <div className={[styles.tool, styles.service].join("")}>
                    <p>Dịch vụ</p>
                </div>
                <div className={[styles.tool, styles.news].join("")}>
                    <p>Tin tức</p>
                </div>
                <div className={[styles.tool, styles.contact].join("")}>
                    <p>Liên hệ</p>
                </div>
            </div>
            <div className={styles.email}>
                <div className={styles.contain}>
                    <p className={styles.download}>Tải ứng dụng</p>
                    <div className={styles.img}>
                        <div className={styles.ggp}></div>
                        <div className={styles.apt}></div>
                    </div>
                    <p className={styles.login}>Đăng kí nhận tin</p>
                    <div className={styles.formEmail}>
                        <input ref={inpRef} placeholder="Địa chỉ email....."></input>
                        <button onClick={sendEmail}><FontAwesomeIcon icon={faPaperPlane}/></button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
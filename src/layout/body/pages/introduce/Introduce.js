import React from "react";
import styles from "./introduce.module.scss"

import { useState, useEffect, useRef } from "react";

function Introduce() {

    function Banner() {
        return (
            <div className={styles.banner}>
                <div className={styles.title}>
                    <p>Đăng kí để nhận thông tin và chương trình ưu đãi từ chúng tôi</p>
                </div>
                <div className={styles.content}>
                    <input placeholder="Địa chỉ email...."></input>
                    <button>Đăng kí</button>
                </div>
            </div>
        )
    }
    function Main() {
        function Tag({ img, title, content }) {
            return (
                <div className={styles.tag}>
                    <div className={styles.img}>
                        <img src={img}></img>
                    </div>
                    <div className={styles.info}>
                        <p className={styles.title}>{title}</p>
                        <p className={styles.content}>{content}</p>
                    </div>
                </div>
            )
        }

        const [data, setData] = useState([])
        const tag = useRef([{
            img: "https://demo037130.web30s.vn/datafiles/35781/upload/images/icon/gt-1-01.png?t=1663730558",
            title: "Đổi trả hàng",
            content: "Hỗ trợ đổi trả hàng trong vòng 24h nếu xảy ra lỗi"
        }, {
            img: "https://demo037130.web30s.vn/datafiles/35781/upload/images/icon/gt-2-01.png?t=1663730558",
            title: "Miễn phí vận chuyển",
            content: "Áp dụng với những đơn hàng từ 500.000đ trở lên"
        }, {
            img: "https://demo037130.web30s.vn/datafiles/35781/upload/images/icon/gt-3-01.png?t=1663730558",
            title: "Ưu đãi hàng ngày",
            content: "Chương trình giảm giá hàng ngày tất cả các sản phẩm"
        }, {
            img: "https://demo037130.web30s.vn/datafiles/35781/upload/images/icon/gt-4-01.png?t=1663730558",
            title: "Mua hàng trực tuyến",
            content: "Hệ thống bán hàng online đa dạng, đa kênh"
        }, {
            img: "https://demo037130.web30s.vn/datafiles/35781/upload/images/icon/gt-5-01.png?t=1663730558",
            title: "Giá cả hợp lý",
            content: "Luôn có chính sách giá hợp lý và nhiều chương trình khuyến mãi"
        }, {
            img: "https://demo037130.web30s.vn/datafiles/35781/upload/images/icon/gt-6-01.png?t=1663730558",
            title: "Thực phẩm an toàn",
            content: "Cam kết tất cả thực phẩm đạt chuẩn từ sản xuất đến khâu phân phối."
        }])
        useEffect(() => {
            setData(tag.current)
        })


        return (
            <div className={styles.mainIntro}>
                {data.map((tag, index) => <Tag img={tag.img} content={tag.content} title={tag.title} key={index} />)}
            </div>
        )
    }
    return (
        <div className={styles.container}>
            <Banner />
            <Main />
        </div>
    );
}

export default Introduce;
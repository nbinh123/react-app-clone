import React, { useState, useEffect, useRef } from "react";
import styles from "./mainHeader.module.scss"
import clsx from "clsx"


import HeaderGroup from "./group/HeaderGroup";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping, faBars } from "@fortawesome/free-solid-svg-icons";


function MainHeader() {

    const [id, setId] = useState()
    const show = () => { }
    const productChildren = useRef({
        title: "Sản phẩm",
        children: [
            {
                title: "Bột, ngũ cốc"
            }, {
                title: "Rau củ quả",
                children: [
                    {
                        title: "Nhóm trái cây"
                    }, {
                        title: "Nhóm củ quả"
                    }, {
                        title: "Nhóm trái cây"
                    }, {
                        title: "Hoa quả nhập khẩu"
                    }, {
                        title: "Hoa quả",
                        children: [
                            {
                                title: "Hoa quả sấy khô"
                            }, {
                                title: "Hoa quả Việt Nam"
                            }
                        ]
                    }
                ]
            }, {
                title: "Hải sản",
                children: [
                    {
                        title: "Tôm"
                    }, {
                        title: "Hải sản nhập khẩu"
                    }, {
                        title: "Mực"
                    }, {
                        title: "Cá",
                        children: [
                            {
                                title: "Cá hồi"
                            }
                        ]
                    }, {
                        title: "Cua - ghẹ"
                    }
                ]
            }, {
                title: "Thực phẩm dông lạnh"
            }, {
                title: "Sushi - sashimi deli"
            }, {
                title: "Thịt - cá",
                children: [
                    {
                        title: "Thịt sườn heo"
                    }, {
                        title: "Thịt heo ba chỉ"
                    }, {
                        title: "Thịt heo"
                    }, {
                        title: "Bò Úc",
                        children: [
                            {
                                title: "Thịt sườn"
                            }, {
                                title: "Thịt thăn"
                            }, {
                                title: "Thịt ba chỉ"
                            }
                        ]
                    }, {
                        title: "Bò Mỹ",
                        children: [
                            {
                                title: "Thịt sườn"
                            }, {
                                title: "Thịt thăn"
                            }, {
                                title: "Thịt ba chỉ"
                            }
                        ]
                    }, {
                        title: "Thịt bò"
                    }
                ]
            }
        ]
    })
    const serviceChildren = useRef({
        title: "Dịch vụ",
        children: [
            {
                title: "Hỗ trợ khách hàng"
            }, {
                title: "Dịch vụ khác"
            }
        ]
    })
    const newsChildren = useRef({
        title: "Tin tức",
        children: [
            {
                title: "Kiến thức"
            }, {
                title: "Sống khỏe"
            }
        ]
    })
    const libraryChildren = useRef({
        title: "Thư viện",
        children: [
            {
                title: "Thư viện ảnh",
                children: [
                    {
                        title: "Sản phẩm nổi bật"
                    }, {
                        title: "Album hot"
                    }
                ]
            }, {
                title: "Video",
                children: [
                    {
                        title: "Video nổi bật",
                    }, {
                        title: "Video hot"
                    }
                ]
            }
        ]
    })
    return (
        <div className={styles.container}>
            <div className={styles.category} onClick={show}>
                <p><FontAwesomeIcon className={styles.icon} icon={faBars} /> Danh mục sản phẩm</p>
            </div>
            <div className={styles.group}>
                <HeaderGroup title={"Trang chủ"} link path={"/"} />
                <HeaderGroup title={"giới thiệu"} link path={"/introduce"} />
                <HeaderGroup title={"sản phẩm"} show children={productChildren.current} />
                <HeaderGroup title={"dịch vụ"} show children={serviceChildren.current} />
                <HeaderGroup title={"Tin tức"} show children={newsChildren.current} />
                <HeaderGroup title={"thư viện"} show children={libraryChildren.current} />
                <HeaderGroup title={"liên hệ"} />
                <HeaderGroup title={"Chat"} link path={"/chat"} />
                <HeaderGroup title={"Admin"} link path={"/admin"} />
            </div>
            <div className={styles.region}>
                <p><FontAwesomeIcon className={styles.icon} icon={faBagShopping} /> Hệ thống cửa hàng</p>
            </div>
        </div>
    );
}

export default MainHeader;
import React from "react";
import styles from "./tippy.module.scss"

import { Tippy } from "tippy.js";

function TippyTag({ visible, placement, onClickOutside, child }) {
    return (
        <div className={styles.container}>
            <Tippy
                visible={true}  //set thuộc tính ẩn/hiện
                arrow={true}
                placement="bottom"  //set hướng render
                offset={[0, 10]}  //set khoảng cách so với phần tử cha offset={[x,y]}
                onClickOutside={() => {}}
                interactive={true}  //set việc cho phép người dùng tác động lên tooltip
                render={attr => (
                    <div tabIndex="-1" {...attr}>
                        
                    </div>
                )}
            >
                {child}
            </Tippy>
        </div>
    );
}

export default TippyTag;
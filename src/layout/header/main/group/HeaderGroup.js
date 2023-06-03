import React, { Children, useEffect, useState } from "react";
import styles from "../../main/mainHeader.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp, faChevronRight } from "@fortawesome/free-solid-svg-icons";

import Tippy from "@tippyjs/react/headless"
import { Link } from "react-router-dom";

function HeaderGroup({ title, show, link, path, children }) {

    const [hover, setHover] = useState(false)

    const icon = show ? (hover ? <FontAwesomeIcon className={styles.icon} icon={faChevronUp} /> : <FontAwesomeIcon className={styles.icon} icon={faChevronDown} />) : ""
    const iconChild = <FontAwesomeIcon icon={faChevronRight} />

    function HaveLink() {
        return (
            <Link to={path} className={[styles.child].join("")} onMouseMove={() => setHover(true)} onMouseOut={() => setHover(false)}>
                <p>{title}{icon}</p>
            </Link>
        )
    }


    function Main({ children = [1] }) {

        const [show, setShow] = useState(false)

        return (
            <Tippy
                placement="bottom"
                interactive={true}
                hideOnClick={"toggle"}
                offset={[0, 0]}
                render={attr => (
                    <div tabIndex="-1" {...attr} className={styles.stage1}>
                        {children.children ? (
                            children.children.map((child, index) => {
                                if (child.children) {
                                    return (
                                        <Tippy
                                            placement="right"
                                            interactive={true}
                                            key={index}
                                            offset={[0, -20]}
                                            render={attr => (
                                                <div tabIndex="-1" {...attr} className={styles.stage2}>
                                                    {child.children.map((child, index) => {
                                                        if (child.children) {
                                                            return (
                                                                <Tippy
                                                                    placement="right"
                                                                    interactive={true}
                                                                    offset={[0, -20]}
                                                                    key={index}
                                                                    render={attr =>
                                                                    (<div tabIndex="-1" {...attr} className={styles.stage3}>
                                                                        {child.children.map((child, index) => {
                                                                            return (
                                                                                <div className={styles.childStage} key={index}>
                                                                                    <p>{child.title}</p>
                                                                                </div>
                                                                            )
                                                                        })}
                                                                    </div>)}
                                                                >
                                                                    <div className={styles.childStage} key={index}>
                                                                        <p>{child.title}<span className={styles.icon}>{iconChild}</span></p>
                                                                    </div>
                                                                </Tippy>
                                                            )
                                                        } else {
                                                            return (
                                                                <div className={styles.childStage} key={index}>
                                                                    <p>{child.title}</p>
                                                                </div>
                                                            )
                                                        }
                                                    })}
                                                </div>
                                            )}
                                        >
                                            <div className={styles.childStage} key={index}>
                                                <p>{child.title}<span className={styles.icon}>{iconChild}</span></p>
                                            </div>
                                        </Tippy>
                                    )
                                } else {
                                    return (
                                        <div key={index} className={styles.childStage}>
                                            <p key={index}>{child.title}</p>
                                        </div>
                                    )
                                }
                            })
                        ) : ""}
                    </div>
                )}
            >
                <div className={[styles.child].join("")} onMouseMove={() => setHover(true)}>
                    <p>{title}{icon}</p>
                </div>
            </Tippy>
        )
    }
    return (
        <div>
            {!link ? <Main children={children} /> : <HaveLink />}
        </div>
    );
}

export default HeaderGroup;
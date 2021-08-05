import ClassNames from 'classnames';
import { useState } from 'react';
import { Link } from "react-router-dom";

import { AiOutlineDashboard } from "react-icons/ai";
import { IoMdChatboxes } from "react-icons/io";
import { MdEmail, MdContacts, MdAdjust } from "react-icons/md";
import { BiCalendarCheck, BiNote } from "react-icons/bi";

const LeftSideBar = (props) => {
    const { showUserName } = props;
    const [checkShowOption, setCheckShowOption] = useState(false);
    const showOption = () => {
        setCheckShowOption(!checkShowOption);
    }

    return (
        <div className="scroll-sidebar">
            <div className={ClassNames("leftSideBar-header", { "leftSideBar-header_small": !showUserName })}>
                <div className={ClassNames("profile-user-img", { "profile-user-img_small": !showUserName })}>
                    <img src={require("../assets/images/avatar.jpg").default} alt="avatar left side bar" />
                </div>
                <div className={ClassNames("username", { "hide": !showUserName })}><strong>Son Dinh</strong></div>
            </div>
            <div className="nav-wrap">
                <ul id="sidebarnav" className="nav">
                    <li>
                        <div onClick={showOption}>
                            <AiOutlineDashboard />
                            <span className={ClassNames({ "hide": !showUserName })}>Dasboard</span>
                        </div>
                        <ul className={ClassNames("collapse", { "hide": !checkShowOption || !showUserName })}>
                            <li>
                                <Link to="/">
                                    <span className={ClassNames({ "hide": !showUserName })}>Dasboard 1</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="#">
                                    <span className={ClassNames({ "hide": !showUserName })}>Dasboard 1</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="#">
                                    <span className={ClassNames({ "hide": !showUserName })}>Dasboard 1</span>
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <Link to="#">
                            <IoMdChatboxes />
                            <span className={ClassNames({ "hide": !showUserName })}>Chat</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="#">
                            <MdEmail />
                            <span className={ClassNames({ "hide": !showUserName })}>Email</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="#">
                            <MdContacts />
                            <span className={ClassNames({ "hide": !showUserName })}>Contacts</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="#">
                            <BiCalendarCheck />
                            <span className={ClassNames({ "hide": !showUserName })}>Calendar</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="#">
                            <BiNote />
                            <span className={ClassNames({ "hide": !showUserName })}>Notes</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}
export default LeftSideBar;
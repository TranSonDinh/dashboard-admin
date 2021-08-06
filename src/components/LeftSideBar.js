import ClassNames from 'classnames';
import { useState } from 'react';
import { Link } from "react-router-dom";

import { AiOutlineDashboard } from "react-icons/ai";
import { IoMdChatboxes } from "react-icons/io";
import { MdEmail, MdContacts, MdKeyboardArrowRight } from "react-icons/md";
import { BiCalendarCheck, BiNote } from "react-icons/bi";

const LeftSideBar = (props) => {
    const { showUserName } = props;
    const [checkShowOption, setCheckShowOption] = useState(null);
    const [select, setSelect] = useState(0);
    const [selectChild, setSelectChild] = useState(-1);
    const showOption = () => {
        if (checkShowOption === null) {
            setCheckShowOption(true);
        }
        setCheckShowOption(!checkShowOption);
    }
    const handlesSelect = (value, valueChild = -1) => {
        setSelect(value);
        setSelectChild(valueChild);
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
                        <div onClick={showOption} className={ClassNames({ "select-navbar": (select === 0) ? true : false, "arrowShowOption": checkShowOption, "hideArrow": !showUserName })}>
                            <AiOutlineDashboard />
                            <span className={ClassNames({ "hide": !showUserName })}>Dasboard</span>
                            {/* <MdKeyboardArrowRight className={ClassNames("arrowShowOption", { "hide": !showUserName, "arrowShowOption_downwards": checkShowOption, "arrowShowOption_toRight": !checkShowOption })} /> */}
                        </div>
                        <ul className={ClassNames("collapse", { "hide": !checkShowOption || !showUserName })}>
                            <li className={ClassNames({ "select-navbar_child": (select === 0 && selectChild === 0) ? true : false })}>
                                <Link to="/" onClick={() => handlesSelect(0, 0)}>
                                    <span className={ClassNames({ "hide": !showUserName })}>Dasboard 1</span>
                                </Link>
                            </li>
                            <li className={ClassNames({ "select-navbar_child": (select === 0 && selectChild === 1) ? true : false })}>
                                <Link to="#" onClick={() => handlesSelect(0, 1)}>
                                    <span className={ClassNames({ "hide": !showUserName })}>Dasboard 2</span>
                                </Link>
                            </li>
                            <li className={ClassNames({ "select-navbar_child": (select === 0 && selectChild === 2) ? true : false })}>
                                <Link to="#" onClick={() => handlesSelect(0, 2)}>
                                    <span className={ClassNames({ "hide": !showUserName })}>Dasboard 3</span>
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li className={ClassNames({ "select-navbar": (select === 1) ? true : false })}>
                        <Link to="#" onClick={() => handlesSelect(1)}>
                            <IoMdChatboxes />
                            <span className={ClassNames({ "hide": !showUserName })}>Chat</span>
                        </Link>
                    </li>
                    <li className={ClassNames({ "select-navbar": (select === 2) ? true : false })}>
                        <Link to="#" onClick={() => handlesSelect(2)}>
                            <MdEmail />
                            <span className={ClassNames({ "hide": !showUserName })}>Email</span>
                        </Link>
                    </li>
                    <li className={ClassNames({ "select-navbar": (select === 3) ? true : false })}>
                        <Link to="#" onClick={() => handlesSelect(3)}>
                            <MdContacts />
                            <span className={ClassNames({ "hide": !showUserName })}>Contacts</span>
                        </Link>
                    </li>
                    <li className={ClassNames({ "select-navbar": (select === 4) ? true : false })}>
                        <Link to="#" onClick={() => handlesSelect(4)}>
                            <BiCalendarCheck />
                            <span className={ClassNames({ "hide": !showUserName })}>Calendar</span>
                        </Link>
                    </li>
                    <li className={ClassNames({ "select-navbar": (select === 5) ? true : false })}>
                        <Link to="#" onClick={() => handlesSelect(5)}>
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
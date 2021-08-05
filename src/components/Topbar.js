import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/images/logo.png";
import LogoName from '../assets/images/download.png';
import { AiOutlineMenu } from 'react-icons/ai';
import { FiMessageSquare } from "react-icons/fi";
import { IoIosNotifications } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";

import Dropdown from './DropdownMenu';
import DropdownAvatar from './DropdownMenuAvatar';
import LeftSideBar from './LeftSideBar';

import './Responsive.css';

function Topbar() {
    const [user, setUser] = useState({ avatar: "avatar.jpg", name: "Dinh", email: "sondinh2703@gmail.com" });
    const [listNoti, setListNoti] = useState([
        { type: "link", title: "Laugh Admin", mail: "Just see my new admin!", time: "9:30 AM" },
        { type: "calendar", title: "Event Today", mail: "Just a reminder that you have event.", time: "9:10 AM" },
        { type: "setting", title: "Settings", mail: "You can customize this template as you whioo you ghi hi", time: "9:08 AM" },
        { type: "mail", title: "Check Mail", mail: "Just check my admin!", time: "9:02 AM" }
    ]);
    const [listMess, setListMess] = useState([
        { type: "avatar.jpg", title: "Laugh Admin", mail: "Just see my new admin!", time: "9:30 AM" },
        { type: "avatar.jpg", title: "Event Today", mail: "Just a reminder that you have event.", time: "9:10 AM" },
        { type: "avatar.jpg", title: "Settings", mail: "You can customize this template as you whioo you ghi hi", time: "9:08 AM" },
        { type: "avatar.jpg", title: "Check Mail", mail: "Just check my admin!", time: "9:02 AM" }
    ]);

    const [logoName, setLogoName] = useState(false);
    const [widthLeft, setWidthLeft] = useState(65);
    const [select, setSelect] = useState(false);
    const handlesShowName = () => {
        setLogoName(!logoName);
        if (widthLeft === 65) setWidthLeft(240);
        if (widthLeft === 240) setWidthLeft(65);

    };
    const handlesSelect = () => {
        setSelect(!select);
    }
    return (
        <>
            <header className="topbar">
                <nav className="top-navbar">
                    <div className="nav-logo">
                        <Link to="/">
                            <img src={logo} id="logo" alt="logo" />
                            {logoName && <img src={LogoName} id="logoName" alt="logo name" />}
                        </Link>
                    </div>
                    <div className="navbarbg">
                        <div className="nav-item nav-iconShowBar">
                            <Link to="#" onClick={() => { handlesShowName(); handlesSelect(); }}>
                                <AiOutlineMenu />
                            </Link>
                        </div>
                        <ul>
                            <li className="nav-item">
                                <Link to="#">
                                    <IoIosNotifications />
                                    <Dropdown color="#7460ee" totalNoti={listNoti.length} strNoti="Notifications" strLink="Check all notifications" item={listNoti} />
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="#">
                                    <FiMessageSquare />
                                    <Dropdown color="#fc4b6c" totalNoti={listMess.length} strNoti="Messages" strLink="Sell all e-Mails" item={listMess} />
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="#">
                                    {/.*(jpg|png|PNG|JPG|svg|SVG)/g.exec(user.avatar) && <img src={require(`../assets/images/${user.avatar}`).default} alt="avatar" className="topnav-avatar" />}
                                    {!user.avatar && <FaUserCircle />}
                                    <DropdownAvatar color="#7460ee" avatar={user.avatar} name={user.name} email={user.email} />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
            <aside className="left-sidebar" id="sidebarbg" style={{ width: `${widthLeft}px` }}
                onMouseOver={select ? "" : handlesShowName} onMouseOut={select ? "" : handlesShowName}>
                <LeftSideBar showUserName={widthLeft === 65 ? false : true} />
            </aside>
        </>
    );
}

export default Topbar;
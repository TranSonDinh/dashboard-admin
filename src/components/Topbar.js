import { Link } from 'react-router-dom';
import logo from "../assets/images/logo.png";
import { AiOutlineMenu } from 'react-icons/ai';
import { FiMessageSquare } from "react-icons/fi";
import { IoIosNotifications } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import Dropdown from './DropdownMenu';

function Topbar() {
    return (
        <header className="topbar">
            <nav className="top-navbar">
                <div className="nav-logo">
                    <Link to="/">
                        <img src={logo} id="logo" alt="logo" />
                    </Link>
                </div>
                <div className="navbarbg">
                    <div className="nav-item nav-iconShowBar">
                        <AiOutlineMenu />
                    </div>
                    <ul>
                        <li className="nav-item">
                            <IoIosNotifications />
                            <Dropdown color="#7460ee" />
                        </li>
                        <li className="nav-item"><FiMessageSquare /></li>
                        <li className="nav-item"><FaUserCircle /></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Topbar;
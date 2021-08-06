import { Link } from "react-router-dom";
import { FaUserCircle, FaPowerOff } from "react-icons/fa";
import { SiGooglemessages } from "react-icons/si";
import { MdAccountBalanceWallet } from 'react-icons/md';
import { AiFillSetting } from 'react-icons/ai';

function Dropdown(props) {
    const { avatar, color, name, email } = props;
    return (
        <div className="dropdown-menu dropdown-user">
            <span className="bg-primary" style={{ backgroundColor: color }}></span>
            <div className="dropdown-user_title" style={{ backgroundColor: color }}>
                {/.*(jpg|png|PNG|JPG|svg|SVG)/g.exec(avatar) && <img src={require(`../assets/images/${avatar}`).default} alt="avatar" className="dropdown-avatar" />}
                <div>
                    <h5>{name}</h5>
                    <p>{email}</p>
                </div>
            </div>
            <ul className="dropdown-user_option">
                <li>
                    <Link to="#">
                        <FaUserCircle />
                        <p>My Account</p>
                    </Link>
                </li>
                <li>
                    <Link to="#">
                        <MdAccountBalanceWallet />
                        <p>My Balance</p>
                    </Link>
                </li>
                <li>
                    <Link to="#">
                        <SiGooglemessages />
                        <p>Inbox</p>
                    </Link>
                </li>
                <li className="boder-top-bottom">
                    <Link to="#">
                        <AiFillSetting />
                        <p>Account Settings</p>
                    </Link>
                </li>
                <li>
                    <Link to="#">
                        <FaPowerOff />
                        <p>Logout</p>
                    </Link>
                </li>
            </ul>

        </div>
    );
}
export default Dropdown;
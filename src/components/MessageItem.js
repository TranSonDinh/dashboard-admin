import { HiLink } from "react-icons/hi";
import { BiCalendar, BiUser } from "react-icons/bi";
import { AiFillSetting } from 'react-icons/ai';

const MessageItem = ({ type, title, mail, time }) => {
    return (
        <div className="message-item">
            <div className="message-icon" >
                {type === "setting" && <div style={{ backgroundColor: "#1e88e5" }}><AiFillSetting /></div>}
                {type === "link" && <div style={{ backgroundColor: "#4a32e2" }}><HiLink /></div>}
                {type === "calendar" && <div style={{ backgroundColor: "#21c1d6" }}><BiCalendar /></div>}
                {type === "mail" && <div style={{ backgroundColor: "#7460ee" }}><BiUser /></div>}
                {/.*(jpg|png|PNG|JPG|svg|SVG)/g.exec(type) && <img src={require(`../assets/images/${type}`).default} alt="avatar" />}
            </div>
            <div className="message-content">
                <h5 className="message-title">{title}</h5>
                <span className="mail-desc">{mail}</span>
                <span className="time">{time}</span>
            </div>
        </div>
    );
}
export default MessageItem;
import { HiLink } from "react-icons/hi";

const MessageItem = () => {
    return (
        <div className="message-item">
            <div className="message-icon">
                <div>
                    <HiLink />
                </div>
            </div>
            <div className="message-content">
                <h5 className="message-title">Laugh Admin</h5>
                <span className="mail-desc">Just see my new admin!</span>
                <span className="time">9:30 am</span>
            </div>
        </div>
    );
}
export default MessageItem;
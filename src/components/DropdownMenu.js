import MessageItem from "./MessageItem";

function Dropdown({ color }) {
    return (
        <div className="dropdown-menu">
            <span className="bg-primary" style={{ backgroundColor: color }}></span>
            <div className="drop-title" style={{ backgroundColor: color }}>
                <div>
                    <h4>4 New</h4>
                    <p>Notifications</p>
                </div>
            </div>
            <div className="drop-content">
                <MessageItem />
                <MessageItem />
            </div>
        </div>
    );
}
export default Dropdown;
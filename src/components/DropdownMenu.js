import MessageItem from "./MessageItem";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

function Dropdown(props) {
    const { color, totalNoti, strNoti, strLink, item } = props;
    return (
        <div className="dropdown-menu">
            <span className="bg-primary" style={{ backgroundColor: color }}></span>
            <div className="drop-title" style={{ backgroundColor: color }}>
                <div>
                    <h4>{totalNoti} New</h4>
                    <p>{strNoti}</p>
                </div>
            </div>
            <div className="drop-content">
                {item.map((item, index) => {
                    return (<MessageItem type={item.type} title={item.title} mail={item.mail} time={item.time} key={index} />);
                })}
            </div>
            <Link to="" className="nav-link">
                <strong>{strLink}</strong>
                <IoIosArrowForward />
            </Link>
        </div>
    );
}
export default Dropdown;
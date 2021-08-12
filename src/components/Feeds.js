import { Link } from 'react-router-dom';
import { BsFillBellFill } from 'react-icons/bs';

const Feeds = () => {
    return (<div className="content-wrap feed-notif">
        <div className="title-notif">Feeds</div>
        <div className="content-notif">
            <ul>
                <li>
                    <Link to="#">
                        <div>
                            <span className="notif-icon"><BsFillBellFill /></span>
                            <span className="notifi-text">You have 4 pending tasks.</span>
                        </div>
                        <span className="notifi-time">Just now</span>
                    </Link>
                </li>
                <li>
                    <Link to="#">
                        <div>
                            <span className="notif-icon"><BsFillBellFill /></span>
                            <span className="notifi-text">You have 4 pending tasks.</span>
                        </div>
                        <span className="notifi-time">Just now</span>
                    </Link>
                </li>
                <li>
                    <Link to="#">
                        <div>
                            <span className="notif-icon"><BsFillBellFill /></span>
                            <span className="notifi-text">You have 4 pending tasks.</span>
                        </div>
                        <span className="notifi-time">Just now</span>
                    </Link>
                </li>
                <li>
                    <Link to="#">
                        <div>
                            <span className="notif-icon"><BsFillBellFill /></span>
                            <span className="notifi-text">You have 4 pending tasks.</span>
                        </div>
                        <span className="notifi-time">Just now</span>
                    </Link>
                </li>
                <li>
                    <Link to="#">
                        <div>
                            <span className="notif-icon"><BsFillBellFill /></span>
                            <span className="notifi-text">You have 4 pending tasks.</span>
                        </div>
                        <span className="notifi-time">Just now</span>
                    </Link>
                </li>
                <li>
                    <Link to="#">
                        <div>
                            <span className="notif-icon"><BsFillBellFill /></span>
                            <span className="notifi-text">You have 4 pending tasks.</span>
                        </div>
                        <span className="notifi-time">Just now</span>
                    </Link>
                </li>
                {/* <li>
                    <Link to="#">
                        <div>
                            <span className="notif-icon"><BsFillBellFill /></span>
                            <span className="notifi-text">You have 4 pending tasks.</span>
                        </div>
                        <span className="notifi-time">Just now</span>
                    </Link>
                </li>
                <li>
                    <Link to="#">
                        <div>
                            <span className="notif-icon"><BsFillBellFill /></span>
                            <span className="notifi-text">You have 4 pending tasks.</span>
                        </div>
                        <span className="notifi-time">Just now</span>
                    </Link>
                </li> */}
            </ul>
        </div>
    </div>);
}
export default Feeds;
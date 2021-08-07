import classNames from 'classnames';

import SalesOverview from './SalesOverview';
import OurVisitors from './OurVisitors';

const Dashboard = (props) => {
    return (
        <div className={classNames("dashboard-wrap", { "zoom-out-dash": props.showUserName })} >
            <div className="row">
                <SalesOverview showUserName={props.showUserName} select={props.select} />
                <OurVisitors />
            </div>

        </div>
    );
}
export default Dashboard;
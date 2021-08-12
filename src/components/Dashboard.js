import classNames from 'classnames';

import SalesOverview from './SalesOverview';
import OurVisitors from './OurVisitors';
import Feeds from './Feeds';
import NewsletterCampaign from './NewsletterCampaign';

const Dashboard = (props) => {
    return (
        <div className={classNames("dashboard-wrap", { "zoom-out-dash": props.showUserName })} >
            <div className="row">
                <SalesOverview showUserName={props.showUserName} select={props.select} />
                <OurVisitors />
            </div>
            <div className="row">
                <Feeds />
                <NewsletterCampaign showUserName={props.showUserName} />
            </div>
        </div>
    );
}
export default Dashboard;
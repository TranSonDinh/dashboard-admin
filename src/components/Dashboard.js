import SalesOverview from './SalesOverview';
import OurVisitors from './OurVisitors';

const Dashboard = () => {
    return (
        <div className="dashboard-wrap">
            <div className="row">
                <SalesOverview />
                <OurVisitors />
            </div>

        </div>
    );
}
export default Dashboard;
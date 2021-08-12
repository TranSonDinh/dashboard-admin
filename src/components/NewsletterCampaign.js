import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import ChartGloss from "./ChartGloss";

const data = [
    {
        name: '1',
        OpenRate: 0,
        RecurringPayments: 0,
    },
    {
        name: '2',
        OpenRate: 5,
        RecurringPayments: 3,
    },
    {
        name: '3',
        OpenRate: 6,
        RecurringPayments: 4,
    },
    {
        name: '4',
        OpenRate: 8,
        RecurringPayments: 2,
    },
    {
        name: '5',
        OpenRate: 25,
        RecurringPayments: 8,
    },
    {
        name: '6',
        OpenRate: 9,
        RecurringPayments: 1,
    },
    {
        name: '7',
        OpenRate: 8,
        RecurringPayments: 5,
    },
    {
        name: '8',
        OpenRate: 24,
        RecurringPayments: 1,
    },
];
const NewsletterCampaign = (props) => {
    return (<div className="content-wrap">
        <div className="sales-overview_header">
            <div>
                <div><h5>Newsletter Campaign</h5></div>
                <div><p>Overview of Newsletter Campaign</p></div>
            </div>
            <div className="chart-gloss">
                <ChartGloss color="#21c1d6" name="Open Rate" />
                <ChartGloss color="#1e88e5" name="Recurring Payments" />
            </div>
        </div>
        <div>
            <AreaChart
                width={!props.showUserName ? 850 : 760}
                height={250}
                data={data}
                margin={{
                    top: 40,
                    right: 10,
                    left: 0,
                    bottom: 30,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" fontSize={12} fontWeight={900} axisLine={0} tickSize={5} tickMargin={10} />
                <YAxis fontSize={12} fontWeight={900} axisLine={0} tickLine={false} tickMargin={5} />
                <Tooltip />
                <Area type="monotone" dataKey="RecurringPayments" stackId="1" stroke="#1e88e5" fill="#1e88e5" />
                <Area type="monotone" dataKey="OpenRate" stackId="1" stroke="#21c1d6" fill="#21c1d6" />
            </AreaChart>
        </div>
        <div className="row text-center">
            <div className="toltal-data">
                <h4>5098</h4>
                <small>Total Sent</small>
            </div>
            <div className="toltal-data">
                <h4>5098</h4>
                <small>Total Sent</small>
            </div>
            <div className="toltal-data">
                <h4>5098</h4>
                <small>Total Sent</small>
            </div>
        </div>
    </div >);
}
export default NewsletterCampaign;
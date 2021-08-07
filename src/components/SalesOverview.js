import ChartGloss from "./ChartGloss";
import React from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    Line,
    LabelList,
    Cell
} from "recharts";
const data = [
    {
        name: "Mon",
        Ample: 6,
        Pixel: 9,
        amt: 0
    },
    {
        name: "Tue",
        Ample: 3,
        Pixel: 5,
        amt: 0
    },
    {
        name: "Wed",
        Ample: 9,
        Pixel: 3,
        amt: 0
    },
    {
        name: "Thu",
        Ample: 5,
        Pixel: 7,
        amt: 0
    },
    {
        name: "Fri",
        Ample: 4,
        Pixel: 5,
        amt: 0
    },
    {
        name: "Sat",
        Ample: 6,
        Pixel: 10,
        amt: 0
    },
    {
        name: "Sun",
        Ample: 4,
        Pixel: 3,
        amt: 0
    }
];
const SalesOverview = (props) => {
    return (
        <div className="sales-overview-wrap content-wrap">
            <div className="sales-overview_header">
                <div>
                    <div><h5>Sales Overview</h5></div>
                    <div><p>Ample Admin Vs Pixel Admin</p></div>
                </div>
                <div className="chart-gloss">
                    <ChartGloss color="#21c1d6" name="Ample" />
                    <ChartGloss color="#1e88e5" name="Pixel" />
                </div>
            </div>
            <div className="sales-chart">
                <BarChart
                    width={!props.showUserName ? 880 : 700}
                    height={300}
                    data={data}
                    margin={{
                        top: 30,
                        right: 0,
                        left: 0,
                        bottom: 5
                    }}
                >
                    <CartesianGrid strokeDasharray="2.5" horizontal="true" vertical="" />
                    <XAxis dataKey="name" fontWeight="bold" fontSize={12} />
                    <YAxis axisLine={false} tickLine={false} fontSize={12} fontWeight="bold" />
                    <Tooltip cursor={{ fill: "none" }} />
                    <Bar dataKey="Pixel" fill="#1e88e5" barSize={4} />
                    <Bar dataKey="Ample" fill="#21c1d6" barSize={4} />
                </BarChart>
            </div>
        </div>
    );
}
export default SalesOverview;
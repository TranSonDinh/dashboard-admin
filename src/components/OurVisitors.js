import { useState } from 'react';
import { PieChart, Pie, Sector, Cell } from 'recharts';
import ChartGloss from "./ChartGloss";

const data = [
    { name: 'Mobile', value: 10 },
    { name: 'Desktop', value: 40 },
    { name: 'Tablet', value: 30 },
    { name: 'Other', value: 50 },
];
const color = ["#1e88e5", "#7460ee", "#21c1d6", "rgba(236,239,241,1)"];
const renderActiveShape = (props) => {

    const { cx, cy, innerRadius, outerRadius, startAngle, endAngle, payload, value } = props;
    let activeIndex = 3;
    if (payload.name === "Mobile")
        activeIndex = 0;
    if (payload.name === "Desktop")
        activeIndex = 1;
    if (payload.name === "Tablet")
        activeIndex = 2;

    return (
        <g>
            <text x={cx} y={cy} dy={8} textAnchor="middle" fill={color[activeIndex]} fontWeight={900}>
                <tspan x="200" y="130">{payload.name}</tspan>
                <tspan x="200" y="175">{value}</tspan>
            </text>
            <Sector
                cx={cx}
                cy={cy}
                innerRadius={innerRadius}
                outerRadius={outerRadius}
                startAngle={startAngle}
                endAngle={endAngle}
                fill={color[activeIndex]}
                opacity={.7}
            />
        </g>
    );
};
const OurVisitors = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const onPieEnter = (_, index) => {
        setActiveIndex(index);
    };
    return (
        <div className="sales-overview-wrap content-wrap">
            <div className="sales-overview_header">
                <div>
                    <div><h5>Our Visitors</h5></div>
                    <div><p>Different Devices Used to Visit</p></div>
                </div>
            </div>
            <div className="sales-chart">
                <PieChart width={400} height={300}>
                    <Pie
                        activeIndex={activeIndex}
                        activeShape={renderActiveShape}
                        data={data}
                        cx="50%"
                        cy="50%"
                        innerRadius={100}
                        outerRadius={120}
                        fill={color[activeIndex]}
                        dataKey="value"
                        onMouseEnter={onPieEnter}
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={color[index % color.length]} />
                        ))}
                    </Pie>
                </PieChart>
            </div>
            <div className="chart-gloss">
                <ChartGloss color="#1e88e5" name="Mobile" />
                <ChartGloss color="#7460ee" name="Desktop" />
                <ChartGloss color="#21c1d6" name="Tablet" />
            </div>
        </div>
    );
}
export default OurVisitors;
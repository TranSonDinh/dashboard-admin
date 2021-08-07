import { VscCircleFilled } from 'react-icons/vsc';
const ChartGloss = ({ color, name }) => {
    return (
        <span>
            <VscCircleFilled fill={color} />
            <h6 style={{ color: color }}>{name}</h6>
        </span>
    );
}
export default ChartGloss;
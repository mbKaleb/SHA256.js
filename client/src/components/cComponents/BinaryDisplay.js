import { intTo32BitStr } from '../../hooks/converters';

export default function BinaryDisplay({ integer }) {
    if (typeof integer === "number") {
        const binaryString = intTo32BitStr(integer);
        return <div className="w-fit h-3 w-full  ml-2">{binaryString}</div>;
    }
}

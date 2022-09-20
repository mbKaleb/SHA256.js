import { intTo32BitStr } from '../../hooks/converters';

export default function BinaryDisplay({ integer }) {
    if (integer) {
        const binaryString = intTo32BitStr(integer);
        return <div className="w-fit outline outline-1">{binaryString}</div>;
    }
}

import { intTo32BinaryStrArr } from '../../hooks/converters';

export default function intToBiDisplay({ integer }) {
    const binaryString = intTo32BinaryStrArr(integer);
    return <div className="w-fit">{binaryString}</div>;
}

// integer to binary array

const intTo32BinaryStrArr = (integer) => {
    let biStr = Array.from(integer.toString(2));
    if (biStr.length > 32)
        throw Error(
            `${integer} is greater than 32 bits, Input must be 32 or less bits`
        );
    while (biStr.length < 32) biStr.unshift('0');
    return biStr;
};

const intTo64BinaryStrArr = (integer) => {
    let biStr = Array.from(integer.toString(2));
    if (biStr.length > 64)
        throw Error(
            `${integer} is greater than 64 bits, Input must be 64 or less bits`
        );
    while (biStr.length < 64) biStr.unshift('0');
    return biStr;
};

const intToBinary = (integer) => {
    return integer.toString(2);
};

const anyToBinaryStr = (any) => {
    if (typeof any == 'string') {
        let int = parseInt(any);
        return int.toString(2);
    }
};

export { intTo32BinaryStrArr, intTo64BinaryStrArr, anyToBinaryStr };

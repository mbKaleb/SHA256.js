

// integer to binary array

const intTo32BinaryStrArr = (integer) => {
    let BiStr = Array.from(integer.toString(2))
    if (BiStr.length > 32) throw Error(`${integer} is greater than 32 bits, Input must be 32 or less bits`);
    while (BiStr.length < 32) BiStr.unshift('0');
    return BiStr
}


export { intTo32BinaryStrArr };
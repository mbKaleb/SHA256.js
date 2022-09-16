import rotr32 from '@stdlib/number-uint32-base-rotr';

const rotr = (x, num) => {
    return rotr32(x, num);
};

const xOR = (a, b) => {
    let res = '';

    const arrA = Array.from(a.toString(2));
    if (arrA.length > 32) throw Error('Input must be less than 33 bits');
    while (arrA.length < 32) arrA.unshift('0');

    const arrB = Array.from(b.toString(2));
    if (arrB.length > 32) throw Error('Input must be less than 33 bits');
    while (arrB.length < 32) arrB.unshift('0');

    for (let i = 0; i < 32; i++) {
        if (arrA[i] === arrB[i]) res = res + '0';
        else res = res + '1';
    }

    return parseInt(res, 2);
};

export { rotr, xOR };

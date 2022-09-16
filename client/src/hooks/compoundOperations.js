import { rotr, xOR } from './operations';

const lowercaseSigma0 = (x) => {
    let a = rotr(x, 7);
    let b = rotr(x, 18);
    let c = x >> 3;
    let j = xOR(xOR(a, b), c);
    return j
};

const lowercaseSigma1 = (x) => {
    let a = rotr(x, 17);
    let b = rotr(x, 19);
    let c = x >> 10;
    let j = xOR(xOR(a, b), c);
    return j;
}

const uppercaseSigma0 = (x) => {
    let a = rotr(x, 2);
    let b = rotr(x, 13);
    let c = rotr(x, 22)
    let j = xOR(xOR(a, b), c);
    return j;
};

const uppercaseSigma1 = (x) => {
    let a = rotr(x, 6);
    let b = rotr(x, 11);
    let c = rotr(x, 25);

    let j = xOR(xOR(a, b), c);
    return j;
};

export { lowercaseSigma0, lowercaseSigma1, uppercaseSigma0, uppercaseSigma1 };

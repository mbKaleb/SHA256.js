import { rotr } from "./operations";
import { sha256 } from "js-sha256";
var rotr32 = require('@stdlib/number-uint32-base-rotr');



const lowercaseSigma = (x) => {
    let a = rotr(x, 7)
    let b = rotr(x, 18)
    let c = x >> 3
    let k = a ^ b
    console.log("a", Number(a).toString(2))
    console.log("b", Number(b).toString(2))
    console.log("c", Number(c).toString(2))

    

    // console.log(a, b, c)
}

export { lowercaseSigma }
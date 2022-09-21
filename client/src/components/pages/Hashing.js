import { useState, useEffect } from 'react';
import BinaryDisplay from '../cComponents/BinaryDisplay';

export default function Hashing({ initMsg }) {
    const [msgState, setMsgState] = useState([]); //array of integers representing the message

    const [DCS, setDCS] = useState({
        first: false,
        seccond: false,
        third: false,
        fourth: false,
    });

    useEffect(() => {
        if (initMsg) {
            let wArr = Array.from(initMsg);
                
                for (let i = 1; i <= 16; i++) {
                    const bi = (i * 32) -1

                    
                    let ai = bi - 31
                    console.log(ai, bi)
                }
        }
    }, []);

    return (
        <>
            <div>{msgState}</div>
            {/* {<BinaryDisplay integer={5} />} */}
            {/* <div>{msgState.map((integer) => {return intToBiDisplay(integer)})}</div> */}
        </>
    );
}

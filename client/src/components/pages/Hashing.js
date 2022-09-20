import { useState } from 'react';
import BinaryDisplay from '../cComponents/BinaryDisplay';

export default function Hashing({ initMsg }) {
    const [msgState, setMsgState] = useState([]); //array of integers representing the message
    
    return (
        <>
            <div>Words</div>
            {<BinaryDisplay integer={5} />}
            {/* <div>{msgState.map((integer) => {return intToBiDisplay(integer)})}</div> */}
        </>
    );
}

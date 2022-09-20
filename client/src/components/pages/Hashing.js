import { useState } from 'react';
import intToBiDisplay from '../cComponents/intToBiDisplay';

export default function Hashing({ initMsg }) {
    const [msgState, setMsgState] = useState([]); //array of integers representing the message data

    return (
    <>
    <div>Words</div>
    <div>{msgState.map((integer) => {return intToBiDisplay(integer)})}</div>
    </>
    )
}

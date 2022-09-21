import { useState, useEffect } from 'react';
import BinaryDisplay from '../cComponents/BinaryDisplay';
import { bToIn } from '../../hooks/converters';

export default function Hashing({ initMsg }) {
    const [iniMsg, setIniMsg] = useState();
    const [msgState, setMsgState] = useState(null); //array of integers representing the message

    const [DCS, setDCS] = useState({
        first: false,
        seccond: false,
        third: false,
        fourth: false,
    });

    const buildIntArry = (biMsg) => {
        if (biMsg.length !== 512) return;
        const wArr = [];
        for (let i = 1; i <= 16; i++) {
            const bi = i * 32;
            const ai = bi - 32;
            console.log(ai, bi);
            wArr.push(bToIn(biMsg.slice(ai, bi)));
        }
        return wArr;
    };

    useEffect(() => {
        let wArr = Array.from(initMsg);
        setIniMsg(wArr);
        const intArray = buildIntArry(initMsg);
        for (let i = 0; i <= 16; i++) {
            setTimeout(() => {
                setIniMsg((prev) => {
                    return initMsg.slice(i * 32);
                });
                setMsgState((pre) => {
                    return intArray.slice(0,i)
                });
            }, 500 * i + 300);
        }
    }, []);

    return (
        <div className="bg-white outline outline-4 outline-gray-400 h-[75vh] top-24 w-1/2 absolute  ">
            
            <div className="pl-2 text-white font-bold bg-blue-600 border-b-4 border-gray-400">Hashing</div>

            <div className=" p-1 border-t-2 border-l-2 border-black h-[73vh]">
                <div className="break-all text-black">
                    <div className="bg-yellow-50 p-4 absolute bottom right-[0] w-[45%] h-[94.7%] ">
                        <div>Raw Message Binary:</div>
                        <div>{iniMsg}</div>
                    </div>
                </div>
                <div className="outline outline-black rounded bg-black p-2 absolute bottom-1 left-[2] w-[55%] h-[94.6%]">
                    <div>Message:</div>
                    <div>{ msgState ? msgState.map((intVal)=> {return <BinaryDisplay integer={intVal} /> } ) : null }</div>
                </div>
            </div>
        </div>
    );
}

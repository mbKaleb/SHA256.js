import { useState, useEffect } from 'react';
import BinaryDisplay from '../cComponents/BinaryDisplay';
import { bToIn, intTo32BitStr } from '../../hooks/converters';
import {
    lowercaseSigma0,
    lowercaseSigma1,
} from '../../hooks/compoundOperations';

export default function Hashing({ initMsg }) {
    const [iniMsg, setIniMsg] = useState();
    const [msgState, setMsgState] = useState(null); //array of integers representing the message

    const [DCS, setDCS] = useState({
        first: false,
        second: false,
        third: false,
        fourth: false,
    });

    const buildIntArry = (biMsg) => {
        if (biMsg.length !== 512) return;
        const wArr = [];
        for (let i = 1; i <= 16; i++) {
            const bi = i * 32;
            const ai = bi - 32;
            wArr.push(bToIn(biMsg.slice(ai, bi)));
        }
        return wArr;
    };

    const buildWords = () => {
        let wArr = Array.from(initMsg);
        setIniMsg(wArr);
        const intArray = buildIntArry(initMsg);
        for (let i = 0; i <= 16; i++) {
            setTimeout(() => {
                setIniMsg((prev) => {
                    return initMsg.slice(i * 32);
                });
                setMsgState((pre) => {
                    return intArray.slice(0, i);
                });
            }, 500 * i + 300);
        }
    };

    const expandMessage = () => {
        for (let i = 16; i < 63; i++) {
            setTimeout(() => {
                setMsgState((previous) => {
                    let a1 = previous[i - 16];
                    let a2 = lowercaseSigma0(previous[i - 15]);
                    let a3 = previous[i - 7];
                    let a4 = lowercaseSigma1(previous[i - 2]);
                    
                    const word = a1 + a2 + a3 + a4;
                    console.log(a1, a2, a3, a4);
                    
                    const finalInt = bToIn(intTo32BitStr(word));
                    return [...previous, finalInt];
                });
            }, 100 * i);
        }
    };

    useEffect(() => {
        buildWords();
    }, []);

    useEffect(() => {
        if (!!msgState?.[0] && msgState?.[15] && !msgState?.[16]) {
            expandMessage();
        }
    }, [msgState]);

    return (
        <div className="bg-white outline outline-[5px] outline-gray-400 h-[90vh] min-h-fit min-w-fit top-20 left-4 w-1/2 absolute  ">
            <div className="pl-2 text-white font-bold bg-blue-700 border-b-4 border-gray-400">
                Hashing
            </div>
            <div className=" p-1 border-t-2 border-l-2 border-gray-500 h-[73vh]">
                <div className="break-all text-black">
                    <div className="bg-yellow-50 p-4 absolute bottom right-[0] w-[45%] h-[94.7%] ">
                        <div>{iniMsg ? 'Raw Message Binary:' : null}</div>
                        <div>{iniMsg}</div>
                    </div>
                </div>
                <div className="outline outline-black rounded bg-black p-2 absolute bottom-1 left-[2] w-[55%] h-[94.6%]">
                    <div className='font-bold'>Message:</div>
                    <div >
                        {msgState
                            ? msgState?.map((intVal) => {
                                  return <BinaryDisplay integer={intVal} />;
                              })
                            : null}
                    </div>
                </div>
            </div>
        </div>
    );
}

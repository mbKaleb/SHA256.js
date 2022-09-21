import { useState, useEffect } from 'react';
import BinaryDisplay from '../cComponents/BinaryDisplay';

export default function Hashing({ initMsg }) {

    const [iniMsg, setIniMsg] = useState()
    const [msgState, setMsgState] = useState([]); //array of integers representing the message

    const [DCS, setDCS] = useState({
        first: false,
        seccond: false,
        third: false,
        fourth: false,
    });

    useEffect(() => {
        setIniMsg(initMsg)
        if (initMsg) {
            let wArr = Array.from(initMsg);
                for (let i = 1; i <= 16; i++) {
                    const bi = (i * 32) -1
                    const ai = bi - 31
                    setTimeout(() => {
                        setIniMsg((prevState) => {
                            prevState.splice(bi)
                        })
                        

                    }, 1000*i);



                }
        }
    }, []);

    return (
        <div className="bg-white outline outline-4 outline-gray-400 h-screen">
            <div className="pl-2 text-white font-bold bg-blue-600">Hashing</div>
            <div label="content" className=" p-1 border-t-2 border-l-2 border-black">
                <div className="break-all text-black"><div className='font-bold'>Raw Binary:</div> {iniMsg}</div>
                <div className='outline outline-black rounded bg-black'>
                    <div>Message:</div>
                    <div>{ msgState ? msgState.map((intVal)=> {return <BinaryDisplay integer={intVal} /> } ) : null }</div>
                </div>
            </div>
        </div>
    );
}

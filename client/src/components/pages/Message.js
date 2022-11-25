import { useState, useEffect } from 'react';
import { Outlet, useOutletContext } from 'react-router-dom';
import Hashing from './Hashing';

import { anyToBinaryStr, intTo64BinaryStrArr } from '../../hooks/converters';

export default function FirstPage() {
    const [Input] = useOutletContext("");
    
    const [step, setStep] = useState(0)

    const [bytesArr, setBytesArr] = useState(Input.split(""));
    const [binaryDisplay, setBinaryDisplay] = useState([]);


    useEffect(() => {
        //Get Ascii from input
        for(let i=0;i<bytesArr.length;i++){
            setTimeout(()=> {
                
            }, i*450)
        }

        //Get Binary from Ascii
    }, []);

    // useEffect(() => {
    //     //Binary Display Control//
    //     setTimeout(() => {
    //         setDCS((DCS) => ({ ...DCS, third: true }));
    //         let bArr = [...bytesArr].map((byte) => {
    //             return anyToBinaryStr(byte);
    //         });
    //         for (let i = 0; i <= bArr.length - 1; i++) {

    //             setTimeout(() => {
    //                 setBinaryDisplay(bArr.slice(0, i + 1));
    //             }, 300 * i);

    //             if (i === bArr.length - 1) {
    //                 setTimeout(() => {
    //                     setBinaryDisplay((prevState) => {
    //                         if (typeof prevState === 'string') return;
    //                         return prevState ? prevState.join('') : 'empty';
    //                     });
    //                 }, (400 * bArr.length) + 500 );
    //             }
    //         }

    //         setTimeout(() => {
    //             setBinaryDisplay((prevState) => {
    //                 if (typeof prevState === 'string') return prevState + '1';
    //             });
    //         }, 400 * (bArr.length + 1) + 50);

    //         setTimeout(() => {
    //             setBinaryDisplay((prevState) => {
    //                 let padL = 446 - (prevState.length - 1);
    //                 if (typeof prevState === 'string') {
    //                     let padding = '';
    //                     for (let i = 0; i <= padL; i++) {
    //                         padding = padding + '0';
    //                     }
    //                     setInitMsg(
    //                         prevState +
    //                         padding +
    //                         intTo64BinaryStrArr(padL).join('')
    //                     );
    //                     return (
    //                         prevState +
    //                         padding +
    //                         intTo64BinaryStrArr(padL).join('')
    //                     );
    //                 }
    //                 return prevState;
    //             });
    //         }, 400 * (bArr.length + 2));
    //     }, 1500);
    // }, [bytesArr]);

    // useEffect(() => {
    //     if (typeof initMsg === !"string") return null;
    //     if (initMsg){
    //         setDCS((DCS) => ({ ...DCS, fourth: true }));
    //     }
    // }, [initMsg]);

    return (
        <div className="outline outline-3 outline-black rounded h-full w-82 p-2 bg-black text-green-400">
            <div className='font-bold'>Input: {Input}</div>
            <div>ASCII Bytes: {bytesArr.reduce((c, p) => c + p)}</div>
            <div>Message: <div className='break-all'> {binaryDisplay} </div></div>
            {DCS.fourth ? <Hashing initMsg={initMsg} /> : null}
        </div>
    );
}

import { useState, useEffect } from 'react';
import { Outlet, useOutletContext } from 'react-router-dom';
import Hashing from './Hashing';

import { anyToBinaryStr, intTo64BinaryStrArr } from '../../hooks/converters';

export default function FirstPage() {
    const [Input, setInput] = useOutletContext();

    const [initMsg, setInitMsg] = useState();

    let message = '';

    const defaultStr = 'default';

    const [bytesArr, setBytesArr] = useState([]);
    const [binaryDisplay, setBinaryDisplay] = useState([]);

    const [DCS, setDCS] = useState({
        first: true,
        seccond: false,
        third: false,
        fourth: false,
    });


    useEffect(() => {
        setBytesArr([...Input].map((c) => c.charCodeAt(0).toString() + ' '));
        
        setTimeout(() => {
            setDCS((DCS) => ({ ...DCS, seccond: true }));
        }, 1000);
    }, []);

    useEffect(() => {
        //Binary Display Control//
        setTimeout(() => {
            setDCS((DCS) => ({ ...DCS, third: true }));
            let bArr = [...bytesArr].map((byte) => {
                return anyToBinaryStr(byte);
            });
            for (let i = 0; i <= bArr.length - 1; i++) {
                setTimeout(() => {
                    setBinaryDisplay(bArr.slice(0, i + 1));
                }, 300 * i);
                if (i === bArr.length - 1) {
                    setTimeout(() => {
                        setBinaryDisplay((prevState) => {
                            if (typeof prevState === 'string') return;
                            return prevState ? prevState.join('') : 'empty';
                        });
                    }, 400 * bArr.length);
                }
            }

            setTimeout(() => {
                setBinaryDisplay((prevState) => {
                    if (typeof prevState === 'string') return prevState + '1';
                });
            }, 400 * (bArr.length + 1));

            setTimeout(() => {
                setBinaryDisplay((prevState) => {
                    let padL = 446 - (prevState.length - 1);
                    if (typeof prevState === 'string') {
                        let padding = '';
                        for (let i = 0; i <= padL; i++) {
                            padding = padding + '0';
                        }
                        setInitMsg(
                            prevState +
                            padding +
                            intTo64BinaryStrArr(padL).join('')
                        );
                        return (
                            prevState +
                            padding +
                            intTo64BinaryStrArr(padL).join('')
                        );
                    }
                    return prevState;
                });
            }, 400 * (bArr.length + 2));
        }, 1500);
    }, [bytesArr]);

    useEffect(() => {
        if (typeof initMsg === !"string") return null;
        if (initMsg){
            setDCS((DCS) => ({ ...DCS, fourth: true }));
        }
    }, [initMsg]);

    return (
        <div className="outline outline-3 outline-black rounded h-full w-82 p-2 bg-black text-green-400">
            <div className='font-bold'>Input: {Input || null}</div>
            <div>ASCII Bytes: {DCS.seccond ? (bytesArr.reduce((c, p) => c + p)) : null}</div>
            <div>Message: <div className='break-all'>{DCS.third ? binaryDisplay : null}</div></div>
            {DCS.fourth ? <Hashing initMsg={initMsg} /> : null}
        </div>
    );
}

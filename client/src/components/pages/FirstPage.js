import { useState, useEffect } from 'react';
import { Outlet, useOutletContext } from 'react-router-dom';

import { anyToBinaryStr } from '../../hooks/converters';

export default function FirstPage() {
    const [Input, setInput] = useOutletContext();

    let message = '';

    const defaultStr = 'default';

    const [bytesArr, setBytesArr] = useState([]);
    const [binaryDisplay, setBinaryDisplay] = useState([]);

    const [DCS, setDCS] = useState({
        first: false,
        seccond: false,
        third: false,
    });

    useEffect(() => {
        setTimeout(() => {
            setDCS({ ...DCS, first: true });
            setBytesArr(
                [...Input].map((c) => c.charCodeAt(0).toString() + ' ')
            );
        }, 100);

        setTimeout(() => {
            setDCS((DCS) => ({ ...DCS, seccond: true }));
        }, 1000);
    }, []);

    useEffect(() => {
        setTimeout(() => {
            setDCS((DCS) => ({ ...DCS, third: true }));
            let bArr = [...bytesArr].map((byte) => {
                return anyToBinaryStr(byte);
            });

            for (let i = 0; i <= bArr.length -1; i++) {
                setTimeout(() => {
                    setBinaryDisplay(bArr.slice(0, i + 1));
                }, 300 * i);
                if (i === bArr.length -1 ){
                  setTimeout(() => {
                      setBinaryDisplay((prevState)=>{
                        if (typeof prevState === "string") return;
                        return prevState ? prevState.join('') : 'empty'
                      })
                  }, 500 * bArr.length);
                }
            }
        }, 1500);
    }, [bytesArr]);

    return (
        <>
            {DCS.first ? <div>Input: {Input}</div> : null}
            {DCS.seccond ? (
                <div>ASCII Bytes: {bytesArr.reduce((c, p) => c + p)}</div>
            ) : null}
            {DCS.third ? <div>{binaryDisplay}</div> : null}
        </>
    );
}
// first padd it out to 512 bits, 512 - message - 1 - 64 (length of message)
// each block gets a schedule

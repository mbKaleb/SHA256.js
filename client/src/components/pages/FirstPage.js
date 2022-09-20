import { useState, useEffect } from 'react';
import { Outlet, useOutletContext } from 'react-router-dom';
import Hashing from './Hashing';

import { anyToBinaryStr, intTo64BinaryStrArr } from '../../hooks/converters';

export default function FirstPage() {
    const [Input, setInput] = useOutletContext();

    const [initMsg, setInitMsg] = useState()

    let message = '';

    const defaultStr = 'default';

    const [bytesArr, setBytesArr] = useState([]);
    const [binaryDisplay, setBinaryDisplay] = useState([]);

    const [DCS, setDCS] = useState({
        first: false,
        seccond: false,
        third: false,
        fourth: false,
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
                        console.log(padL);
                        let padding = '';
                        for (let i = 0; i <= padL; i++) {
                            padding = padding + '0';
                        }
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

    return (
        <div className="outline outline-1 h-full w-96">
            {DCS.first ? <div>Input: {Input}</div> : null}
            {DCS.seccond ? (
                <div>ASCII Bytes: {bytesArr.reduce((c, p) => c + p)}</div>
            ) : null}
            {DCS.third ? (
                <div className="break-all">{binaryDisplay}</div>
            ) : null}
            {DCS.fourth ? <Hashing initMsg={initMsg} /> : null}
        </div>
    );
}
// first padd it out to 512 bits, 512 - message - 1 - 64 (length of message)
// each block gets a schedule

import { useState, useEffect } from 'react';
import { Outlet, useOutletContext } from 'react-router-dom';

import { rotr } from '../../hooks/operations';

import { lowercaseSigma0 } from '../../hooks/compoundOperations';

export default function FirstPage() {
    const [Input, setInput] = useOutletContext();
    const defaultStr = 'default';
    const [DCS, setDCS] = useState({
        first: false,
        seccond: false,
        third: false,
    });

    useEffect(() => {
        setTimeout(() => {
            setDCS({ ...DCS, first: true });
        }, 100);

        setTimeout(() => {
            setDCS((DCS) => ({ ...DCS, seccond: true }));
        }, 1000);
    }, []);

    return (
        <>
            {DCS.first ? <div>Input: {Input}</div> : null}
            {DCS.seccond ? (
                <div>
                    Binary Bytes:{' '}
                    {[...(Input || defaultStr)]
                        .map((c) => c.charCodeAt(0).toString() + ' ')
                        .reduce((c, p) => c + p)}
                </div>
            ) : null}
            <div>{lowercaseSigma0(Input)}</div>
        </>
    );
}
// first padd it out to 512 bits, 512 - message - 1 - 64 (length of message)
// each block gets a schedule

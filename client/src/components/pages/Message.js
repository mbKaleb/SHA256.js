import { useState, useEffect } from 'react';
import { Outlet, useOutletContext, useSearchParams } from 'react-router-dom';
import Hashing from './Hashing';

import { anyToBinaryStr, intTo64BinaryStrArr } from '../../hooks/converters';
import BinaryDisplay from '../cComponents/BinaryDisplay';

export default function FirstPage() {
    const [Input] = useOutletContext("");
    
    const [step, setStep] = useState(0)

    const [bytesArr, setBytesArr] = useState(Input.split(""));
    const [binaryDisplay, setBinaryDisplay] = useState([]);

    useEffect(() => {
        //Get Ascii from input
        for (let i=0;i<=bytesArr.length -1;i++){
            setTimeout(()=> {
                setBytesArr((state)=>{
                    let newState = [...state]
                    if (typeof newState[i] === "string") newState[i] = (newState[i]).charCodeAt(0);
                    if (i === bytesArr.length-1 && step === 0) setStep(1);
                    return newState
                })
            }, (i*500) + 500 );
        }
    }, []);

    useEffect(() => {
        console.log('step:', step)

        //Get Binary from ASCII
        if (step === 1){
            let newArray = []
            bytesArr.forEach((i, index)=>{ newArray[index] = bytesArr[index].toString() });
            console.log(newArray)

            setBinaryDisplay(newArray)

            for (let i=0;i<=bytesArr.length-1;i++){
                setTimeout(()=> {
                    setBinaryDisplay((state)=> {
                        console.log(state)
                        // if (typeof newState[i] === 'number' ) newState[i] = newState[i].toString(2);
                        // return newState
                    })
                }, (i+500) + 450)
            }
        }
        if (step === 2){
        }
    }, [step])

    useEffect(() => {
    //   console.log("binaryDisplay", binaryDisplay)
    }, [binaryDisplay])
    

    return (
        <div className="outline outline-3 outline-black rounded h-full w-82 p-2 bg-black text-green-400">
            <div className='font-bold'>Input: {Input}</div>
            <div>ASCII Bytes: {bytesArr.map(letter => {return(<>{letter + " " }</>)})}</div>
            <div>Message: { binaryDisplay } </div>
            {/* {<Hashing initMsg={Input} />} */}
        </div>
    );
}

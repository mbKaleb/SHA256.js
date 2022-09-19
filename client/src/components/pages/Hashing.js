import { useState } from "react";

export default function Hashing({ initMsg }) {

    const [msgState, setMsgState] = useState([]);

    

    return <div>{ initMsg || 'error' }</div>;
}

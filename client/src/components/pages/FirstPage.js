import { useOutletContext } from "react-router-dom"
import { rotr } from "../../hooks/operations";

import { lowercaseSigma } from "../../hooks/compoundOperations";

export default function FirstPage() {

  const [Input, setInput] = useOutletContext();

  console.log(Input)

  
  
  const binary1 = 2030347209
  const binary2 = 1
  lowercaseSigma(16383);
  console.log(rotr(binary1, 1))

  // console.log(binary2 << 1)
  
  return (
    <div>{Input}</div>
  )
}

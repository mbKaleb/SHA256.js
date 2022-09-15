import { useOutletContext } from "react-router-dom"
import { rotr } from "../../hooks/operations";

import { lowercaseSigma0 } from "../../hooks/compoundOperations";

export default function FirstPage() {

  const [Input, setInput] = useOutletContext();

  console.log(Input)

  
  
  const binary1 = 2030347209
  const binary2 = 1
  console.log(lowercaseSigma0(16383))
  return (
    <div>{Input}</div>
  )
}

import { useOutletContext } from "react-router-dom"

export default function FirstPage() {

  const [Input, setInput] = useOutletContext();
  console.log(Input)
  return (
    <div>{Input}</div>
  )
}

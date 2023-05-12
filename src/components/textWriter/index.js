import { Text1 } from "./Text1"
import { Text2 } from "./Text2"

export const TextWriter = ({ text1, text2 }) => {
  return (
    <div>
      <Text1 text={text1} />
      <Text2 text={text2}/>
    </div>
  )
}
import { useState } from "react"

type Props = {
    name: String
    setValue:(value:number)=>void
    minimum: number
    defaultValue: number
}

const NumericalInputField = ({name, minimum, setValue, defaultValue}: Props) => {
  const [inputValue, setInputValue] = useState<string>(String(defaultValue))
  return (
    <label>
      {name} 
        <input
          type='number' 
          value={inputValue} 
          name='workMinutes' 
          min={10} 
          step={1}
          onChange={(e)=> {
            const value = e.target.value;
            if (/^\d*$/.test(value)) {
            setInputValue(value);
            }
          }}
          onBlur={()=>{
            const numValue = Number(inputValue)
            if(numValue < minimum || !numValue){
              setInputValue(String(minimum))
              setValue(minimum)
            }else{
              setInputValue(String(numValue))
              setValue(numValue)
            }
          }}
          >
        </input>
    </label>
  )
}

export default NumericalInputField 
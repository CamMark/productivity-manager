import { XMarkIcon } from '@heroicons/react/16/solid';
import { useState } from 'react';

type Props = {
    workMinutes: number
    breakMinutes: number
    setWorkMinutes: (value: number)=>void;
    setBreakMinutes: (value: number)=>void;
    toggleMenu:()=>void 
}

const SettingsMenu = ({setWorkMinutes, workMinutes, setBreakMinutes, breakMinutes, toggleMenu}: Props) => {
    const [workInput, setWorkInput] = useState<string>("25")
    const [breakInput, setBreakInput] = useState<string>("5")

  return (
    <div className='fixed left-0 top-0 z-40 h-full w-full bg-primary-100 drop-shadow-xl'>
        <label>
            Work Minutes 
            <input
             type='number' 
             value={workInput} 
             name='workMinutes' 
             min={10} 
             step={1}
             onChange={(e)=> {
                const value = e.target.value;
                if (/^\d*$/.test(value)) {
                    setWorkInput(value);
                }
                }}
             onBlur={()=>{
                const numValue = Number(workInput)
                if(numValue < 10 || !numValue){
                    setWorkInput("10")
                    setWorkMinutes(10)
                }else{
                    setWorkInput(String(numValue))
                    setWorkMinutes(numValue)
                }
             }}
             >
            </input>
        </label>
        <label>
            Break Minutes 
            <input
             type='number' 
             value={breakInput} 
             name='breakMinutes'  
             min={1}
             step={1}
             onChange={(e)=> {
                const value = e.target.value;
                if (/^\d*$/.test(value)) {
                    setBreakInput(value);
                }
                }}
             onBlur={()=>{
                const numValue = Number(breakInput)
                if(numValue < 1 || !numValue){
                    setBreakInput("1")
                    setBreakMinutes(1)
                }else{
                    setBreakInput(String(numValue))
                    setBreakMinutes(numValue)
                }
             }}>
            </input>
        </label>
        <button onClick={() => toggleMenu()}>
          <XMarkIcon className="h-6 w-6 text-gray-400"/>
        </button>
    </div>
  )
}

export default SettingsMenu
import { XMarkIcon } from '@heroicons/react/16/solid';
import { useState } from 'react';
import NumericalInputField from './NumericalInputField ';

type Props = {
    workMinutes: number
    breakMinutes: number
    setWorkMinutes: (value: number)=>void;
    setBreakMinutes: (value: number)=>void;
    toggleMenu:()=>void 
}

const SettingsMenu = ({setWorkMinutes, workMinutes, setBreakMinutes, breakMinutes, toggleMenu}: Props) => {
  return (
    <div className='fixed left-0 top-0 z-40 h-full w-full bg-primary-100 drop-shadow-xl'>
        <NumericalInputField name={"Work Timer Minutes"} setValue={setWorkMinutes} minimum={10} defaultValue={25}></NumericalInputField>
        <NumericalInputField name={"Break Timer Minutes"} setValue={setBreakMinutes} minimum={1} defaultValue={5}></NumericalInputField>
        <button onClick={() => toggleMenu()}>
          <XMarkIcon className="h-6 w-6 text-gray-400"/>
        </button>
    </div>
  )
}

export default SettingsMenu
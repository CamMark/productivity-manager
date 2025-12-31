import { ArrowPathIcon } from "@heroicons/react/24/solid"

type Props = {
    resetTimer:()=>void 
}

const ResetButton = ({resetTimer}: Props) => {
  
  return (
    <button className="bg-secondary-500 p-10 rounded-md"
    onClick={()=> resetTimer()}
    >
        <ArrowPathIcon className="h-6 w-6 text-secondary-300" />
    </button>
  )
}

export default ResetButton
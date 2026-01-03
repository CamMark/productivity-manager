import { Cog6ToothIcon } from "@heroicons/react/24/solid"

type Props = {
    toggleMenu:()=>void 
}

const SettingsButton = ({toggleMenu}: Props) => {
  
  return (
    <button className="bg-secondary-500 p-10 rounded-md"
    onClick={()=> toggleMenu()}
    >
        <Cog6ToothIcon className="h-6 w-6 text-secondary-300" />
    </button>
  )
}

export default SettingsButton
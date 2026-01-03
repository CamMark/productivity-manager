import { PlayIcon, PauseIcon} from "@heroicons/react/24/solid"

type Props = {
    isPlaying: boolean;
    setIsPlaying:(value: boolean) => void;
}

const PlayPauseButton = ({isPlaying, setIsPlaying}: Props) => {
  
  return (
    <button className="bg-secondary-500 p-10 rounded-md "
    onClick={()=> setIsPlaying(!isPlaying)}
    >
        {isPlaying ? 
        (<PauseIcon className="h-6 w-6 text-secondary-300"/>): 
        (<PlayIcon className="h-6 w-6 text-secondary-300"/>)
        }
    </button>
  )
}

export default PlayPauseButton
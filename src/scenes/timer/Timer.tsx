import { useEffect, useRef, useState } from "react";
import PlayPauseButton from "./PlayPauseButton";
import ResetButton from "./ResetButton";

type Props = {}

const Timer = () => {
    const defaultMinute = 0;
    const defaultSeconds = 5;
    const initialTime = defaultMinute*60 + defaultSeconds
    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    const [timeRemaining, setTimeRemaining] = useState<number>(initialTime);
    
    const intervalRef = useRef<number | null>(null);
    //const [minutes, setMinutes] = useState<number>(25);
    //const [seconds, setSeconds] = useState<number>(0);


    useEffect(() => {
        if(isPlaying){
            startTimer();
        }else{
            pauseTimer();
        }
    }, [isPlaying])


    function startTimer(){
        if (intervalRef.current !== null) return;

        intervalRef.current = setInterval(()=>{
            setTimeRemaining((timeRemaining)=> {
                if(timeRemaining<=0){
                    resetTimer();
                    return 0;
            }
            return timeRemaining-1;
        })
        }, 1000);
    }

    function pauseTimer(){
        clearInterval(intervalRef.current!);
    }

    function resetTimer(){
        //Ajouter un composant Pop-up de confirmation
        clearInterval(intervalRef.current!)  
        intervalRef.current = null;
        setIsPlaying(false);
        setTimeRemaining(initialTime);
    }


    return(
        <section id="home" className="gap-16 bg-gray-20 z-10 py-10 md:h-full md:pb-0">
            <div className="mt-32 md:flex mx-auto w-5/6 items-center justify-center md:h-5/6">
                <p>{`${String(Math.floor(timeRemaining / 60)).padStart(2, "0")} :
                ${String(timeRemaining % 60).padStart(2, "0")}`}</p>
                <PlayPauseButton isPlaying={isPlaying} setIsPlaying = {setIsPlaying}></PlayPauseButton>
                <ResetButton resetTimer={ resetTimer}></ResetButton>
           </div>
        </section>
    )
}

export default Timer
import { useEffect, useRef, useState } from "react";
import PlayPauseButton from "./PlayPauseButton";

type Props = {}

const Timer = () => {
    const defaultMinute = 0;
    const defaultSeconds = 5;
    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    const [timeRemaining, setTimeRemaining] = useState<number>(defaultMinute*60 + defaultSeconds);
    
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
                    clearInterval(intervalRef.current!)  //jsp si c'est legit
                    intervalRef.current = null;
                    setIsPlaying(false);
                    return 0;
            }
            return timeRemaining-1;
        })
        }, 1000);
    }

    function pauseTimer(){
        clearInterval(intervalRef.current!);
    }
    
    return(
        <section id="home" className="gap-16 bg-gray-20 z-10 py-10 md:h-full md:pb-0">
            <div className="mt-32 md:flex mx-auto w-5/6 items-center justify-center md:h-5/6">
                <p>{`${String(Math.floor(timeRemaining / 60)).padStart(2, "0")} :
                ${String(timeRemaining % 60).padStart(2, "0")}`}</p>
                <PlayPauseButton isPlaying={isPlaying} setIsPlaying = {setIsPlaying}></PlayPauseButton>
           </div>
        </section>
    )
}

export default Timer
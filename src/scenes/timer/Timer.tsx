import { useEffect, useRef, useState } from "react";
import PlayPauseButton from "./PlayPauseButton";
import ResetButton from "./ResetButton";
import SettingsButton from "./SettingsButton";
import SettingsMenu from "./SettingsMenu";
import Clock from "./clock";

type Props = {}

const Timer = () => {
    //const defaultMinute = 0;
    //const [seconds, setSeconds] = useState<number>(0);
    const [isSettingsOpen, setIsSettingsOpen] = useState<boolean>(false);
    const defaultSeconds = 5;
    const [workMinutes, setWorkMinutes] = useState<number>(25);
    const [breakMinutes, setBreakMinutes] = useState<number>(5);
    const initialWorkTime = workMinutes*60 + defaultSeconds;
    const initialBreakTime = breakMinutes*60+defaultSeconds;
    const [timeRemaining, setTimeRemaining] = useState<number>(initialWorkTime);
    const [isWorkTime, setIsWorkTime] = useState<boolean>(true);
    
    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    const intervalRef = useRef<number | null>(null);
   


    useEffect(() => {
        if(isPlaying){
            startTimer();
        }else{
            pauseTimer();
        }
    }, [isPlaying])

    useEffect(()=>{
        isWorkTime ? setTimeRemaining(initialWorkTime) : setTimeRemaining(initialBreakTime)
    },[breakMinutes, workMinutes, isWorkTime] )


    function startTimer(){
        if (intervalRef.current !== null) return;

        intervalRef.current = setInterval(()=>{
            setTimeRemaining((timeRemaining)=> {
                if(timeRemaining<=0){
                    toggleWorkBreakTimer();
                    //resetTimer();
                    return 0;
            }
            return timeRemaining-1;
        })
        }, 1000);
    }

    function pauseTimer(){
        clearInterval(intervalRef.current!);
        intervalRef.current = null;
    }
    
    function toggleWorkBreakTimer(){
        clearInterval(intervalRef.current!)  
        intervalRef.current = null;
        setIsPlaying(false);
        setIsWorkTime(!isWorkTime)
        setTimeRemaining(initialWorkTime);
    }

    function resetTimer(){
        //Ajouter un composant Pop-up de confirmation
        clearInterval(intervalRef.current!)  
        intervalRef.current = null;
        setIsPlaying(false);
        setTimeRemaining(initialWorkTime);
        setIsWorkTime(true)
    }

    function toggleMenu(){
        setIsSettingsOpen(!isSettingsOpen);
    }
    
    return(
        <section id="home" className="gap-16 bg-gray-20 z-10 py-10 md:h-full md:pb-0">
            <div className="mt-32 md:flex mx-auto w-5/6 items-center justify-center md:h-5/6">
                {isWorkTime ? 
                <Clock timeRemaining={timeRemaining}></Clock> :
                <Clock timeRemaining={timeRemaining}></Clock>}
                <PlayPauseButton isPlaying={isPlaying} setIsPlaying = {setIsPlaying}></PlayPauseButton>
                <ResetButton resetTimer={ resetTimer}></ResetButton>
                <SettingsButton toggleMenu={toggleMenu}></SettingsButton>
                {isSettingsOpen? <SettingsMenu toggleMenu={toggleMenu} breakMinutes={breakMinutes} setBreakMinutes={setBreakMinutes} workMinutes={workMinutes} setWorkMinutes={setWorkMinutes}></SettingsMenu> 
                : ""}
           </div>
        </section>
    )
}

export default Timer
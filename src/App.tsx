import Navbar from "@/scenes/navbar/navbar";
import { useEffect, useState } from "react";
import { SelectedPage } from "@/shared/types"
import Timer from "./scenes/timer/timer";



function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home)
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0){
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }else{
        setIsTopOfPage(false);
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll)
    
  }, []);

  return (
    <div className="app bg-gray-20 min-h-screen w-full font-dmsans text-gray-500">
      <Navbar
        isTopOfPage = {isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Timer></Timer>
    </div>
      
    
  )
}

export default App

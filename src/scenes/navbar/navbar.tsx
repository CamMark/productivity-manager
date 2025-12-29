import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Link from "./link";
import type { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton";
//import Logo from "@/assets/Logo.png"


type Props = {
  isTopOfPage: boolean;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
}

const Navbar = ({isTopOfPage, selectedPage, setSelectedPage}: Props) => {
  const flexBetween = "flex item-center justify-between"
  const [isMenuToggled, setIsMenuToggled] = useState<Boolean>(false)
  const isAboveMediumScreen = useMediaQuery("(min-width: 1600px")
  const navbarBackground = isTopOfPage ? "" : "bg-cyan-100 drop-shadow"

  return (
    <nav>
      <div className={`${navbarBackground} ${flexBetween} fixed top-0  z-30 w-full py-6`}>
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            <img alt="Logo" /> {/* src= {logo} dans le img tag*/}

            {/* à droite du Logo */}
            {isAboveMediumScreen ? (
              <div className={`${flexBetween} w-full `}>
                <div className={`${flexBetween} gap-8 text-sm`}>
                  <Link 
                  page = "Home" 
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                  />
                  <Link 
                  page ="About"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                  />
                  <Link 
                  page = "Contact Us"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                  />

                </div>
                <div className={`${flexBetween} gap-8`}>
                  <p>Sign In</p>
                  <ActionButton setSelectedPage={setSelectedPage}>Start Now</ActionButton>
                </div>
              </div>)
              : (
                <button
                className="rounded-full bg-amber-400 p-2"
                onClick={() => setIsMenuToggled(!isMenuToggled)}
                >
                  <Bars3Icon className="h-6 w-6 text-white"/>
                </button>
              )}
          </div>
        </div>
      </div>

      {/*MENU MOBILE MODAL*/}
      {!isAboveMediumScreen && isMenuToggled && (
        <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-amber-200 drop-shadow-xl">
          {/* FERMER */}
          <div className="flex justify-end p-12">
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <XMarkIcon className="h-6 w-6 text-gray-400"/>
            </button> 
          </div>

          {/* LIENS DU MENU */}
          <div className="ml-[33%] flex flex-col gap-10 text-2xl">
            <Link 
            page = "Home" 
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
            />
            <Link 
            page ="About"
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
            />
            <Link 
            page = "Contact Us"
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
            />

          </div>
        </div>
      )}
    </nav>
  )
}
export default Navbar;
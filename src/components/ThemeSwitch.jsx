import { useState } from "react"
import useTheme from "../hooks/useTheme";

import { BiMoon } from "react-icons/bi";
import { BiSun } from "react-icons/bi";

const ThemeSwitch = () => {
  const { handleTheme } = useTheme()
  const [toggle, setToggle] = useState( false )
  const handleSwitch = () => {
    setToggle( !toggle )
    handleTheme()
  }
  return (
    <div className={`transition-all duration-500 w-12 h-6 rounded-xl relative ${toggle ? 'bg-amber-600' : 'bg-purple-600'}`}
      onClick={handleSwitch}>
      <div className={`font-black flex items-center justify-center transition-all duration-500 h-6 w-6 ${toggle ? 'bg-amber-900' : 'bg-purple-900'} rounded-full ${toggle ? 'translate-x-6' : '-translate-x-0'}`}>
        {
          toggle
            ? <BiSun className="text-white" />
            : <BiMoon className="text-white" />
        }

      </div>
    </div>
  )
}
export default ThemeSwitch
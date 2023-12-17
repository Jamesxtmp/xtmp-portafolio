import { useEffect, useState } from "react"

function App () {
  const [theme, setTheme] = useState( 'dark' )
  useEffect( () => {
    if ( theme == 'dark' ) document.querySelector( 'body' ).classList.add( 'dark' )
    if ( theme == 'light' ) document.querySelector( 'body' ).classList.remove( 'dark' )
  }, [theme] )

  const handleTheme = () => {
    setTheme( () => {
      return theme == 'dark' ? 'light' : 'dark'
    } )
  }

  return (
    <div className="dark:bg-slate-800 w-full h-[100vh]">
      <div className="w-full h-full flex items-center justify-center">
        <button className="p-4 rounded-lg bg-amber-200 dark:bg-amber-700 dark:text-white " onClick={handleTheme} >Change</button>
      </div>
    </div>
  )
}

export default App

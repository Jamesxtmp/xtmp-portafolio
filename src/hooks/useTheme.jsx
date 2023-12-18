import { useEffect, useState } from "react"

export default function useTheme () {
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
  return {
    handleTheme
  }
}

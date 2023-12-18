import useTheme from "./hooks/useTheme"

import { Link, Route } from "wouter";
import Home from "./pages/Home";
import About from "./pages/About";

function App () {
  const { handleTheme } = useTheme()
  return (
    <div className="dark:bg-[#0d1117] w-full h-[100vh] dark:text-white">
      <nav>
        <Link href="/home">
          <a className="">Home</a>
        </Link>
        <Link href="/about">
          <a className="">About</a>
        </Link>
      </nav>
      <Route path="/home" component={Home} ></Route>
      <Route path="/about" component={About} ></Route>
      {/* <Route path="/users/:name">{( params ) => <div>Hello, {params.name}!</div>}</Route> */}
      <button
        className="p-4 rounded-lg bg-amber-200 dark:bg-amber-700 dark:text-white "
        onClick={handleTheme}
      > Change
      </button>
    </div>
  )
}

export default App
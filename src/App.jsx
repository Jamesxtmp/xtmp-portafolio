import { Route } from "wouter";
import { Background } from "./components/Background";

import ThemeSwitch from "./components/ThemeSwitch";

import Home from "./pages/Home";
import About from "./pages/About";

function App () {
  return (
    <div>
      <Background>
        <div className="w-full flex justify-end p-5">
          <ThemeSwitch />
        </div>
        <Route path="/" component={Home} ></Route>
        <Route path="/about" component={About} ></Route>
        {/* <Route path="/users/:name">{( params ) => <div>Hello, {params.name}!</div>}</Route> */} 
      </Background>
    </div>
  )
}

export default App 
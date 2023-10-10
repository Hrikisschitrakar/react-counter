import { useState } from 'react'
import './App.css'
import Display_component from './Display_component'
import Buttongroup from './button_group'
import DemoComponent from './DemoComponent'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      {/* <Display_component count = {count} setCount = {setCount}></Display_component>
      <Buttongroup count = {count} setCount = {setCount}></Buttongroup>  */}
      <DemoComponent count = {count} setCount = {setCount}></DemoComponent>
    </div>

  )
}

export default App

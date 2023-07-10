import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {NavBar} from "./components/NavBar/NavBar"
import { Item } from './components/Item/Item'
import {ItemListContainer} from "./components/ItemListContainer/ItemListContainer"





function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <NavBar />
        <ItemListContainer greeting={"Bienvenidos"} />
        <Item/>
        
      </div>
      
      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        
      </div> */}
    </>
  )
}

export default App

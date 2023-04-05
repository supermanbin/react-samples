import { useState, useRef, useEffect } from 'react'
import { Graph } from '@antv/x6'
import './App.css'
import '@antv/x6-react-shape'

let graph = null;

function App() {
  const container = useRef(null)
  
  useEffect(() => {
    graph = new Graph({
      container: container,
      // width: 
    })
    return () => {
      cleanup
    }
  }, [input])

  return (
    <div ref={container} className="App">
      
    </div>
  )
}

export default App

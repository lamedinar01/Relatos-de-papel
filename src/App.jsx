/* eslint-disable no-unused-vars */
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {AppRouter} from './router/appRouter'
// import './App.css'

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <AppRouter />
      </div>
    </>
  )
}

export default App

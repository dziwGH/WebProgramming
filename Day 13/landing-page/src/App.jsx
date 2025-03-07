import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="min-h-screen bg-gray-300 justify-center flex flex-col items-center p-6">
        <header className="text-center m-6
        ">
          <h1 className="text-4xl font-bold text-gray-800">Welcome to my Landing Page</h1>
          <p className="text-gray-600 m-2">Discover more about what I do</p>
        </header>

        <main className="max-w-3xl bg-white mt-2 rounded-2xl shadow-lg text-center p-3">
          <p className="text-gray-600 mb-4">I like car soccer!</p>

          <button className="bg-blue-400 text-white hover:bg-blue-800 p-1.5 rounded-2xl">Get Started</button>

        </main>

        <footer className="text-center text-gray-700 mt-2.5"> All rights reserved </footer>
      </div>
    </>
  )
}

export default App

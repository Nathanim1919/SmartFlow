import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Home from './pages/Home'
import Status from './components/Status'
import Features from './components/Features'
import ChatbotsType from './components/ChatbotsType'
import Services from './components/Services'
import About from './components/About'
import CalltoAction from './components/CalltoAction'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Home/>
      <About/>
      <Status/>
      <Features/>
      <ChatbotsType/>
      <Services/>
      <CalltoAction/>
    </>
  )
}

export default App;


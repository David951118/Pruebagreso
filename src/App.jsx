import { useState } from 'react'
import HeaderIndex from './components/HeaderIndex'
import Index from './components/Index'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <HeaderIndex />
      <Index />
      <Footer />

    </>
  )
}
export default App

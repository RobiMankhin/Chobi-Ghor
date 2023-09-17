import './App.css'
import Navbar from './COMPONENTS/Navbar'
import {  BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Footer from './COMPONENTS/Footer'
import Menu from './pages/Menu'
import AboutUs from './pages/AboutUs'
import Contact from './pages/Contact'

function App() {
  
  return (
    <>
      <div>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' Component={Home}/>
          <Route path='/menu' Component={Menu}/>
          <Route path='/about' Component={AboutUs}/>
          <Route path='/contact' Component={Contact}/>
        </Routes>
        <Footer/>
        </Router>
      </div>
    </>
  )
}

export default App
// const [count, setCount] = useState(0)
{/* <>
<div>
    <a href="https://vitejs.dev" target="_blank">
      <img src={viteLogo} className="logo" alt="Vite logo" />
    </a>
    <a href="https://react.dev" target="_blank">
      <img src={reactLogo} className="logo react" alt="React logo" />
    </a>
  </div>
  <h1>Vite + React</h1>
  <div className="card">
    <button onClick={() => setCount((count) => count + 1)}>
      count is {count}
    </button>
    <p>
      Edit <code>src/App.jsx</code> and save to test HMR
    </p>
  </div>
  <p className="read-the-docs">
    Click on the Vite and React logos to learn more
  </p>
</> */}

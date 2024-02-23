import { Outlet } from 'react-router-dom';
import Navigation from './components/navigation'
import './App.css'

function App() {
  return (
    <>
      <Navigation />
      <Outlet />
    </>
  )
}

export default App
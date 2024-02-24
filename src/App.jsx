import { Outlet } from 'react-router-dom';
import Navigation from './components/navigation'
import Footer from './components/ui/footer'

function App() {
  return (
    <>
      <Navigation />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
import { Outlet } from 'react-router-dom'
import { Header } from './components/Header'
import { Footer } from './components/Footer'

function App() {

  return (
    <main className='w-full flex flex-col content-stretch h-screen overflow-y-auto' >
      <Header />
      <div className='flex-1'>
        <Outlet />
      </div>
      <Footer />
    </main>
  )
}

export default App

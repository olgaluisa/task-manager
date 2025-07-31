import Sidebar from './components/Sidebar'
import Tasks from './components/Tasks'
import { Toaster } from 'sonner'

function App() {
  return (
    <main className="flex">
      <Toaster
        toastOptions={{
          style: {
            color: '#35383e',
          },
        }}
      />
      <Sidebar />
      <Tasks />
    </main>
  )
}

export default App

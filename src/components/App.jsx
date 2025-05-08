import { Toaster } from 'sonner'
import Sidebar from './Sidebar'
import Tasks from './Tasks'

function App() {
  return (
    <div className="flex">
      <Toaster toastOptions={{
        style: {
          color: '#35383E'
        }
      }}/>
      <Sidebar />
      <Tasks />
    </div>
  )
}

export default App

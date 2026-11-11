import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HelloWorldPage } from './pages/HelloWorldPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HelloWorldPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

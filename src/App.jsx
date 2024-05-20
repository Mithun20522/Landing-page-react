import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Vibe from './pages/Vibe'
import PageNotFound from './pages/Error'
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Vibe/>} />
        <Route path='*' element={<PageNotFound/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
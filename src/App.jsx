
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Blog from './pages/BlogPage'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </>

  )
}

export default App
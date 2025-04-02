import  { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from "./components/Home"
import Work from "./components/Work"
import Contact from "./components/Contact"

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
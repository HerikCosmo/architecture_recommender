import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Navigation } from "./components/Navigation"
import { MainPage } from "./pages/MainPage"
import { AttributesPage } from "./pages/AttributesPage"
import { PatternsPage } from "./pages/PatternsPage"

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
        <Navigation />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/attributes" element={<AttributesPage />} />
          <Route path="/patterns" element={<PatternsPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App

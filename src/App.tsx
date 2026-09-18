import { lazy, Suspense, useEffect } from "react"
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"
import Home from "./pages/home"

const AllProjects = lazy(() => import("./pages/allproject"))

function ScrollToTop() {
  const location = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [location.pathname])
  return null
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/project"
          element={
            <Suspense fallback={null}>
              <AllProjects />
            </Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App

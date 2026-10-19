import { lazy, Suspense, useLayoutEffect } from "react"
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"
import Home from "./pages/home"
import { ScrollProgress } from "@/components/ScrollProgress"
import { scrollToTarget } from "@/lib/motion"

const SmoothScroll = lazy(() => import("@/components/SmoothScroll").then((m) => ({ default: m.SmoothScroll })))
const Cursor = lazy(() => import("@/components/Cursor").then((m) => ({ default: m.Cursor })))
const AllProjects = lazy(() => import("./pages/allproject"))

function ScrollToTop() {
  const { pathname } = useLocation()
  useLayoutEffect(() => {
    scrollToTarget(0, true)
  }, [pathname])
  return null
}

function App() {
  return (
    <BrowserRouter>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Suspense fallback={null}>
        <SmoothScroll />
        <Cursor />
      </Suspense>
      <ScrollProgress />
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

import { lazy, Suspense, useState } from "react"
import { Navbar } from "@/components/navBar"
import { Hero } from "./hero"
import { Footer } from "@/components/Footer"

const BelowFold = lazy(() => import("./below-fold"))

export default function Home() {
  const [ready, setReady] = useState(false)
  return (
    <div className="page-in">
      <Navbar observe={ready} />
      <main id="main">
        <Hero />
        <Suspense fallback={<div className="min-h-screen" />}>
          <BelowFold onReady={() => setReady(true)} />
        </Suspense>
      </main>
      <Footer />
    </div>
  )
}

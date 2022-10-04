import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Layout from "./components/layout"
import Create from "./pages/create"
import Event from "./pages/event"
import Home from "./pages/home"

export default function App() {
  return (
    <Layout>
      <Router>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/event" element={<Event />} />
        <Route path="/create" element={<Create />} />
      </Routes>
    </Router>
    </Layout>
  )
}
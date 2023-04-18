import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import ProtectedIndex from "./pages/ProtectedIndex"
import CollectionShow from "./pages/CollectionShow"
import CollectionEdit from "./pages/CollectionEdit"
import CollectionNew from "./pages/CollectionNew"
import AboutUs from "./pages/AboutUs"
import NotFound from "./pages/NotFound"
import mockCollections from "./mockCollections"

const App = (props) => {
  return (
    <>
      <h1>CollectiBuddy App</h1>
      <BrowserRouter>
        <Header {...props} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collectionindex" element={<ProtectedIndex />} />
          <Route path="/collectionshow/:id" element={<CollectionShow />} />
          <Route path="/collectionnew" element={<CollectionNew />} />
          <Route path="/collectionedit/:id" element={<CollectionEdit />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App

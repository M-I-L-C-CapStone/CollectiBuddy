import React, {useEffect, useState}from 'react'
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
    const [collections, setCollections] = useState([])
  
    useEffect(()=>{
        readCollections()
    },[])
  
    const readCollections = () => {
      fetch("/collections")
      .then((response)=> response.json())
      .then((payload)=> setCollections(payload))
      .catch((error)=> console.log(error))
    }
    
      const updateCollection = (collection, id) => {
    fetch(`/collections/${id}`, {
      body: JSON.stringify(collection),
      headers: {
        "Content-Type": "application/json",
      },
      method: "PATCH",
    })
      .then((response) => response.json())
      .then((payload) => readCollections())
      .catch((errors) => console.log("Collection update errors:", errors))
  }
  

  return (
    <>
      <BrowserRouter>
        <Header {...props}/>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/collectionindex" element={<ProtectedIndex collections={collections} current_user={props.current_user} />}/>
          <Route path="/collectionshow/:id" element={<CollectionShow />}/>
          <Route path="/collectionnew" element={<CollectionNew />}/>
          <Route
            path="/collectionedit/:id"
            element={<CollectionEdit collections={collections} updateCollection={updateCollection}/>}
            />
          <Route path="/aboutus" element={<AboutUs />}/>
          <Route path="*" element={<NotFound />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App

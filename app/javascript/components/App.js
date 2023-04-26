import React, { useEffect, useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import ProtectedIndex from "./pages/ProtectedIndex"
import CollectionShow from "./pages/CollectionShow"
import CollectionNew from "./pages/CollectionNew"
import AboutUs from "./pages/AboutUs"
import NotFound from "./pages/NotFound"
import ToastHandler from "./components/ToastHandler"

const App = (props) => {
  const [collections, setCollections] = useState([])
  const [toastMessage, setToastMessage] = useState({
    header: "",
    body: "",
  })

  useEffect(() => {
    readCollections()
  }, [])

  const readCollections = () => {
    fetch("/collections")
      .then((response) => response.json())
      .then((payload) => setCollections(payload))
      .catch((error) => console.log(error))
  }

  const createCollection = (collection) => {
    fetch("/collections", {
      body: JSON.stringify(collection),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    })
      .then((response) => response.json())
      .then(
        (payload) => readCollections(),
        setToastMessage({
          header: "Nice Job!",
          body: "You have successfully added an item to your collection!",
        })
      )
      .catch((errors) => console.log(errors))
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
      .then(
        (payload) => readCollections(),
        setToastMessage({
          header: "Holy Cow!",
          body: "You just updated an item in your collection!",
        })
      )
      .catch((errors) => console.log("Collection update errors:", errors))
  }

  const deleteCollection = (id) => {
    fetch(`/collections/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "DELETE",
    })
      .then((response) => response.json())
      .then(
        (payload) => readCollections(),
        setToastMessage({
          header: "Smell ya later!",
          body: "You just deleted an item in your collection!",
        })
      )
      .catch((errors) => console.log("delete errors:", errors))
  }

  return (
    <>
      <BrowserRouter>
        <Header {...props} />
        <ToastHandler toastMessage={toastMessage} />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/collectionindex" element={<ProtectedIndex collections={collections} current_user={props.current_user} />}/>
          <Route path="/collectionshow/:id" element={<CollectionShow collections={collections} deleteCollection={deleteCollection} updateCollection={updateCollection}/>}/>
          <Route path="/collectionnew" element={<CollectionNew current_user={props.current_user} createCollection={createCollection}/>}/>
          <Route path="/aboutus" element={<AboutUs />}/>
          <Route path="*" element={<NotFound />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
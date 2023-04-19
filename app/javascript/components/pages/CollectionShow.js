import React from 'react'

const CollectionShow = () => {


  const handleSubmit = () => {
    deleteCat(selectedCat.id)
    navigate("/collectionindex")
  }

  return (
    <div>CollectionShow</div>
  )
}

export default CollectionShow
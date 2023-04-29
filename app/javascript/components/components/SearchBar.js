import React, { useState } from "react"
import { useParams } from "react-router-dom"
import SearchIcon from "@mui/icons-material/Search"
import CloseIcon from "@mui/icons-material/Close"

const SearchBar = ({ placeholder, collections, current_user }) => {
  const [filteredData, setFilteredData] = useState([])
  const [wordEntered, setWordEntered] = useState("")
  const currentCollection = collections?.filter(
    (collection) => current_user?.id === collection.user_id
  )

  const handleFilter = (e) => {
    const searchWord = e.target.value
    setWordEntered(searchWord)
    const newFilter = currentCollection.filter((value) => {
      return value.name.toLowerCase().includes(searchWord.toLowerCase())
    })
    if (searchWord === "") {
      setFilteredData([])
    } else {
      setFilteredData(newFilter)
    }
  }

  const clearInput = () => {
    setFilteredData([])
    setWordEntered("")
  }

  return (
    <>
      <div className="search">
        <div className="search-input">
          <input
            type="text"
            placeholder={placeholder}
            value={wordEntered}
            onChange={handleFilter}
          />
          <div className="searchIcon">
            {filteredData.length === 0 ? (
              <SearchIcon />
            ) : (
              <CloseIcon id="clearBtn" onClick={clearInput} />
            )}
          </div>
        </div>
        {filteredData.length != 0 && (
          <div className="dataResult">
            {filteredData.map((value, key) => {
              return (
                <a className="dataItem" href={`/collectionshow/${value.id}`}>
                  <p>{value.name}</p>
                </a>
              )
            })}
          </div>
        )}
      </div>
    </>
  )
}
export default SearchBar

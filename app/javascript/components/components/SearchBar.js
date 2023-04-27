import React, {useState} from 'react'
// import { Input } from 'reactstrap'
// import searchIcon from "src/elements/Icon/Icon.js"
  const SearchBar = ({placeholder,collections}) => {
    const [filteredData, setFilteredData] = useState([])
    const [wordEntered, setWordEntered] = useState("")

    const handleFilter=(e)=>{
      const searchWord= e.target.value
      setWordEntered(searchWord)
      const newFilter= collections.filter((value)=>{
        return value.name.toLowerCase().includes(searchWord.toLowerCase())
      })
      if (searchWord===""){
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
          <div className="searchInput">
            <input type="text" placeholder={placeholder} value={wordEntered} onChange={handleFilter}/>
            <div className="searchIcon">

            </div>
          </div>
          {filteredData.length != 0 && 
          <div className="dataResult">
            {filteredData.map((value, key) => {
              return (
                <a className="dataItem" href={`/collectionshow/${value.id}`}><p>{value.name}</p></a>
                )
            })}
          </div>
  }
        </div>
        </>
  )
}
  export default SearchBar
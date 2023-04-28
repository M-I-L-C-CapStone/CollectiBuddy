import React, {useState} from 'react'
import SearchIcon from '@mui/icons-material/Search';
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
              {/* Lines 32 - 36 can be deleted if no use for when trying to style. */}
            {filteredData.length === 0 ? (
            <SearchIcon />
          ) : (
            <CloseIcon id="clearBtn" onClick={clearInput} />
          )}
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
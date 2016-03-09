import React from 'react'
import SearchBar from './searchBar'
import ItemList from './itemList'
import Controls from './Controls'

const App = () => {
  return (
    <div>
      <h1>Manage Items</h1>
      <SearchBar />
      <ItemList />
      <Controls />
    </div>
  )
}

export default App

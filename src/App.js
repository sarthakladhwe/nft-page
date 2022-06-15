import React from "react";
import { nanoid } from 'nanoid'

import Header from "./components/Header";
import Posts from "./components/Posts";
import {postDetails, filterOptions} from "./data/data"

function App() {

  const [posts, setPosts] = React.useState([])
  const [filters, setFilters] = React.useState([])

  React.useEffect(() => {
    setPosts(postDetails.map(post => ({
      id: nanoid(),
      ...post
    })))
    setFilters(
      filterOptions.map(filter => ({
        id: nanoid(),
        filter,
        selected: false
      }))
    )
  }, [])

  function filterSelected(event,id) {
    setFilters(prevFilters => prevFilters.map(elm => (
      elm.id === id ?
      {
        ...elm,
        selected: !elm.selected
      } :
      {
        ...elm
      }
    )))
  }

  return (
    <div className="app">
      <Header key={nanoid()} filters={filters} filterSelected={filterSelected}/>
      <main>
        <Posts key={nanoid()} posts={posts} filters={filters} />
      </main> 
    </div>
  );
}

export default App;

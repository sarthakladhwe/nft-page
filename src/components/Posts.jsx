import Post from "./Post"

export default function Posts({posts, filters}) {

    const selectedFilters = filters.filter(filter => filter.selected)
    const selectedFiltersArray = selectedFilters.map(elm => {
        return elm.filter
    })

    function filterPosts() {
        const filteredPosts =  posts.filter(post => post.filter.some(el => selectedFiltersArray.includes(el)))
        return filteredPosts.map(post => (
            <Post key={post.id} post={post} />
        ))
    }
    
    const allPosts = posts.map(post => (
        <Post key={post.id} post={post} />
    ))

    return (
        <div className="posts-container">
            {
                selectedFiltersArray.length ?
                filterPosts() :
                allPosts
            }
        </div>
    )
}
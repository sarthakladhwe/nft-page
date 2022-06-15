import { nanoid } from "nanoid"

export default function Post({post}) {

    const categories = post.categories.map(category => (
        <div className="post-info-block" key={nanoid()}>
            <p><strong>{category.name}</strong></p>
            <p className="post-info-ellipsis">{category.id}</p>
        </div>
    ))

    return (
        <div className="single-post">
            <img className="post-image" src={post.image} alt="This represents the title NFT" />
            <div className="post-info">
                <h3>{post.title}</h3>
                <div className="categories-container">
                    {categories}
                </div>
            </div>
        </div>
    )
}
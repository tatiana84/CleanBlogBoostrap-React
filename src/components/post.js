const Post = ({post}) => {
    return (
        <div className="post-preview">
            <a href="post.html">
                <h2 className="post-title">{post.title}</h2>
                <h3 className="post-subtitle">{post.subtitle}</h3>
            </a>
            <p className="post-meta">
                Posted by 
                <a href="#!">TM</a>
                 {post.dayPost}
            </p>
        </div>
    )
}

export default Post;

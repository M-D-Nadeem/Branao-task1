function ArticlePost({post}){
    return(
<div key={0} className="card mb-4">
                  {post.image && (
                    <img src={post.image} className="card-img-top" alt={post.title} />
                  )}
                  <div className="card-body">
                    <img src={post.type} className="post-type mb-2"></img>
                    <h5 className="card-title">{post.title}</h5>
                    <div className="d-flex justify-content-between align-items-center mt-3">
                      <div className="d-flex align-items-center">
                        <img 
                          src={post.author_img}
                          alt={post.author}
                          className="rounded-circle me-2"
                        />
                        <div>
                          <div className="fw-bold">{post.author}</div>
                          <div className="text-muted small">{post.views} views</div>
                        </div>
                      </div>
                      <button className="btn btn-light">
                        <i className="bi bi-share"></i> Share
                      </button>
                    </div>
                  </div>
                </div>
    )}
    export default ArticlePost
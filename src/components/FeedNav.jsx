const FeedNav = () => {
    return (
      <div className="feed-nav  mb-4">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <ul className="nav">
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  All Posts(32)
                </a>
              </li>
              <li className="nav-item d-none d-md-block">
                <a className="nav-link" href="#">Article</a>
              </li>
              <li className="nav-item d-none d-md-block">
                <a className="nav-link" href="#">Event</a>
              </li>
              <li className="nav-item d-none d-md-block">
                <a className="nav-link" href="#">Education</a>
              </li>
              <li className="nav-item d-none d-md-block">
                <a className="nav-link" href="#">Job</a>
              </li>
            </ul>
            
            <div className="d-flex gap-2">
              <div className="dropdown d-md-none">
                <button 
                  className="btn btn-light dropdown-toggle" 
                  type="button" 
                  data-bs-toggle="dropdown"
                >
                  Filter: All
                </button>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">All Posts</a></li>
                  <li><a className="dropdown-item" href="#">Article</a></li>
                  <li><a className="dropdown-item" href="#">Event</a></li>
                  <li><a className="dropdown-item" href="#">Education</a></li>
                  <li><a className="dropdown-item" href="#">Job</a></li>
                </ul>
              </div>
              
              <button className="btn btn-light d-none d-md-block">
                Write Post <i className="bi bi-caret-down-fill ms-2"></i>
              </button>
              
              <button className="btn btn-primary">
                <i className="bi bi-people-fill me-2"></i>
                Join Group
              </button>
            </div>
          </div>
          <hr className="feedNav"></hr>
        </div>
        
      </div>
    );
  };
  export default FeedNav
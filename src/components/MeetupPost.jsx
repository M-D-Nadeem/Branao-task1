const MeetupPost = ({ data }) => {
    return (
      <div className="card mb-4">
        {data.image && (
          <img src={data.image} className="card-img-top" alt={data.title} />
        )}
        <div className="card-body">
          <div className="d-flex align-items-center gap-2 mb-2">
            <span className="text-muted">📅 Meetup</span>
          </div>
          <h5 className="card-title mb-3">{data.title}</h5>
          <div className="d-flex gap-4 mb-3">
            <div className="d-flex align-items-center gap-2">
              <i className="bi bi-calendar-event"></i>
              {data.date}
            </div>
            <div className="d-flex align-items-center gap-2">
              <i className="bi bi-geo-alt"></i>
              {data.location}
            </div>
          </div>
          <a href="#" className="btn btn-outline-danger w-100 rounded-3 mb-3">
            Visit Website
          </a>
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center gap-2">
              <img src={data.authorImage} alt={data.author} className="rounded-circle" width="40" height="40" />
              <div>
                <div className="fw-semibold">{data.author}</div>
                <div className="text-muted small">{data.views} views</div>
              </div>
            </div>
            <div className="d-flex align-items-center gap-2">
              <button className="btn btn-light px-3">
                <i className="bi bi-share-fill"></i>
              </button>
              <div className="dropdown">
                <button className="btn btn-light" data-bs-toggle="dropdown">
                  <i className="bi bi-three-dots"></i>
                </button>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Edit</a></li>
                  <li><a className="dropdown-item" href="#">Report</a></li>
                  <li><a className="dropdown-item" href="#">Option 3</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  export default MeetupPost
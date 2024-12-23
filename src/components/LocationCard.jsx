

const LocationCard = () => {
    return (
      <div className="card mb-4">
        <div className="card-body">
          <div className="d-flex align-items-center mb-3">

            <i className="bi bi-geo-alt me-2"><img src="./images/locationSimbol.png"></img></i>
            <input
              type="text"
              className="form-control border-0 p-0"
              placeholder="Enter Your Location"
            />
            <button className="btn btn-link p-0">
              <i className="bi bi-pencil"><img src="./images/locationSimbol2.png"></img></i>
            </button>
          </div>
          <hr class="thick-line" />
          <div className="d-flex align-items-center text-muted small mb-4">
            <i className="bi bi-info-circle me-2"><img src="./images/locationSimbol3.png"></img></i>
            <span>Your location will help us serve better and extend a personalised experience.</span>
          </div>
  
          <div className="recommended-groups">
            <h6 className="d-flex align-items-center mb-4">
              <i className="bi bi-hand-thumbs-up me-2"><img src="./images/Vector.png"/></i>
              RECOMMENDED GROUPS
            </h6>
            
            {[
              { name: 'Leisure', image: './images/Follow1.png' },
              { name: 'Activism', image: './images/Follow2.png' },
              { name: 'MBA', image: './images/Follow3.png' },
              { name: 'Philosophy', image: './images/Follow4.png' }
            ].map((group) => (
              <div key={group.name} className="d-flex align-items-center justify-content-between mb-4">
                <div className="d-flex align-items-center">
                  <img
                    src={group.image}
                    alt={group.name}
                    className="rounded-circle me-3"
                    width="36"
                    height="36"
                  />
                  <span>{group.name}</span>
                </div>
                <button className="btn btn-light rounded-pill px-3">Follow</button>
              </div>
            ))}
            
            <button className="btn btn-link text-primary text-decoration-none w-100 text-end">
            See More...
            </button>
          </div>
        </div>
      </div>
    );
  };
export default LocationCard  
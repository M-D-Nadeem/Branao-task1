import { useState } from "react";
import FeedNav from "./FeedNav";
import LocationCard from "./LocationCard";
import { MdOutlineRemoveRedEye } from "react-icons/md";

const Feed = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (index) => {
    setActiveDropdown((prevIndex) => (prevIndex === index ? null : index));
  };

  const posts = [
    {
      type: "./images/ArticleLogo.png",
      title: "What if famous brands had regular fonts? Meet RegulaBrands!",
      author: "Sarthak Kamra",
      views: "1.4k",
      image: "./images/Article1.png",
      author_img: "./images/Owner 1.png",
    },
    {
      type: "./images/EducationLogo.png",
      title:
        "Tax Benefits for Investment under National Pension Scheme launched by Government",
      author: "Sarah West",
      views: "1.4k",
      image: "./images/Article 2.png",
      author_img: "./images/Owner 2.png",
    },
    {
      type: "./images/MeetupLogo.png",
      title: "Finance & Investment Elite Social Mixer @Lujiazui",
      author: "Ronal Jones",
      views: "800",
      location: "Ahmedabad, India",
      date: "Fri, 12 Oct, 2018",
      image: "./images/Article 3.png",
      author_img: "./images/Owner 3.png",
    },
    {
      type: "./images/JobLogo.png",
      title: "Software Developer",
      company: "Innovaccer Analytics Private Ltd.",
      location: "Noida, India",
      author: "Joseph Gray",
      views: "1.7k",
      author_img: "./images/Owner 4.png",
    },
  ];

  return (
    <div className="feed">
      <header className="hero position-relative mb-4 header">
        <img
          src="./images/Rectangle 2.png"
          alt="Computer Engineering"
          className="w-100 hero-image"
        />
        <div className="hero-content position-absolute bottom-0 text-white p-4">
          <h1>Computer Engineering</h1>
          <p>142,765 Computer Engineers follow this</p>
        </div>
      </header>
      <FeedNav />

      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-8">
            {posts.map((post, index) => (
              <div key={index} className="card mb-4">
                {post.image && (
                  <img src={post.image} className="card-img-top" alt={post.title} />
                )}
                <div className="card-body">
                  <img src={post.type} className="post-type mb-4"></img>
                  <div className="d-flex justify-content-between align-items-center">
                    <h5 className="card-title">{post.title}</h5>
                    <div className="position-relative">
                      <img
                        src="./images/3dot.png"
                        className="pe-2 dropdown-toggle"
                        alt="menu"
                        onClick={() => toggleDropdown(index)}
                        style={{ cursor: "pointer" }}
                      />
                      {activeDropdown === index && (
                        <div className="custom-dropdown">
                          <ul className="list-unstyled m-0 p-2">
                            <li className="dropdown-item">Edit</li>
                            <li className="dropdown-item">Report</li>
                            <li className="dropdown-item">Option 3</li>
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="d-flex gap-lg-5 p-2 time-loc">
                    {post.company && (
                      <div className="d-flex align-items-center gap-2">
                        <i className="bi bi-calendar-event">
                          <img src="./images/companyLogo.png" />
                        </i>
                        {post.company}
                      </div>
                    )}
                    {post.date && (
                      <div className="d-flex align-items-center gap-2">
                        <i className="bi bi-calendar-event">
                          <img src="./images/date.png" />
                        </i>
                        {post.date}
                      </div>
                    )}
                    {post.location && (
                      <div className="d-flex align-items-center gap-2">
                        <i className="bi bi-calendar-event">
                          <img src="./images/date.png" />
                        </i>
                        {post.location}
                      </div>
                    )}
                  </div>
                  {index === 2 && (
                    <div className="w-100 pt-2">
                      <button className="custom-button">
                        <span className="text-danger">Visit My Website</span>
                      </button>
                    </div>
                  )}
                  {index === 3 && (
                    <div className="w-100 pt-2">
                      <button className="custom-button">
                        <span className="text-success">Apply on Timejobs</span>
                      </button>
                    </div>
                  )}

                  <div className="d-flex justify-content-between align-items-center mt-3">
                    <div className="d-flex align-items-center">
                      <img
                        src={post.author_img}
                        alt={post.author}
                        className="rounded-circle me-2"
                      />
                      <div className="fw-bold">{post.author}</div>
                    </div>
                    <div className="d-flex justify-content-between align-items-center gap-3">
                      <div className="text-muted small d-flex gap-1 justify-content-between align-items-center">
                        <MdOutlineRemoveRedEye className="eye" />
                        {post.views} views
                      </div>
                      <button className="btn btn-light">
                        <i className="bi bi-share">
                          <img src="./images/share.png" />
                        </i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="col-lg-4 d-none d-lg-block">
            <LocationCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feed;

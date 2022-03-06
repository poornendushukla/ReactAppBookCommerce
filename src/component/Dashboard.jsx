import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { getBooksList } from "../redux/action/templateaction";
import cover from "../assets/cover.jpg";
import "../styles/dashboard.scss";
import Slider from "./Slider";
export default function Dashboard(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { books } = useSelector((state) => state?.getBooksList);
  useEffect(() => {
    dispatch(getBooksList());
  }, [dispatch]);
  const handleClick = (e, id) => {
    navigate(`/book_id/${id}`);
  };
  const createCardsUI = () => {
    return books
      ? books.map((el) => (
          <div className="card mb-3" key={el?.id}>
            <div className="row g-0">
              <div className="col-md-6 p-0">
                <div className="img-wrapper">
                  <img
                    src={`data:image/png;base64,${el.imageData}`}
                    className="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <div className="img-popover">
                  <Link to={`/book_id/${el.id}`}>
                    <button
                      className="btn btn-primary button"
                      // onClick={(e) => handleClick(e, el?.id)}
                    >
                      View book
                    </button>
                  </Link>
                </div>
              </div>
              <div className="col-md-6 p-0 custom-mr">
                <div className="card-body p-0">
                  <h5 className="card-title">{el.title}</h5>
                  <p className="card-text">{el.authors}</p>
                  <div className="rating">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                  <div className="card-text cart-like">
                    <i className="fas fa-shopping-cart"></i>
                    <i className="fas fa-heart"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))
      : null;
  };

  const featuredBooks = () => {
    const featureBooks = books
      ? books.filter((book) => book.bookId == 1 || book.bookId == 6)
      : [];
    return featureBooks ? (
      featureBooks.map((book) => (
        <div className="fb-card d-flex" key={book.id}>
          <div className="fb-image">
            <img
              src={`data:image/png;base64,${book.imageData}`}
              className="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div className="fb-description">
            <p className="fb-title">{book.title}</p>
            <p className="description">{book.description}</p>
            <p className="authors">{book.authors}</p>
            <div className="fb-button">
              <Link to={`/book_id/${book.id}`}>
                <button className="btn btn-primary button">Learn More</button>
              </Link>
            </div>
          </div>
        </div>
      ))
    ) : (
      <></>
    );
  };

  return (
    <div className="dashboard-container">
      <div>
        <Slider />
      </div>
      <div className="browse-books-section">
        <div className="books-header d-flex justify-content-between">
          <h4 className="title">Browse Books</h4>
          <button className="btn btn-primary button">View More</button>
        </div>
        {createCardsUI()}
      </div>

      <div className="browse-books-section featured-books-seaction">
        <div className="books-header d-flex justify-content-between">
          <h4 className="title">Featured Books</h4>
        </div>
        <div className="fb-wrapper d-flex">{featuredBooks()}</div>
      </div>

      <div className="more-info">
        <div className="cover">
          <img src={cover} alt="" />
        </div>
        <div className="cover-title">
          <p>Join the junction to learn more.</p>
          <Link to="/signup">
            <button className="btn btn-primary button">Sign up</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

// ssh -i .\codex.pem @ubuntu@ip
// java -jar Read...    ssh -i .\codex.pem ubuntu@3.93.24.160

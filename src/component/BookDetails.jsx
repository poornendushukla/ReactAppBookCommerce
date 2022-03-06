import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams, Link } from "react-router-dom";
import { addCart, getBooksList } from "../redux/action/templateaction";
import "../styles/book-details.scss";
import { Modal, Button } from "react-bootstrap";

export default function BooksDetail(props) {
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);

  const { books } = useSelector((state) => state?.getBooksList);
  let book = books ? books?.filter((book) => book.id === params.id)[0] : null;
  useEffect(() => {
    dispatch(getBooksList());
  }, []);
  const handleClick = (bookId) => {
    setShow(true);
    const username = localStorage.getItem("username");
    if (username) {
      dispatch(addCart(bookId, username));
    } else {
      navigate("/login");
    }
  };

  const handleClose = () => setShow(false);

  return (
    <div className="books-details-wrapper">
      <h4 className="title">Book description</h4>
      <hr />
      <div className="books-details-box">
        <div className="book-img">
          <img
            src={`data:image/png;base64,${book?.imageData}`}
            className="img-fluid rounded-start"
            alt="..."
          />
        </div>
        <div className="book-details">
          <div className="book-title">{book?.title}</div>
          <div className="book-pages">
            <span className="orange-label">Number of pages: </span>{" "}
            {book?.num_pages}
          </div>
          <div className="book-rating">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
          </div>
          <div className="book-description">{book?.description}</div>
          <hr />
          <div className="book-author">
            <span className="orange-label">Author: </span> {book?.authors}
          </div>
          <div className="book-author">
            <span className="orange-label">Pulbisher: </span> {book?.publisher}
          </div>
          <div className="book-author">
            <span className="orange-label">Publication date: </span>{" "}
            {book?.publication_date}
          </div>
          <div className="book-action-btns">
            <button
              className="btn btn-primary button add-to-cart"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              onClick={() => handleClick(book?.bookId)}
            >
              Add to cart
            </button>
          </div>
          <div className="book-wishlist">
            <i className="fas fa-heart"></i>
            Add to wishlist
          </div>
        </div>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Body>Successfully added to cart</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Link to={`/cart`}>
            <Button variant="primary" onClick={handleClose} className="button">
              Go to cart
            </Button>
          </Link>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

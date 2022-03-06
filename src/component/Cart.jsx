import React, { useEffect,useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCart, buyBook } from "../redux/action/templateaction";
import "../styles/cart.scss";
import { Modal, Button } from "react-bootstrap";
import { useNavigate, useParams, Link } from "react-router-dom";


function Cart(props) {
  const { cart } = useSelector((state) => state?.getBooksList);
  const { responseBuy } = useSelector((state) => state?.getSignup);
  const [show, setShow] = useState(false);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCart(localStorage.getItem("username")));
  }, [dispatch]);

  useEffect(() => {
    console.log(responseBuy);
  }, []);

  const handleClick = () => {
    const bookIds = cart.map((cart) => parseInt(cart.bookId));
    dispatch(buyBook(bookIds, localStorage.getItem("username")));
    if (
      dispatch(buyBook(bookIds, localStorage.getItem("username"))) == undefined
    ) {
      setShow(true);
    }
  };
  const handleClose = () => setShow(false);

  const cartItems = () => {
    return cart ? (
      cart.map((item) => (
        <div className="cart-card" key="cart">
          <div className="cart-img">
            <img
              src={`data:image/png;base64,${item?.imageData}`}
              className="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div className="cart-details">
            <div className="title">{item?.title}</div>
            <div className="quantity">
              <span className="orange-label">Quantity: </span> 1
            </div>
            <div className="action-buttons">
              <button className="btn btn-primary button">Remove</button>
            </div>
          </div>
        </div>
      ))
    ) : (
      <></>
    );
  };

  return (
    <div className="cart-container ">
      <h4 className="cart-heading text-center readers-label">Cart</h4>
      <div className="cart-item-box">{cartItems()}</div>
      <div className={cart ? "buy-box" : "d-none"}>
        <button
          className="btn btn-primary button"
          onClick={() => {
            handleClick();
          }}
        >
          Buy now
        </button>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Body>Please upload a book to continue</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Link to={`/bookupload`}>
            <Button variant="primary" onClick={handleClose} className="button">
              Upload
            </Button>
          </Link>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Cart;

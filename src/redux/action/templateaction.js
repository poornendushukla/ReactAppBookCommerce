import GenerateActions from "../actionHelper/generateActions";
import * as Types from "../actiontype/actiontype";
import axios from "axios";

export function setBookList(bookDetails) {
  return GenerateActions(Types.GET_BOOK_LIST, bookDetails);
}
export function setUserSignup(status) {
  return GenerateActions(Types.GET_SIGN_UP, status);
}
export function setCart(cartList) {
  return GenerateActions(Types.GET_CART, cartList);
}
export function setAddCart(status) {
  return GenerateActions(Types.SET_CART, status);
}
export function setBuyBooks(status) {
  return GenerateActions(Types.BUY_BOOKS, status);
}
export function setLogin(status) {
  return GenerateActions(Types.GET_LOGIN);
}
export function setUploadBook(status) {
  return GenerateActions(Types.SET_BOOK_UPLOAD);
}
export function getBooksList() {
  return (dispatch) => {
    axios
      .get("http://3.94.80.80:8082/api/books/list")
      .then((res) => {
        dispatch(setBookList(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
}

export function getSignup(username, email, password, address) {
  return (dispatch) => {
    axios
      .post("http://3.94.80.80:8082/api/signup", {
        username: username,
        email: email,
        password: password,
        address: address,
      })
      .then(
        (res) => {
          dispatch(setUserSignup(res.status));
        },
        (res) => dispatch(setUserSignup(409))
      );
  };
}

export function getCart(username) {
  return (dispatch) => {
    axios
      .get("http://3.94.80.80:8082/api/get/cart", {
        params: {
          username: username,
        },
      })
      .then((res) => {
        dispatch(setCart(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
}

export function addCart(bookId, username) {
  return (dispatch) => {
    axios
      .post(
        `http://3.94.80.80:8082/api/add/cart?bookId=${bookId}&username=${username}`
      )
      .then(
        (res) => {
          if (res.status === 200) dispatch(getCart(username));
          dispatch(setAddCart(res.status));
        },
        (res) => dispatch(setAddCart(res.status))
      );
  };
}

export function buyBook(books, username) {
  return (dispatch) => {
    axios
      .post(
        `http://3.94.80.80:8082/api/buy/book?bookId=${books}&username=${username}`
      )
      .then(
        (res) => dispatch(setBuyBooks(res.status)),
        (res) => dispatch(setBuyBooks(res.status))
      )
      .catch((err) => {
        console.log("jklk",err);
      });
  };
}
export function getLogin(username, password) {
  return (dispatch) => {
    axios
      .post("http://3.94.80.80:8082/api/login", {
        username: username,
        password: password,
      })
      .then(
        (res) => {
          if (res.status === 200) {
            localStorage.setItem("username", username);
          }
        },
        (res) => dispatch(setLogin(res.status))
      );
  };
}

export function uploadBooks(data) {
  return (dispatch) => {
    axios
      .post("http://3.94.80.80:8082/api/post/book",data)
      .then(
        (res) => {
          dispatch(setUploadBook(res.status));
        },
        (res) => {
          dispatch(setUploadBook(res.status));
        }
      );
  };
}

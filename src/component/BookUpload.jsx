import React,{useState} from "react";
import { useDispatch } from "react-redux";
import {uploadBooks} from "../redux/action/templateaction";
import {useNavigate} from "react-router-dom";

function BookUpload(props) {
  const dispatch = useDispatch()
  let form = new FormData();
  const navigate = useNavigate()
  const [bookname,setBookname]=useState(null);
  const [author,setAuthor]=useState(null);
  const [bookcost,setBookcost]=useState(null);
  const [publication,setPublication]=useState(null);
  const [language,setLanguage]=useState(null);
  const [description,setDescription]=useState(null);
  const [genre,setGenre]=useState(null);
  const [publisher,setPublisher]=useState(null);
  const [image,setImage]=useState(null);

  const handleClick=(e)=>{
    e.preventDefault();
    form.append('title',bookname);
    form.append('authors',author);
    form.append('bookCost',parseInt(bookcost));
    form.append('publication_date',publication)
    form.append('average_rating','5');
    form.append('language_code',language);
    form.append('description',description);
    form.append('Genre',[genre]);
    form.append('publisher',publisher);
    form.append("imageFile",image,image.name)
    form.append('owner',localStorage.getItem('username'));
    console.log(form)
    dispatch(uploadBooks(form))
    navigate("/")

  }

  const handleChange = (e,id)=>{
    switch(id){
      case "booktitle":
        setBookname(e.target.value);
        break
      case "author":
        setAuthor(e.target.value)
        break
      case "description":
        setDescription(e.target.value)
        break
      case "image":
        console.log(e.target.files[0])
        setImage(e.target.files[0])
        break
      case "language":
        setLanguage(e.target.value)
        break
      case "publication":
        setPublication(e.target.value);
        break
      case "publisher":
        setPublisher(e.target.value)
        break
      case "bookcost":
        setBookcost(e.target.value)
        break
      case "genre":
        setGenre(e.target.value)
        break
      default:
        break
    }
  }

  return (
    <div className="text-center pt-2 ">
      <span className="readers-label">Book upload</span>
      <div className="signup-box">
        <form className="form" key="form">
          <div className="mb-3">
            <label for="bookTitle" className="form-label">
              Book title
            </label>
            <input
              type="text"
              className="form-control"
              id="bookTitle"
              aria-describedby="emailHelp"
              onKeyUp={(e,id)=>handleChange(e,"booktitle")}
            />
          </div>
          <div class="mb-3">
            <label for="formFile" class="form-label">
             Image 
            </label>
            <input class="form-control" type="file" id="formFile"  onChange={(e,id)=>handleChange(e,"image")}/>
          </div>

          <div className="mb-3">
            <label for="author" className="form-label">
              Author
            </label>
            <input 
            type="text" 
              onKeyUp={(e,id)=>handleChange(e,"author")}
              className="form-control"
               id="author"  />
          </div>

          <div className="mb-3">
            <label for="description" className="form-label">
              Description
            </label>
            <input type="text"
             className="form-control" id="description"
              onKeyUp={(e,id)=>handleChange(e,"description")} />
          </div>

          <div className="mb-3">
            <label for="langCode" className="form-label">
              Language code
            </label>
            <input type="text" className="form-control" id="langCode" onKeyUp={(e,id)=>handleChange(e,"language")} />
          </div>

          <div className="mb-3">
            <label for="publisher" className="form-label">
              Publisher
            </label>
            <input type="text" className="form-control" id="publisher"  onKeyUp={(e,id)=>handleChange(e,"publisher")} />
          </div>

          <div className="mb-3">
            <label for="publicationDate" className="form-label">
              Publication Date
            </label>
            <input type="date" className="form-control" id="publicationDate" onKeyUp={(e,id)=>handleChange(e,"publication")} />
          </div>

          <div className="mb-3">
            <label for="genre" className="form-label">
              Genre
            </label>
            <input type="text" className="form-control" id="genre"  onKeyUp={(e,id)=>handleChange(e,"genre")}/>
          </div>

          <div className="mb-3">
            <label for="cost" className="form-label">
              Book cost
            </label>
            <input type="text" className="form-control" id="cost" onKeyUp={(e,id)=>handleChange(e,"bookcost")} />
          </div>

          <button type="submit" className="btn btn-primary button" onClick={(e)=>handleClick(e)}>
            Submit
          </button>
        </form>
      </div>
      <div className="error"></div>
    </div>
  );
}

export default BookUpload;

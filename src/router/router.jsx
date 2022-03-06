import React,{lazy, Suspense} from "react";
import { Route,Routes} from 'react-router-dom'
import Dashboard from "../component/Dashboard"
import BooksDetail from "../component/BookDetails";
import SignUp from "../component/Signup";
import Login from "../component/Login"
import Error from "../component/Error"
import Cart from "../component/Cart"
import { Loader } from "../component/Loader";
import BookUpload from "../component/BookUpload";

export default function Router(props){
    return (
        <Routes>
            <Route  path="/" element={<Suspense fallback={Loader}><Dashboard/></Suspense>} />
            <Route  path="/book_id/:id" element={<Suspense fallback={Loader}><BooksDetail/></Suspense>} />
            <Route path="/signup" element={<Suspense fallback={Loader}><SignUp/></Suspense>}/>
            <Route path="/login" element={<Suspense fallback={Loader}><Login/></Suspense>}/>
            <Route path="/cart" element={<Suspense fallback={Loader}><Cart/></Suspense>}/>
            <Route path="/bookupload" element={<Suspense fallback={Loader}><BookUpload/></Suspense>}/>
            <Route  path="*"  element={<Error/>} />
        </Routes>
    )
}
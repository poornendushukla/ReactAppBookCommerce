import React, { Suspense,useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// import Dashboard from "../../component/Dashboard";
import Header from "../../component/Header";
import Router from "../../router/router";
import Footer from "../../component/Footer";
import {getBooksList,getSignup} from "../../redux/action/templateaction";
import '../../styles/index.scss';


export default function App(props){
    // const {books} = useSelector((state)=>state?.getBooksList);
    // console.log(books)
    // const dispatch = useDispatch();
    // useEffect(()=>{
    //     dispatch(getBooksList());
    // },[dispatch])
    return(
         <Suspense>
             <Header />
                <Router/>
             <Footer/>
         </Suspense>
    )

}
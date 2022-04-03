import React from "react";
import classes from "./Body.module.css";
// importing of component 
import Header from "./Header/Header";
import Nav from "./Nav/Nav";
import BodyHeader from "./BodyHeader/BodyHeader";
import BodyChart1 from "./BodyChart1/BodyChart";
import BodyChart2 from "./BodyChart2/BodyChart";
import BodyChart3 from "./BodyChart3/BodyChart";

const Body = ()=>{
    return(
        <>
            <div className={classes.Body}>
                <Header /> 
                <Nav />
                <BodyHeader />
                <BodyChart1 />
                <BodyChart2 />
                <BodyChart3 />
            </div>
           
        
        </>
    );
} 
export default Body;
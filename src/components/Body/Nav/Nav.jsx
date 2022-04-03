import React from "react";
import classes from "./Nav.module.css";

const Nav = ()=>{
    return (
        <>
            <div className={classes.Nav}>
                <nav>
                    <ul>
                        <li>Efficiency</li>
                        <li>Volume</li>
                        <li>Customer Satisfaction</li>
                        <li>Backlog</li>
                    </ul>
                </nav>
            </div>
        </>
    );
}
export default Nav;
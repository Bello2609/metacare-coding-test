import React from "react";
import classes from "./BodyHeader.module.css";

const BodyHeader = ()=>{
    return (
        <>
            <div className={classes.BodyHeader}>
                <h4>Efficiency Analytics</h4>
                <div className={classes.Body_Header}>
                    <div className={classes.Body_Header_input}>
                        <input type="text" placeholder="Search" />
                    </div>
                    <select name="" id="">
                        <option value="filter by option">Filter Option</option>
                        <option value="filter by option">Filter Option</option>
                        <option value="filter by option">Filter Option</option>
                    </select>
                    <button type="submit">Export</button>
                </div>
            </div>
        </>
    );
}
export default BodyHeader;
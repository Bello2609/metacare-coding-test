import React from "react";
import classes from "./Header.module.css";
import { BiSearch } from "react-icons/bi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FiCircle } from 'react-icons/fi';
import { IoIosArrowDown } from "react-icons/io";

const Header = ()=>{
    return (
        <>
            <div className={classes.Header}>
                <div className={classes.Form_header}>
                    <input type="text" placeholder="Ask us any question" />
                    <p><BiSearch /></p>
                </div>
                <div className={classes.Header_profile}>
                    <div className={classes.notification}>
                        <p><IoMdNotificationsOutline /></p>
                        <p>3</p>
                    </div>
                    <p>|</p>
                    <div className={classes.user}>
                        <p><FiCircle /></p>
                        <p><IoIosArrowDown /></p>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Header;
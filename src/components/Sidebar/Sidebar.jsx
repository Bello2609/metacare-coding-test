import React, { useState } from "react";
import classes from "./Sidebar.module.css";
import { FiUsers } from "react-icons/fi";
import { IoIosArrowForward } from "react-icons/io";
import { CgCheckR } from "react-icons/cg";
import { BsCalendar4 } from "react-icons/bs";
import { AiOutlineClockCircle } from "react-icons/ai";
import { BiMessageRoundedDots } from "react-icons/bi";
const Sidebar = ()=>{
    const [ isOpen, setIsOpen ] = useState(false);
    const dropHandler = ()=>setIsOpen(!isOpen);
    return(
        <>
            <div className={classes.Sidebar}>
                <div className={classes.Sidebar_header}>
                    <div>
                        <p>Metacare</p>
                        <p>adeyinka@metacare.app</p>
                    </div>
                </div>
                <div className={classes.Sidebar_content}>
                    <div className={classes.Sidebar_content_list}>
                        <p><FiUsers /></p>
                        <div className={classes.Sidebar_content_list_element}>
                            <h5>Admin</h5>
                            <p><IoIosArrowForward /></p>
                        </div>
                    </div>
                    <div className={classes.Sidebar_content_list}>
                        <p><CgCheckR /></p>
                        <div className={classes.Sidebar_content_list_element}>
                            <h5>Knowledge Base</h5>
                            <p><IoIosArrowForward /></p>
                        </div>
                    </div>
                    <div className={classes.Sidebar_content_list}>
                        <p><CgCheckR /></p>
                        <div className={classes.Sidebar_content_list_element}>
                            <h5>Train SAM</h5>
                            <p><IoIosArrowForward /></p>
                        </div>
                    </div>
                    <div className={classes.Sidebar_content_list}>
                        <p><BsCalendar4 /></p>
                        <div className={classes.Sidebar_content_list_element}>
                            <h5>Agent Inbox</h5>
                            <p><IoIosArrowForward /></p>
                        </div>
                    </div>
                    <div className={classes.Sidebar_content_list}>
                        <p><AiOutlineClockCircle /></p>
                        <div className={classes.Sidebar_content_list_element}>
                            <h5>Help Center</h5>
                            <p><IoIosArrowForward /></p>
                        </div>
                    </div>
                    <div className={classes.Sidebar_content_list}>
                        <b><BiMessageRoundedDots /></b>
                        <div className={classes.Sidebar_content_list_elementlast}>
                            <h5>Analytics</h5>
                            { isOpen &&  
                                <div class={classes.Sidebar_content_list_element_sublist}>
                                    <h6>Teams</h6>
                                    <h6>Knowledge Base</h6>
                                    <h6>Training SAM</h6>
                                    <h6>Help Center</h6>
                                </div>
                            }
                        </div>
                        <p onClick={dropHandler} className={classes.last}><IoIosArrowForward /></p>
                    </div>
                    
                </div>

            </div>
        
        </>
    );
} 
export default Sidebar;
import React from "react";
import { Link, useLocation } from "react-router-dom";
import usericon from "../images/usericon.png";

const ContactDetail = () => {
    const location = useLocation();
    const { name, email } = location.state.contact;
    return (
        <div className="main">
            <div className="ui card centered">
                <div className="image">
                    <img src={usericon} alt="user" />
                </div>
                <div className="content">
                    <div className="header">{name} </div>
                    <div className="description">{email} </div>
                </div>
            </div>
            <div className="center-div">
                <Link to="/">
                    <button className="ui button blue center">
                        Back to Contact List
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default ContactDetail;

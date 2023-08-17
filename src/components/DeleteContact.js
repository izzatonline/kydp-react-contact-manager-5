import React from "react";
import { Link } from "react-router-dom";
import usericon from "../images/usericon.png";

const DeleteContact = (props) => {
    const { id, name, email } = props.location.state.contact;
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
            <h1 className="center-div">
                Are you sure you want to delete this contact?
                <div>
                    <Link to="/">
                        <button
                            className="ui button blue center"
                            onClick={() => props.removeContactHandler(id)}
                        >
                            YES
                        </button>
                    </Link>
                    <Link to="/">
                        <button className="ui button blue center">NO</button>
                    </Link>
                </div>
            </h1>
        </div>
    );
};

export default DeleteContact;

import React from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import usericon from "../images/usericon.png";
import { useContactsCrud } from "../context/ContactsCrudContext";

const DeleteContact = () => {
    const { id } = useParams();
    const location = useLocation();
    const { name, email } = location.state.contact;
    const { removeContactHandler } = useContactsCrud();

    const deleteContact = (id) => {
        removeContactHandler(id);
    };

    return (
        <div className="main">
            <div className="ui card centered">
                <div className="image">
                    <img src={usericon} alt="user" />
                </div>
                <div className="content">
                    <div className="header">{name}</div>
                    <div className="description">{email}</div>
                </div>
            </div>
            <h1 className="center-div">
                Are you sure you want to delete this contact?
                <div>
                    <Link to="/">
                        <button
                            className="ui button blue center"
                            onClick={() => deleteContact(id)}
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

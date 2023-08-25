import React from "react";
import { Link } from "react-router-dom";
import usericon from "../images/usericon.png";

const ContactCard = (props) => {
    const { id, name, email } = props.contact;

    return (
        <div className="ui divided items">
            <div className="item">
                <div
                    className="image"
                    style={{ width: "70px", height: "auto" }}
                >
                    <img src={usericon} alt="user" />
                </div>
                <div className="content">
                    <Link
                        to={`/contact/${id}`}
                        state={{ contact: props.contact }}
                    >
                        <br />
                        <div className="header">{name}</div>
                        <div>{email}</div>
                    </Link>
                </div>
                <div className="edit">
                    <Link to={`/edit/${id}`}>
                        <i
                            className="edit alternate outline icon"
                            style={{
                                color: "blue",
                                margin: "7px",
                                marginLeft: "10px",
                            }}
                        ></i>
                    </Link>
                </div>
                <div className="delete">
                    <Link
                        to={`/delete/${id}`}
                        state={{ contact: props.contact }}
                    >
                        <i
                            className="trash alternate outline icon"
                            style={{
                                color: "red",
                                marginTop: "7px",
                                marginLeft: "10px",
                            }}
                        ></i>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ContactCard;

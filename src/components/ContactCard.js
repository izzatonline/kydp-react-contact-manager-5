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
                        to={{
                            pathname: `/contact/${id}`,
                            state: { contact: props.contact },
                        }}
                    >
                        <br />
                        <div className="header">{name}</div>
                        <div>{email}</div>
                    </Link>
                </div>
                <div className="delete">
                    <Link
                        to={{
                            pathname: `/delete/${id}`,
                            state: { contact: props.contact },
                        }}
                    >
                        <i
                            className="right alternate trash icon"
                            style={{
                                color: "red",
                                margin: "7px",
                            }}
                            onClick={() => props.clickHandler(id)}
                        ></i>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ContactCard;

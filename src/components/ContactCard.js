import React from "react";
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
                    <br />
                    <div className="header">{name}</div>
                    <div>{email}</div>
                </div>
                <div className="button">
                    <i
                        className="right trash icon"
                        style={{
                            color: "red",
                            margin: "7px",
                        }}
                        onClick={() => props.clickHandler(id)}
                    ></i>
                </div>
            </div>
        </div>
    );
};

export default ContactCard;

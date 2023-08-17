import React, { useRef } from "react";
import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
    console.log(props);
    const inputEl = useRef("");
    const deleteContactHandler = (id) => {
        props.getContactId(id);
    };

    const renderContactList = props.contacts.map((contact) => {
        return (
            <ContactCard
                contact={contact}
                clickHandler={deleteContactHandler}
                key={contact.id}
            />
        );
    });

    const getSearchTerm = () => {
        props.searchKeyword(inputEl.current.value);
    };

    return (
        <div
            className="main"
            style={{
                marginTop: "10px",
            }}
        >
            <h2>
                <div>
                    Contact List
                    <div>
                        <Link to="/add">
                            <button
                                className="ui button blue right"
                                style={{ margin: "10px" }}
                            >
                                Add Contact
                            </button>
                        </Link>
                    </div>
                </div>
            </h2>
            <div className="ui search">
                <div className="ui icon input">
                    <input
                        ref={inputEl}
                        type="text"
                        placeholder="Search Contacts"
                        className="prompt"
                        value={props.term}
                        onChange={getSearchTerm}
                    />
                    <i className="search icon"></i>
                </div>
            </div>
            <div className="ui celled list">
                {renderContactList.length > 0
                    ? renderContactList
                    : "No Contacts Available"}
            </div>
        </div>
    );
};

export default ContactList;

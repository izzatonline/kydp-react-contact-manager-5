import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";
import { useContactsCrud } from "../context/ContactsCrudContext";

const ContactList = () => {
    const {
        contacts,
        retrieveContacts,
        searchTerm,
        searchResults,
        searchHandler,
    } = useContactsCrud();

    useEffect(() => {
        retrieveContacts();
    }, []);

    const renderContactList = (
        searchTerm.length < 1 ? contacts : searchResults
    ).map((contact) => {
        return <ContactCard contact={contact} />;
    });

    const onUserSearch = (e) => {
        searchHandler(e.target.value);
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
                        type="text"
                        placeholder="Search Contacts"
                        className="prompt"
                        value={searchTerm}
                        onChange={(e) => onUserSearch(e)}
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

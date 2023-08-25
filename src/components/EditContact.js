import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useContactsCrud } from "../context/ContactsCrudContext";

const EditContact = () => {
    // const location = useLocation();
    const { id } = useParams();
    const navigate = useNavigate();
    // const { id, name, email } = location.state.contact;

    const { updateContactHandler, contacts } = useContactsCrud();
    const { name, email } = contacts.find((contact) => contact.id === id);
    const [newName, setNewName] = useState(name);
    const [newEmail, setNewEmail] = useState(email);

    const update = (e) => {
        e.preventDefault();
        if (newName === "" || newEmail === "") {
            alert("All the fields are required.");
            return;
        }
        updateContactHandler({ id, name: newName, email: newEmail });
        setNewName("");
        setNewEmail("");
        navigate("/");
    };
    return (
        <div className="ui main">
            <br />
            <h2>Edit Contact</h2>
            <form className="ui form" onSubmit={update}>
                <div className="field">
                    <label>Name</label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={newName}
                        onChange={(e) => setNewName(e.target.value)}
                    />
                </div>
                <div className="field">
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={newEmail}
                        onChange={(e) => setNewEmail(e.target.value)}
                    />
                </div>
                <button className="ui button blue">Update</button>
                <Link to="/">
                    <button className="ui button blue">Cancel</button>
                </Link>
            </form>
        </div>
    );
};

export default EditContact;

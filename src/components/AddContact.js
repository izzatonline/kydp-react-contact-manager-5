import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useContactsCrud } from "../context/ContactsCrudContext";

const AddContact = () => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const { addContactHandler } = useContactsCrud();
    const navigate = useNavigate();

    const add = (e) => {
        e.preventDefault();
        if (name === "" || email === "") {
            alert("All the fields are required.");
            return;
        }
        addContactHandler({ name, email });
        setName("");
        setEmail("");
        navigate("/");
    };

    return (
        <div className="ui main">
            <br />
            <h2>Add Contact</h2>
            <form className="ui form" onSubmit={add}>
                <div className="field">
                    <label>Name</label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="field">
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <button className="ui button blue">Add</button>
                <Link to="/">
                    <button className="ui button blue">Cancel</button>
                </Link>
            </form>
        </div>
    );
};

export default AddContact;

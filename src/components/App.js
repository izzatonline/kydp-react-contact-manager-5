import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { v4 as uuid } from "uuid";
import api from "../api/contacts";
import "./App.css";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import ContactDetail from "./ContactDetail";
import DeleteContact from "./DeleteContact";
import EditContact from "./EditContact";

function App() {
    const [contacts, setContacts] = useState([]);

    //RetrieveContacts
    const RetrieveContacts = async () => {
        const response = await api.get("/contacts");
        return response.data;
    };

    const addContactHandler = async (contact) => {
        console.log(contact);
        const request = {
            id: uuid(),
            ...contact,
        };

        const response = await api.post("/contacts", request);
        setContacts([...contacts, response.data]);
    };

    const updateContactHandler = async (contact) => {
        const response = await api.put(`/contacts/${contact.id}`, contact);
        const { id } = response.data;
        setContacts(
            contacts.map((contact) => {
                return contact.id === id ? { ...response.data } : contact;
            })
        );
    };

    const removeContactHandler = async (id) => {
        await api.delete(`/contacts/${id}`);
        const newContactList = contacts.filter((contact) => {
            return contact.id !== id;
        });
        setContacts(newContactList);
    };

    useEffect(() => {
        const getAllContacts = async () => {
            const allContacts = await RetrieveContacts();
            if (allContacts) setContacts(allContacts);
        };
        getAllContacts();
    }, []);

    useEffect(() => {}, [contacts]);

    return (
        <div className="ui container">
            <Router>
                <div>
                    <Header />
                    <br />
                    <br />
                </div>
                <Switch>
                    <Route
                        path="/"
                        exact
                        render={(props) => (
                            <ContactList
                                {...props}
                                contacts={contacts}
                                getContactId={removeContactHandler}
                            />
                        )}
                    />
                    <Route
                        path="/add"
                        render={(props) => (
                            <AddContact
                                {...props}
                                addContactHandler={addContactHandler}
                            />
                        )}
                    />
                    <Route
                        path="/edit"
                        render={(props) => (
                            <EditContact
                                {...props}
                                updateContactHandler={updateContactHandler}
                            />
                        )}
                    />
                    <Route path="/contact/:id" component={ContactDetail} />
                    <Route
                        path="/delete"
                        render={(props) => (
                            <DeleteContact
                                {...props}
                                removeContactHandler={removeContactHandler}
                            />
                        )}
                    />
                </Switch>
            </Router>
        </div>
    );
}

export default App;

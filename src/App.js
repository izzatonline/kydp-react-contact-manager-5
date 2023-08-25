import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";
import ContactDetail from "./components/ContactDetail";
import DeleteContact from "./components/DeleteContact";
import EditContact from "./components/EditContact";
import { ContactsCrudContextProvider } from "./context/ContactsCrudContext";

function App() {
    return (
        <div className="ui container">
            <Router>
                <Header />
                <ContactsCrudContextProvider>
                    <Routes>
                        <Route path="/" exact element={<ContactList />} />
                        <Route path="/add" element={<AddContact />} />
                        <Route path="/edit/:id" element={<EditContact />} />
                        <Route
                            path="/contact/:id"
                            element={<ContactDetail />}
                        />
                        <Route path="/delete/:id" element={<DeleteContact />} />
                    </Routes>
                </ContactsCrudContextProvider>
            </Router>
        </div>
    );
}

export default App;

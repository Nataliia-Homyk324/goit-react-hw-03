import contactsArray from '../../../contacts.json';
import ContactList from '../ContactList/ContactList';
import SearchBox from '../SearchBox/SearchBox';
import { useState } from 'react';

import css from './App.module.css'
import ContactForm from '../ContactForm/ContactForm';
export default function App() {
    const [contacts, setContacts] = useState(contactsArray)
    const [search, setSearch] = useState("");

    const filterContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(search.toLowerCase())
  );

    const addContact = (newContact) => {
    setContacts((prevContacts) => {
      return [...prevContacts, newContact];
    });
  };
    return (
        <div className={css.container}>
            <h1 className={css.mainTitle}>Phonebook</h1>
            <ContactForm onAdd={addContact}/>
            <SearchBox value={search} onFilter={setSearch}/>
  
  
            <ContactList contactList={ filterContacts} />


        </div>
    )
}
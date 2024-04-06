import contactsArray from '../../../contacts.json'
import ContactList from '../ContactList/ContactList'

import css from './App.module.css'
export default function App() {
    return (
        <div className={css.container}>
            <h1 className={css.mainTitle}>Phonebook</h1>
  
  
            <ContactList contactList={ contactsArray} />


        </div>
    )
}
import contactsArray from '../../../contacts.json'
import ContactForm from '../ContactForm/ContactForm'

import css from './App.module.css'
export default function App() {
    return (
        <div className={css.container}>
            <h1 className={css.mainTitle}>Phonebook</h1>
  <ContactForm />
  {/* <SearchBox />
  <ContactList /> */}


        </div>
    )
}
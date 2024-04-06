import Contact from '../Contact/Contact';
import css from './ContactList.module.css';

export default function ContactList({contactList}) {
    return (
        <ul className={css.listContacts}>
            {contactList.map((contact) => (
        <li className={css.itemContact} key={contact.id}>
          <Contact data={contact}  />
        </li>
      ))}

        </ul>
    )
}
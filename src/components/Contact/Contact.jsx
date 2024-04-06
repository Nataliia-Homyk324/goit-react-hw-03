import css from './Contact.module.css';
import { BsPhone, BsPerson, BsTrash } from 'react-icons/bs';


export default function Contact({data:{ name, number }} ) {
    return (<div className={css.containerContact}>
        <div className={css.thumbContact}>
            <h2 className={css.nameContact}>
                <BsPerson size='22' />
                {name}
            </h2>
            <p className={css.numberContact}>
                <BsPhone size='22' />
                {number}
            </p>
        </div>
        <button className={css.buttonDelete} onClick={() => { }}>
            <BsTrash size='15' />
            Delete</button>
    </div>);
}


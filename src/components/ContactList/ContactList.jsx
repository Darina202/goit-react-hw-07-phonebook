import styles from './contact-list.module.css';

const ContactList = ({ items, deleteContact }) => {
  const elements = items.map(({ id, name, phone }) => (
    <li key={id} className={styles.item}>
      {name}: {phone}
      <button
        onClick={() => deleteContact(id)}
        type="button"
        className={styles.btn}
      >
        Delete
      </button>
    </li>
  ));
  return <ul className={styles.list}>{elements}</ul>;
};

export default ContactList;

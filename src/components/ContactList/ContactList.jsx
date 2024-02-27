import styles from "./ContactList.module.css";
import Contact from "../Contact/Contact";

export default function ContactList({ allPeople, onDelete }) {
  return (
    <div className={styles.listBox}>
      <ul className={styles.listElement}>
        <Contact contacts={allPeople} onDelete={onDelete} />
      </ul>
    </div>
  );
}

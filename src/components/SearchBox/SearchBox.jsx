import { useDispatch, useSelector } from "react-redux";
import styles from "./SearchBox.module.css";
import { selectFilters } from "../../redux/filters/selectors";
import { changeFilter } from "../../redux/filters/slice";

export default function SearchBox() {
  const contacts = useSelector(selectFilters);
  const dispatch = useDispatch();

  return (
    <div className={styles.inputWrapper}>
      <label className={styles.labelElement} htmlFor="input-element">
        Find contacts by name
      </label>
      <input
        value={contacts}
        onChange={(e) => dispatch(changeFilter(e.target.value))}
        className={styles.inputElement}
        type="text"
        id="input-element"
      />
    </div>
  );
}

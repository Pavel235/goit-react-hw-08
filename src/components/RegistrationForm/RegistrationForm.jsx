import { useDispatch } from "react-redux";
import { Formik, Form, Field } from "formik";
import { register } from "../../redux/auth/operations";
import styles from "./RegistrationForm.module.css";
import toast from "react-hot-toast";

export default function RegistrationForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    if (
      !values.name.trim() ||
      !values.email.trim() ||
      !values.password.trim()
    ) {
      return toast.error("Please fill in all required fileds!", {
        duration: 4000,
      });
    } else if (values.password.length < 6) {
      return toast.error("The password must be at least 6 characters long!", {
        duration: 4000,
      });
    }

    dispatch(register(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
      }}
      onSubmit={handleSubmit}
    >
      <Form className={styles.form} autoComplete="off">
        <label className={styles.label}>
          Username
          <Field className={styles.inputElement} type="text" name="name" />
        </label>
        <label className={styles.label}>
          Email
          <Field className={styles.inputElement} type="email" name="email" />
        </label>
        <label className={styles.label}>
          Password
          <Field
            className={styles.inputElement}
            type="password"
            name="password"
          />
        </label>
        <button className={styles.buttonElement} type="submit">
          Create your account
        </button>
      </Form>
    </Formik>
  );
}

import PageTitle from "../components/PageTitle/PageTitle";

export default function Home() {
  return (
    <div>
      <PageTitle>Welcome to our Phonebook!</PageTitle>
      <p
        style={{
          fontFamily: "Montseratt, sans-serif",
          fontSize: "18px",
          textAligh: "right",
          color: "black",
          marginBottom: "10px",
          fontWeight: 500,
          letterSpacing: "0.03em",
          lineHeight: 1.5,
        }}
      >
        Organize your contacts effortlessly with our user-friendly and intuitive
        Contacts Book. Whether you are a busy professional, a social butterfly,
        or simply someone who values staying connected, our platform offers a
        seamless solution for managing all your contacts in one convenient
        location.
      </p>
      <p
        style={{
          fontFamily: "Montseratt, sans-serif",
          fontSize: "18px",
          textAligh: "left",
          color: "black",
          marginBottom: "10px",
          fontWeight: 500,
          letterSpacing: "0.03em",
          lineHeight: 1.5,
        }}
      >
        With our Contacts Book, you can easily store, categorize, and access all
        your important contacts with just a few clicks. Say goodbye to scattered
        notes, misplaced numbers, and missed connections – our platform ensures
        that your contacts are always at your fingertips, ready to reach out
        whenever you need them.
      </p>
      <h3
        style={{
          fontFamily: "Montseratt, sans-serif",
          color: "black",
        }}
      >
        {" "}
        Features:{" "}
      </h3>
      <ul
        style={{
          textAligh: "left",
          fontFamily: "Montseratt, sans-serif",
          color: "black",
          ontSize: "16px",
          letterSpacing: "0.03em",
          lineHeight: 2,
        }}
      >
        <li style={{}}>
          Effortlessly add new contacts with detailed information;
        </li>
        <li>Organize contacts into customizable categories for easy access;</li>
        <li>
          Search and filter functionality for quick retrieval of specific
          contacts;
        </li>
        <li>
          Secure cloud storage ensures your contacts are safe and accessible
          from anywhere, anytime;
        </li>
        <li>User-friendly interface designed for simplicity and efficiency</li>
      </ul>
      <p
        style={{
          fontFamily: "Montseratt, sans-serif",
          fontSize: "18px",
          textAligh: "left",
          color: "black",
          marginBottom: "10px",
          fontWeight: 500,
          letterSpacing: "0.03em",
          lineHeight: 1.5,
        }}
      >
        Join us today and experience the convenience of having your entire
        network at your disposal. Stay connected, stay organized, and never miss
        a beat with our Phonebook!
      </p>
    </div>
  );
}

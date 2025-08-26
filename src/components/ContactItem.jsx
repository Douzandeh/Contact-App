function ContactItem({
  data: { id, name, lastName, email, phone },
  deleteHandler,
}) {
  const deletehandler = () => {};
  return (
    <li key={id}>
      <p>
        {name} {lastName}
      </p>
      <p>
        <span>📬</span>
        {email}
      </p>
      <p>
        <span>📞</span>
        {phone}
      </p>
      <button onClick={() => deleteHandler(id)}>🗑️</button>
    </li>
  );
}

export default ContactItem;

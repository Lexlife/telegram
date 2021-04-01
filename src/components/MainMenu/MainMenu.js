import React, { useState } from 'react';
import './MainMenu.css';

const token = '1756184090:AAFtWCxrF8JSAK6sN2tW1cgJhwgigMdH9Vk';

const MainMenu = () => {

  const [form, setForm] = useState({
    name: '',
    dateOfBirth: '',
    email: '',
    phone: '',
  });

  const submit = (event) => {
    event.preventDefault();
    const { name, dateOfBirth, email, phone } = form;

    const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=117586880&text=Имя: ${name}, Дата рождения: ${dateOfBirth}, Электронная почта: ${email}, Телефон: ${phone}, id: ${null}`;
    let xhttp = new XMLHttpRequest();
    xhttp.open('GET', url, true);
    xhttp.send();
    console.log(name, dateOfBirth, email, phone);
    setForm({
      name: '',
      dateOfBirth: '',
      email: '',
      phone: '',
    });
  };

  const update = event => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <form className="form" onSubmit={submit}>
      <label>
        Имя:
        <input
          value={form.name}
          name="name"
          onChange={update}
        />
      </label>

      <label>
        Дата рождения:
        <input
          value={form.dateOfBirth}
          name="dateOfBirth"
          onChange={update}
        />
      </label>

      <label>
        Электронная почта:
        <input
          value={form.email}
          name="email"
          onChange={update}
        />
      </label>

      <label>
        Телефон:
        <input
          value={form.phone}
          name="phone"
          onChange={update}
        />
      </label>
      <button className={'btn btn-success'}>Отправить</button>
    </form>
  );
};

export default MainMenu;

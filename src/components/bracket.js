import React, { useState } from "react";
import "../App.css";

const Bracket = () => {
  const [name, setName] = useState('');
  const [email, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const submit = async(e) => {
    e.preventDefault();

    const response = await fetch("https://localhost:8000/user/register", {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
          name,
          email,
          password
      })
      });

      const content = await response.json();

      console.log(content);
  }

  return (
    <div className="embed-outside">
      <iframe
        className="embed"
        width="100%"
        height="500"
        frameborder="0"
        scrolling="no"
        src="https://onedrive.live.com/embed?resid=BC415D4E2DE81F43%21106&authkey=%21AE1EUOK8NpKxivM&em=2&AllowTyping=True&wdHideGridlines=True&wdHideHeaders=True&wdDownloadButton=True&wdInConfigurator=True"
      ></iframe>{" "}
      <button type="submit" className="w-100 btn btn-lg btn-primary">Submit</button>
    </div>
  );
};

export default Bracket;

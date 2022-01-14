import React, { SyntheticEvent, useState } from "react";

const Test = () => {
    const [username, setUsername] = useState('');

  const submit = async (e) => {
    const response = await fetch("https://localhost:8000/user/username", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username,
      }),
    });
    const content = await response.json();

    console.log(content);
  };

  return (
    <form onSubmit={submit}>
      <div className="form-floating">
        <input
          type="email"
          className="form-control"
          id="floatingInput"
          placeholder="name@example.com"
          required
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <button
        className="w-100 btn btn-lg btn-primary"
        type="submit"
        onClick={submit}
      >
        Submit
      </button>
    </form>
  );
};

export default Test;
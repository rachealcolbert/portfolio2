import React, { useState } from "react";

import { validateEmail } from "../../utils/helpers";

function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const { name, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      setFormState({ [e.target.name]: e.target.value });
      console.log("Form", formState);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage("Your email is invalid.");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage("");
      }
    }
  };

  return (
    <section>
      <h1 className="form-name" data-testid="h1tag">
        Contact me
      </h1>
      <form className="row g-3" id="contact-form" onSubmit={handleSubmit}>
        <div className="col-md-6">
          <label className="form-label" htmlFor="name">
            Name:
          </label>
          <input
            type="text"
            className="form-control"
            name="name"
            defaultValue={name}
            onBlur={handleChange}
          />
        </div>
        <div className="col-md-6">
          <label className="form-label" htmlFor="email">
            Email address:
          </label>
          <input
            type="email"
            className="form-control"
            name="email"
            defaultValue={email}
            onBlur={handleChange}
          />
        </div>
        <div className="col-12">
          <label htmlFor="message">Message:</label>
          <textarea
            name="message"
            className="form-control"
            rows="5"
            defaultValue={message}
            onBlur={handleChange}
          />
        </div>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <div className="col-12">
          <button className="btn btn-dark" data-testid="button" type="submit">
            Submit
          </button>
        </div>
      </form>
    </section>
  );
}

export default ContactForm;

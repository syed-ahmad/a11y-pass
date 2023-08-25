import React, { useState } from "react";
import CheckList from "./CheckList";
import { rules, handleValidation } from "./rules";

const CreatePasswordForm = () => {
  const [formData, setFormData] = useState({ password: "" });
  const [errors, setErrors] = useState([]);
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  const validate = (e) => {
    setErrors(handleValidation(e));
  };

  const handleChange = (e) => {
    setFormData({ password: e.target.value });
    validate(e.target.value);
  };

  const handleSubmit = () => {
    if (formData.password && !errors.length) alert("password accepted");
  };

  return (
    <form>
      <div style={{ textAlign: "left" }}>
        <label
          htmlFor="password" //associate label with input
        >
          password
        </label>
        <div>
          <input
            type={show ? "text" : "password"}
            id="password"
            autocomplete="new-password" //always use auto-complete when appropriate
            value={formData.password}
            onChange={handleChange}
            aria-describedby="requirements" //associate input with checklist
            required
          />

          <button
            role="switch" //use role=switch to alert toggability
            aria-checked={show}
            onClick={handleClick}
          >
            {show ? "hide" : "show"}
          </button>
          <button
            style={{ marginLeft: "5px" }}
            type="submit"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
      <CheckList
        id="requirements"
        rules={rules}
        errors={errors}
        value={formData.password}
      />
    </form>
  );
};

export default CreatePasswordForm;

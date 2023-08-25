export const rules = [
  { key: "minLength", description: "6 characters minimum" },
  { key: "containsNumber", description: "One number" },
  {
    key: "containsUpper",
    description: "One uppercase letter"
  },
  {
    key: "containsSpecial",
    description: "One special character !@#$%^&*"
  }
];

export const handleValidation = (value) => {
  let errors = [];
  // eslint-disable-next-line no-useless-escape
  if (!/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g.test(value))
    errors = [...errors, "containsSpecial"];
  if (!/\d/.test(value)) errors = [...errors, "containsNumber"];
  if (!/[A-Z]/.test(value)) errors = [...errors, "containsUpper"];
  if (!value.length || value?.length < 6) errors = [...errors, "minLength"];

  return errors;
};

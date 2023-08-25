import React from "react";
import { TbCheck } from "react-icons/tb";
import { IoClose } from "react-icons/io5";

//screen reader only styling from WebAim
const visuallyHidden = {
  position: "absolute",
  left: "-10000px",
  top: "auto",
  width: "1px",
  height: "1px",
  overflow: "hidden"
};

const CheckListItem = ({ id, description, isValid = false }) => {
  const icon = isValid ? (
    //informative images/icons need alts/aria-labels. combine with aria-describedby to associate with corresping hint
    <TbCheck aria-label="check mark" aria-describedby={id} />
  ) : (
    <IoClose aria-label="x mark" aria-describedby={id} />
  );
  return (
    <div
      style={{ display: "flex", alignItems: "center" }}
      aria-label={`${description}.`} //end with period (full stop). prevents 'run-on' sentence like announcement
    >
      {icon}
      <p id={id} style={{ margin: "5px" }}>
        {description}
      </p>
    </div>
  );
};

const CheckList = ({ id, rules, errors, value }) => {
  //progress status for non-visual users
  const progress = !value ? 0 : errors ? 4 - errors?.length : 4;

  return (
    <div id={id}>
      <label
        style={visuallyHidden}
        htmlFor="checklist" //associate label with checklist
      >
        Password Requirements
      </label>
      <div id="checklist">
        {rules.map((rule) => (
          <CheckListItem
            key={rule.key}
            id={rule.key}
            description={rule.description}
            isValid={value && !errors?.includes(rule.key)}
          />
        ))}
        <p
          style={visuallyHidden}
          aria-live="polite" //aria-live=polite as nonintrusive announcement
        >
          {`${progress} out of 4 requirements completed`}
        </p>
      </div>
    </div>
  );
};

export default CheckList;

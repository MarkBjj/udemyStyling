import { useState } from "react";
import { styled } from "styled-components";

{
  /* // use back ticks ``  */
}

const ControlContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${({ $invalid }) => ($invalid ? "#ef4444" : "rgb(2, 13, 30)")};
`;

const Input = styled.input`
  display: block;
  width: 100%;
  padding: 0.5rem;
  border: 1px solid ${({ $invalid }) => ($invalid ? "#b91c1c" : "#d1d5db")};
  border-radius: 0.25rem;
  font-size: 1rem;
  line-height: 1.5rem;
  color: ${({ $invalid }) => ($invalid ? "#f87171" : "black")};
  background-color: ${({ $invalid }) =>
    $invalid ? "rgb(101, 58, 58)" : "white"};

  &:focus {
    outline: none;
    border-color: #2563eb;
    box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.5);
  }
`;
export default function AuthInputs() {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleInputChange(identifier, value) {
    if (identifier === "email") {
      setEnteredEmail(value);
    } else {
      setEnteredPassword(value);
    }
  }

  function handleLogin() {
    setSubmitted(true);
  }

  const emailNotValid = submitted && !enteredEmail.includes("@");
  const passwordNotValid = submitted && enteredPassword.trim().length < 6;

  return (
    <div id="auth-inputs">
      <ControlContainer>
        <p>
          {/* to style in component, add prop className to Label and Input, then
          use conditional rendering to add a className when invalid */}
          <Label $invalid={emailNotValid}>Email</Label>
          <Input
            type="email"
            $invalid={emailNotValid}
            //style={{ backgroundColor: emailNotValid ? "red" : "white" }}
            onChange={(event) => handleInputChange("email", event.target.value)}
          />
        </p>
        <p>
          <Label $invalid={passwordNotValid}>Password</Label>
          <Input
            type="password"
            $invalid={passwordNotValid}
            //style={{ backgroundColor: passwordNotValid ? "red" : "white" }}
            // undefined (not '' or false) so React omits the className attribute entirely when valid
            onChange={(event) =>
              handleInputChange("password", event.target.value)
            }
          />
        </p>
      </ControlContainer>
      <div className="actions">
        <button type="button" className="text-button">
          Create a new account
        </button>
        <button className="button" onClick={handleLogin}>
          Sign In
        </button>
      </div>
    </div>
  );
}

import { styled } from "styled-components";

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

export default function CustomInput({ label, invalid, ...props }) {
  return (
    <p>
      <Label $invalid={invalid}>{label}</Label>
      <Input $invalid={invalid} {...props} />
    </p>
  );
}

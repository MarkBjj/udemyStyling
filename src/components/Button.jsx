import { styled } from "styled-components";
const Button = styled.button`
  background-color: rgb(225, 136, 34);
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #dfa46a;
  }
`;
export default Button;

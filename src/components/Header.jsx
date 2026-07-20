import logo from "../assets/logo.png";
import classes from "./Header.module.css";

export default function Header() {
  return (
    <header className={classes.header}>
      <img src={logo} alt="A canvas" />
      <h1>React Art</h1>
      <p>A community of visionaries and madmen.</p>
    </header>
  );
}

import logo from "../assets/logo.png";

export default function Header() {
  return (
    <header className="flex flex-col items-center mt-4 mb-4 p-16">
      <img
        src={logo}
        className="object-contain mb-8 width-44 height-28"
        alt="A canvas"
      />
      <h1 className="text-3xl font-bold tracking-widest letter-spacing-0.4em text-center uppercase text-amber-950 font-family-Helvetica margin-0">
        React Art
      </h1>
      <p className="text-center color-#a39191 margin-0">
        A community of visionaries and madmen.
      </p>
    </header>
  );
}

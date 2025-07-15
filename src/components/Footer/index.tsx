import Logo from "../../assets/logo-full.svg";

export const Footer = () => {
  return (
    <footer className="flex flex-row items-center justify-evenly w-full bg-nord-bg2 text-nord-btn-secondary">
      <img src={Logo} alt="Logo" />
      <div className="flex flex-col items-center justify-center p-5">
        <p className="text-md ">
          © {new Date().getFullYear()} Easy CV. All rights reserved.
        </p>
        <p className="text-sm">
          Made with ❤️ by{" "}
          <a
            className="text-nord-green"
            href="https://github.com/vennby"
            target="_blank"
            rel="noopener noreferrer"
          >
            vennby
          </a>{" "}
          and{" "}
          <a
            className="text-nord-green"
            href="https://github.com/joejo-joestar"
            target="_blank"
            rel="noopener noreferrer"
          >
            joejo-joestar
          </a>
        </p>
      </div>
    </footer>
  );
};

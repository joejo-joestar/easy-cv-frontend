import {
  faDownload,
  faSquareCheck,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import Logo from "../../assets/logo-full.svg";
import { LinkButton } from "../../components/LinkButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Footer } from "../../components/Footer";

export const Home = () => {
  return (
    <>
      {/* MARK: hero */}
      <section className="flex flex-col items-center justify-center h-screen gap-5 text-center md:px-3 px-2">
        <img className="md:w-1/3 w-1/2 max-w-sm" src={Logo} alt="Logo" />
        <h2 className="font-sans text-2xl">
          A quick resume modifier to tailor your resume appropriately within
          minutes.
        </h2>
        <div className="flex flex-row gap-3">
          <LinkButton to="/register" name="Get Started" />
          <LinkButton to="/login" name="Sign In" secondary />
        </div>
      </section>
      {/* MARK: info */}
      <section className="flex lg:flex-row flex-col items-center justify-evenly h-screen gap-10 text-center py-5">
        <img
          className="md:h-full p-5"
          src="src/assets/cvs-layerd.png"
          alt="cvs"
        />
        <div className="flex flex-col gap-5 md:text-3xl text-2xl align-center justify-start text-start">
          <span>
            <FontAwesomeIcon className="text-nord-btn-primary" icon={faUser} />{" "}
            fill in your profile
          </span>
          <span>
            <FontAwesomeIcon
              className="text-nord-btn-primary"
              icon={faSquareCheck}
            />{" "}
            select your skills
          </span>
          <span>
            <FontAwesomeIcon
              className="text-nord-btn-primary"
              icon={faDownload}
            />{" "}
            download your resume
          </span>
        </div>
      </section>
      {/* MARK: cta */}
      <section className="flex flex-col items-center justify-center h-screen gap-5 text-center">
        <h1 className="md:text-5xl text-3xl font-black max-w-1/2">
          Start building beautiful, tailored resumes in minutes
        </h1>
        <div className="flex flex-row gap-3">
          <LinkButton to="/register" name="Get Started" />
          <LinkButton to="/login" name="Sign In" secondary />
        </div>
      </section>
      <Footer />
    </>
  );
};

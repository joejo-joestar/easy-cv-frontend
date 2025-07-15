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
      <section className="flex flex-col items-center justify-center h-screen gap-5 text-center">
        <img className="w-1/3 max-w-sm" src={Logo} alt="Logo" />
        <h2 className="font-sans text-2xl">
          A quick resume modifier to tailor your resume appropriately within
          minutes.
        </h2>
        <div className="flex flex-row gap-3">
          <LinkButton to="/register" name="Get Started" />
          <LinkButton to="/login" name="Sign In" secondary />
        </div>
      </section>
      <section className="flex lg:flex-row flex-col items-center justify-evenly h-screen gap-10 text-center py-5">
        <img className="h-full" src="src/assets/cvs-layerd.png" alt="cvs" />
        <div className="flex flex-col gap-5 text-3xl align-center justify-start text-start">
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
      <section className="flex flex-col items-center justify-center h-screen gap-5 text-center">
        <h1 className="text-5xl font-black max-w-1/2">
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

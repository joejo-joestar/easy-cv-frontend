import Logo from "../../assets/logo-full.svg";
import { LinkButton } from "../../components/LinkButton";

export const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-10 text-center">
      <img className="w-1/3 max-w-sm" src={Logo} alt="Logo" />
      <p className="font-sans">
        A quick resume modifier to tailor your resume appropriately within
        minutes.
      </p>
      <div className="flex flex-row gap-3">
        <LinkButton to="/register" name="Get Started" />
        <LinkButton to="/login" name="Sign In" secondary />
      </div>
    </div>
  );
};

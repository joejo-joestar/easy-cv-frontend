import Logo from "../../assets/logo-full.svg";
import { NavLink } from "react-router";

export const Register = () => {
  return (
    <section className="flex flex-col items-center justify-center h-screen gap-5 text-center md:px-3 px-2">
      <NavLink className=" flex justify-center md:w-1/6 w-1/2 max-w-sm" to="/">
        <img src={Logo} alt="Logo" />
      </NavLink>

      <h1 className="md:text-3xl text-xl font-black max-w-1/2">Sign Up</h1>
      <form
        className="flex flex-col gap-4 w-full justify-center items-center"
        action=""
        method="post"
      >
        {/* MARK: username */}
        <div className="flex flex-col text-start w-1/2 md:w-1/3">
          <label className="text-nord-btn-secondary" htmlFor="username">
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Enter your username"
            className="border-0 bg-nord-bg2 rounded p-2 text-lg"
            required
          />
        </div>
        {/* MARK: name */}
        <div className="flex flex-col text-start w-1/2 md:w-1/3">
          <label className="text-nord-btn-secondary" htmlFor="username">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your full name"
            className="border-0 bg-nord-bg2 rounded p-2 text-lg"
            required
          />
        </div>
        {/* MARK: password */}
        <div className="flex flex-col text-start w-1/2 md:w-1/3">
          <label className="text-nord-btn-secondary" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            className="border-0 bg-nord-bg2 rounded p-2 text-lg"
            required
          />
        </div>
        {/* MARK: confirm password */}
        <div className="flex flex-col text-start w-1/2 md:w-1/3">
          <label className="text-nord-btn-secondary" htmlFor="password">
            Confirm Password
          </label>
          <input
            type="password"
            id="confirm_password"
            name="confirm_password"
            placeholder="Confirm your password"
            className="border-0 bg-nord-bg2 rounded p-2 text-lg"
            required
          />
        </div>
        <button
          type="submit"
          className="border-0 bg-nord-btn-primary text-nord-bg hover:bg-nord-btn-secondary hover:text-nord-bg rounded-md md:px-9 md:py-4 px-5 py-2 md:text-lg font-semibold transition-all cursor-pointer max-w-1/2"
        >
          Sign Up
        </button>
        <p className="mt-4">
          Already have an account?{" "}
          <NavLink
            to="/login"
            className="text-nord-btn-primary hover:text-nord-btn-secondary transition-all"
          >
            Login here
          </NavLink>
        </p>
      </form>
    </section>
  );
};

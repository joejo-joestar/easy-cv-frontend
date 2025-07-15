import { NavLink } from "react-router";

type Props = {
  to: string;
  name: string;
  secondary?: boolean;
};

export const LinkButton = (props: Props) => {
  // Use NavLink for navigation with active styles
  const buttonClass = !props.secondary
    ? "border-0 bg-nord-btn-primary text-nord-bg hover:bg-nord-btn-secondary hover:text-nord-bg"
    : "border-3 border-nord-btn-secondary bg-none hover:border-nord-btn-primary hover:text-nord-btn-primary text-nord-btn-secondary";
  return (
    <NavLink
      className={`${buttonClass} rounded-md px-9 py-4 text-xl font-semibold  transition-all`}
      to={props.to}
    >
      {props.name}
    </NavLink>
  );
};

import React from "react";
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
    : "border border-nord-btn-secondary bg-none hover:bg-nord-btn-secondary hover:text-nord-bg text-nord-btn-secondary";
  return (
    <NavLink
      className={`${buttonClass} rounded-sm px-8 py-2 text-lg font-semibold  transition-all`}
      to={props.to}
    >
      {props.name}
    </NavLink>
  );
};

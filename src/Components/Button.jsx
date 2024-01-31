import React from "react";
import { Link } from "react-router-dom";

export const Button = ({ children, type, to }) => {
  const base =
    " text-base inline-block bg-green rounded-[100px] text-light focus:ring-[#98A2B3]";

  const styles = {
    primary:
      "py-2 px-6 text-base bg-light text-green inline-block rounded-[100px] border-solid border-2 border-green font-semibold hover:text-white hover:bg-green hover:border-white cursor-pointer",
    small:
      base +
      " py-2 px-6 text-base border-solid border-2 border-light cursor-pointer",
    medium: " bg-white py-2 px-6 text-base border-solid border-2 border-light",
  };

  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );

  return <div className={styles[type]}> {children}</div>;
};
